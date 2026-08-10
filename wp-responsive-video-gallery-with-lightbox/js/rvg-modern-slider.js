/**
 * Responsive Video Gallery - Modern Slider Engine
 * Vanilla JS, no jQuery dependency. Alternative to the Legacy (bxSlider) engine.
 *
 * Applies fixes already learned the hard way in the sibling Thumbnail Slider plugin's
 * bxSlider-based engine, built in from the start rather than discovered through bug
 * reports:
 *  - Clone-buffer boundary is always a fixed 0 at the low end (not a computed value that
 *    can go negative when there are more real slides than visible slots).
 *  - A forced reflow happens before every animated move, so a move that starts right
 *    after a loop-reset always has something to animate from (otherwise the browser can
 *    coalesce both style writes and skip the transition entirely).
 *  - Loop-reset completion uses transitionend with a timeout fallback, so navigation
 *    never permanently gets stuck if a transition event is missed.
 *  - Pager clicks cancel any pending loop-reset immediately, so a stale reset can't
 *    silently override a pager click a moment later.
 */
(function () {
	'use strict';

	function initSlider(container, opts) {
		var track = container.querySelector('.rvg-ms-track');
		var slides = Array.prototype.slice.call(track.children);
		var realCount = slides.length;
		if (realCount === 0) return;

		var visible = Math.max(1, opts.visible || 1);
		var scrollAmt = Math.max(1, opts.scroll || 1);
		var circular = !!opts.circular;
		var speed = opts.speed || 500;
		var fade = visible === 1;

		var cloneCount = (circular && realCount > 1) ? Math.min(visible, realCount) : 0;
		var index = cloneCount; // current position within the (possibly cloned) track
		var pendingResetTimer = null;
		var resetListenerAttached = false;

		// --- Build clones for seamless looping ---
		if (circular && realCount > 1) {
			var headClones = slides.slice(-cloneCount).map(function (s) { return s.cloneNode(true); });
			var tailClones = slides.slice(0, cloneCount).map(function (s) { return s.cloneNode(true); });
			// insertBefore(c, track.firstChild) called repeatedly reverses insertion
			// order each time (firstChild changes with every insert) - reverse the
			// array first so the final DOM order matches the original slide order.
			// Without this, the clone immediately before the real content ends up
			// being a clone of the FIRST real slide instead of the LAST one, so
			// clicking "prev" from the first slide briefly showed the first slide's
			// own thumbnail again instead of the last slide's, before the loop
			// correction silently snapped it to the right place.
			headClones.slice().reverse().forEach(function (c) { track.insertBefore(c, track.firstChild); });
			tailClones.forEach(function (c) { track.appendChild(c); });
		}

		// Wire up the lightbox now that cloning is done, so it finds and attaches
		// click handlers to every trigger currently in the DOM, including clones.
		// Must respect the Lightbox Engine setting - this previously always called
		// the modern RVGLightbox regardless of setting, so when Legacy was selected,
		// window.RVGLightbox was never even loaded and nothing wired up at all.
		if (opts.lightboxEngine === 'legacy') {
			if (window.jQuery && window.jQuery.fn && window.jQuery.fn.fancybox_vgl) {
				window.jQuery('.video_lbox').fancybox_vgl({
					type: 'iframe',
					overlayColor: '#000000',
					padding: 10,
					autoScale: true,
					autoDimensions: true,
					transitionIn: 'none',
					transitionOut: 'none',
					titlePosition: 'outside',
					cyclic: !!circular,
					hideOnContentClick: false,
					width: 650,
					height: 400,
					titleFormat: function (title, currentArray, currentIndex, currentOpts) {
						var currtElem = window.jQuery('a[href="' + currentOpts.href + '"]');
						var isoverlay = currtElem.attr('data-overlay');
						if (isoverlay === '1' && window.jQuery.trim(title) !== '') {
							return '<span id="fancybox_vgl-title-over">' + title + '</span>';
						}
						return '';
					}
				});
			}
		} else if (window.RVGLightbox) {
			window.RVGLightbox.initGallery('.video_lbox', circular);
		}

		var allSlides = Array.prototype.slice.call(track.children);
		var total = allSlides.length;
		var lower = cloneCount; // fixed lower bound of "real" content - never negative
		var upper = cloneCount + realCount - 1;

		function slideWidth() {
			// Slides are fixed-pixel-width (from the imagewidth/imageMargin settings,
			// same as the Legacy/bxSlider engine), not responsive/viewport-relative -
			// measure the actual rendered slide instead of assuming a width.
			var sample = allSlides[0];
			if (!sample) return 0;
			var rect = sample.getBoundingClientRect();
			var marginRight = parseFloat(getComputedStyle(sample).marginRight) || 0;
			return rect.width + marginRight;
		}

		function positionTrack(withTransition) {
			track.style.transition = withTransition ? ('transform ' + speed + 'ms ease') : 'none';
			if (fade) {
				allSlides.forEach(function (s, i) {
					s.style.opacity = (i === index) ? '1' : '0';
				});
			} else {
				track.style.transform = 'translateX(-' + (index * slideWidth()) + 'px)';
			}
		}

		function forceReflow() {
			// eslint-disable-next-line no-unused-expressions
			track.offsetHeight;
		}

		var moveGeneration = 0;

		function afterMove(generation, cb) {
			var done = false;
			function finish() {
				if (done) return;
				done = true;
				track.removeEventListener('transitionend', finish);
				// If a newer move has started since this one was queued, this
				// correction is stale - skip it. The newer move's own afterMove
				// callback will run its own correction against current state.
				if (generation !== moveGeneration) return;
				cb();
			}
			track.addEventListener('transitionend', finish);
			setTimeout(finish, speed + 100); // fallback in case transitionend is missed
		}

		function goTo(newIndex, withTransition) {
			index = newIndex;
			positionTrack(withTransition !== false);
			renderPager();
		}

		var isAnimating = false;

		function move(delta) {
			if (isAnimating) return;

			if (pendingResetTimer) {
				clearTimeout(pendingResetTimer);
				pendingResetTimer = null;
			}

			moveGeneration++;
			var thisGeneration = moveGeneration;
			isAnimating = true;

			// Ensure the browser has fully committed the current position before
			// starting a new transition - without this, a move can occasionally
			// briefly flash the wrong frame instead of animating cleanly, especially
			// right after a prior instant reposition (e.g. the very first move after
			// page load, or right after a loop-reset snap-back).
			forceReflow();

			var next = index + delta * scrollAmt;

			if (!circular) {
				next = Math.max(0, Math.min(next, total - visible));
				goTo(next, true);
				setTimeout(function () { isAnimating = false; }, speed + 50);
				return;
			}

			goTo(next, true);

			// If we've moved past the real-content buffer, snap back to the equivalent
			// real position once the animated move finishes - but only if the boundary
			// is actually exceeded, and always clamp the reset target to the fixed lower
			// bound rather than a value that could go negative with more real slides
			// than visible slots.
			afterMove(thisGeneration, function () {
				if (next > upper) {
					var resetTo = lower + ((next - lower) % realCount);
					forceReflow();
					goTo(resetTo, false);
				} else if (next < lower) {
					var wrapped = ((next - lower) % realCount + realCount) % realCount;
					var resetTo2 = lower + wrapped;
					forceReflow();
					goTo(resetTo2, false);
				}
				isAnimating = false;
			});
		}

		// --- Arrows ---
		var prevBtn = container.querySelector('.rvg-ms-prev');
		var nextBtn = container.querySelector('.rvg-ms-next');
		if (prevBtn) prevBtn.addEventListener('click', function () { move(-1); });
		if (nextBtn) nextBtn.addEventListener('click', function () { move(1); });

		// --- Pager ---
		var pagerEl = container.querySelector('.rvg-ms-pager');
		// Page count is based on how many slides are visible at once, not how many
		// slides move per click (scrollAmt) - these are different things. With scrollAmt
		// used here, a slider with exactly as many real slides as visible could produce
		// far more dots than the content has "pages", and clicking dots beyond the first
		// would try to scroll past the actual content into empty space.
		var pageCount = Math.max(1, Math.ceil(realCount / visible));

		function renderPager() {
			if (!pagerEl) return;
			var current = Math.round(((index - lower) % realCount + realCount) % realCount / visible);
			Array.prototype.forEach.call(pagerEl.children, function (dot, i) {
				dot.classList.toggle('rvg-ms-pager-active', i === current);
			});
		}

		if (pagerEl && pageCount > 1) {
			pagerEl.innerHTML = '';
			for (var p = 0; p < pageCount; p++) {
				var dot = document.createElement('button');
				dot.type = 'button';
				dot.className = 'rvg-ms-pager-dot';
				(function (targetIndex) {
					dot.addEventListener('click', function () {
						if (isAnimating) return;
						if (pendingResetTimer) { clearTimeout(pendingResetTimer); pendingResetTimer = null; }
						isAnimating = true;
						moveGeneration++;
						forceReflow();
						var target = lower + targetIndex * visible;
						if (!circular) {
							target = Math.max(lower, Math.min(target, lower + total - visible));
						}
						goTo(target, true);
						setTimeout(function () { isAnimating = false; }, speed + 50);
					});
				})(p);
				pagerEl.appendChild(dot);
			}
			renderPager();
		} else if (pagerEl) {
			pagerEl.innerHTML = '';
		}

		// --- Autoplay ---
		var autoTimer = null;
		function startAuto() {
			if (!opts.auto) return;
			stopAuto();
			autoTimer = setInterval(function () { move(1); }, opts.pause || 3000);
		}
		function stopAuto() {
			if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
		}
		if (opts.auto) {
			startAuto();
			if (opts.pauseOnHover) {
				container.addEventListener('mouseenter', stopAuto);
				container.addEventListener('mouseleave', startAuto);
			}
		}

		// --- Touch / swipe ---
		var touchStartX = null;
		track.addEventListener('touchstart', function (e) {
			touchStartX = e.touches[0].clientX;
		}, { passive: true });
		track.addEventListener('touchend', function (e) {
			if (touchStartX === null) return;
			var dx = e.changedTouches[0].clientX - touchStartX;
			if (Math.abs(dx) > 40) {
				move(dx < 0 ? 1 : -1);
			}
			touchStartX = null;
		});

		// --- Resize: viewport width changes affect the pixel translation ---
		window.addEventListener('resize', function () {
			positionTrack(false);
		});

		// Initial position (no transition on first paint)
		positionTrack(false);
	}

	window.RVGModernSlider = {
		init: function (containerSelector, opts) {
			var el = document.querySelector(containerSelector);
			if (!el) return;
			initSlider(el, opts || {});
		}
	};
})();
