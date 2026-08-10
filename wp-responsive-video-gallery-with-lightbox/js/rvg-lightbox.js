/**
 * Responsive Video Gallery - Modern Lightbox
 * Dependency-free replacement for the bundled FancyBox 1.3.6 (jQuery, 2012).
 * Handles video embeds (YouTube/Dailymotion iframes and, in Pro, HTML5/Vimeo/Metacafe)
 * shown in a responsive overlay, with keyboard nav and prev/next between videos in the
 * same gallery.
 */
(function () {
	'use strict';

	var CURRENT = null; // { items: [...], index, overlay, iframeWrap, titleEl }

	function buildOverlay() {
		var overlay = document.createElement('div');
		overlay.className = 'rvg-lightbox-overlay';
		overlay.innerHTML =
			'<div class="rvg-lightbox-inner">' +
				'<button type="button" class="rvg-lightbox-close" aria-label="Close">&times;</button>' +
				'<button type="button" class="rvg-lightbox-prev" aria-label="Previous">&#8249;</button>' +
				'<button type="button" class="rvg-lightbox-next" aria-label="Next">&#8250;</button>' +
				'<div class="rvg-lightbox-frame-wrap"><div class="rvg-lightbox-frame-ratio"></div></div>' +
				'<div class="rvg-lightbox-title"></div>' +
			'</div>';
		document.body.appendChild(overlay);
		return overlay;
	}

	function renderCurrent() {
		var item = CURRENT.items[CURRENT.index];
		var ratioBox = CURRENT.overlay.querySelector('.rvg-lightbox-frame-ratio');
		ratioBox.innerHTML = '<iframe src="' + item.href + '" frameborder="0" allow="autoplay; fullscreen; encrypted-media" allowfullscreen></iframe>';

		var titleEl = CURRENT.overlay.querySelector('.rvg-lightbox-title');
		if (item.showOverlay && item.title) {
			// Title can contain markup (a link + a description <div>), same as the
			// original plugin's data-title attribute - not plain text.
			titleEl.innerHTML = item.title;
			titleEl.style.display = 'block';
		} else {
			titleEl.innerHTML = '';
			titleEl.style.display = 'none';
		}

		var prevBtn = CURRENT.overlay.querySelector('.rvg-lightbox-prev');
		var nextBtn = CURRENT.overlay.querySelector('.rvg-lightbox-next');
		var hasMultiple = CURRENT.items.length > 1;
		prevBtn.style.display = hasMultiple ? 'flex' : 'none';
		nextBtn.style.display = hasMultiple ? 'flex' : 'none';
	}

	function stopPlayback() {
		if (!CURRENT) return;
		var ratioBox = CURRENT.overlay.querySelector('.rvg-lightbox-frame-ratio');
		// Clearing the iframe src is the standard way to actually stop a YouTube/
		// Dailymotion embed's audio/video rather than just hiding the overlay.
		ratioBox.innerHTML = '';
	}

	function close() {
		if (!CURRENT) return;
		stopPlayback();
		document.body.removeChild(CURRENT.overlay);
		document.body.classList.remove('rvg-lightbox-open');
		document.removeEventListener('keydown', onKeydown);
		CURRENT = null;
	}

	function go(delta) {
		if (!CURRENT) return;
		var n = CURRENT.items.length;
		var next = CURRENT.index + delta;
		if (next < 0) {
			next = CURRENT.circular ? n - 1 : 0;
		} else if (next >= n) {
			next = CURRENT.circular ? 0 : n - 1;
		}
		if (next === CURRENT.index) return;
		CURRENT.index = next;
		renderCurrent();
	}

	function onKeydown(e) {
		if (e.key === 'Escape') close();
		else if (e.key === 'ArrowLeft') go(-1);
		else if (e.key === 'ArrowRight') go(1);
	}

	function open(items, startIndex, circular) {
		close(); // safety: never stack two instances
		var overlay = buildOverlay();
		CURRENT = { items: items, index: startIndex, overlay: overlay, circular: circular };
		renderCurrent();
		document.body.classList.add('rvg-lightbox-open');

		overlay.querySelector('.rvg-lightbox-close').addEventListener('click', close);
		overlay.querySelector('.rvg-lightbox-prev').addEventListener('click', function () { go(-1); });
		overlay.querySelector('.rvg-lightbox-next').addEventListener('click', function () { go(1); });
		overlay.addEventListener('click', function (e) {
			if (e.target === overlay) close();
		});
		document.addEventListener('keydown', onKeydown);
	}

	/**
	 * Wires up a gallery: any element matching `triggerSelector` (document-wide)
	 * becomes a lightbox trigger, grouped together for prev/next. Each slider instance
	 * in this plugin already renders its video links with a unique per-instance class
	 * (matching how the old FancyBox setup used a per-slider `uniqObj` for grouping),
	 * so a plain selector is enough - no separate container scoping needed.
	 */
	function initGallery(triggerSelector, circular) {
		var triggers = document.querySelectorAll(triggerSelector);
		if (!triggers.length) return;

		var items = [];
		Array.prototype.forEach.call(triggers, function (el) {
			items.push({
				href: el.getAttribute('href'),
				title: el.getAttribute('data-title') || '',
				showOverlay: el.getAttribute('data-overlay') === '1',
			});
		});

		Array.prototype.forEach.call(triggers, function (el, idx) {
			el.addEventListener('click', function (e) {
				e.preventDefault();
				open(items, idx, circular);
			});
		});
	}

	window.RVGLightbox = { initGallery: initGallery, close: close };
})();
