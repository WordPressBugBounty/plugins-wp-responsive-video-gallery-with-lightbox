=== Video Gallery - YouTube, Vimeo & Video Slider with Lightbox ===
Contributors:nik00726
Donate link:http://www.i13websolution.com/donate-wordpress_image_thumbnail.php
Tags:video gallery,youtube,vimeo,video slider,lightbox,video carousel,youtube gallery,video player,responsive,gutenberg block
Requires at least:3.5
Tested up to:7.0
Version:1.0.48
Stable tag:1.0.48
License:GPLv2 or later
License URI:http://www.gnu.org/licenses/gpl-2.0.html

Add a responsive YouTube, Vimeo & Dailymotion video gallery slider with lightbox to WordPress. Auto-fetches titles & thumbnails. Gutenberg block included.

== Description ==

**Video Gallery** turns any WordPress site into a video showcase in minutes. Paste in YouTube, Vimeo, or Dailymotion video URLs — the title, description, and thumbnail all fetch automatically — and display them in a responsive, animated slider with a proper lightbox popup. No coding, no manual thumbnail hunting.

> 🚀 **Want more?** PRO unlocks unlimited video galleries, Metacafe and custom HTML5 video, Elementor & Divi widgets, bulk import from a YouTube channel or playlist, real easing animations, and full block-editor video management. See "Pro Version Features" below, or [get PRO here](https://www.i13websolution.com/product/wordpress-responsive-video-gallery-with-lightbox-pro/).

**Find WordPress Video Gallery Pro Plugin (Unlimited Video Galleries + Elementor/Divi + Bulk YouTube Import) at [WordPress Video Gallery Pro](https://www.i13websolution.com/product/wordpress-responsive-video-gallery-with-lightbox-pro/)**

**[Live Demo WordPress Responsive Video Carousel With Lightbox](http://blog.i13websolution.com/live-preview-wp-responsive-video-gallery/)**

**[Pro Plugin Video](https://www.youtube.com/watch?v=McMQJjHxi_4)**

https://www.youtube.com/watch?v=McMQJjHxi_4


**Please rate this plugin if you find it useful**


**=Features=**


1. Add unlimited videos to one video gallery slider (YouTube, Vimeo, Dailymotion).

2. Auto-fetch video title, description, and thumbnail - just paste the URL.

3. Modern, lightweight slider engine (no jQuery required) with a proper video lightbox, or the original Legacy engine - your choice, per gallery.

4. Slider and lightbox are fully responsive on mobile, tablet, and desktop.

5. Add, edit, and delete videos from a clean admin screen.

6. Preview your video gallery before publishing it.

7. Native Gutenberg block - search "Responsive Video Gallery" in the block inserter, no shortcode needed. Shortcode also supported for any theme or page builder.

8. Set video thumbnail width and height.

9. Control slider speed, number of visible videos, and circular (looping) mode.

10. Left/right arrow navigation or automatic sliding.

11. Pagination dots, shown automatically only when there's more than one page of videos.

12. Video title shown as a caption on the thumbnail, with optional description in the lightbox.

13. Schema.org VideoObject structured data (JSON-LD) automatically added, helping your videos qualify for rich video results in Google search.

14. WordPress capabilities/roles support.

15. No advertisements, anywhere in the admin.


**=Pro Version Features=**

1. Unlimited video galleries (multiple, independently configured) - free is limited to one gallery.

2. All 5 video types: YouTube, Vimeo, Dailymotion, Metacafe, and custom HTML5 video (uploaded or external URL, with fallback source formats).

3. Bulk import videos from an entire YouTube channel or playlist in one click - title, description, and thumbnail all pulled in automatically for every video.

4. Native Elementor widget and Divi module - drag a video gallery into your builder layout, no shortcode needed.

5. Full Gutenberg block editor integration - create and edit a gallery's complete settings, and add/remove videos, directly from the block sidebar.

6. Real slider easing effects - 16 genuine Penner/easings.net animation curves (including true Bounce and Elastic), not just an approximated CSS transition.

7. Configurable lightbox width and height.

8. Custom video thumbnail upload, or one-click automatic thumbnail download.

9. Video description shown directly in the lightbox popup.

10. Crop / no-crop thumbnail display, border color, border radius, and box shadow - all independently customizable per gallery.

11. Manual video ordering with mass order update, or randomize video order on each page load.

12. Open videos in the lightbox, or in a new browser tab - your choice per gallery.

13. Video gallery with thumbnail caption and smart pagination.

14. Responsive admin layout.

15. No advertisements.

16. WordPress capabilities/roles feature.


[Get Support](http://www.i13websolution.com/contacts)


== Installation ==

This plugin is easy to install like other plug-ins of Wordpress as you need to just follow the below mentioned steps:

1. upload wp-responsive-video-gallery-with-lightbox folder to wp-Content/plugins folder.

2. Activate the plugin from Dashboard / Plugins window.

4. Now Plugin is Activated, Go to the Usage section to see how to use wordpress thumbnail slider.

### Usage ###

1.Use of wordpress responsive video gallery lightbox is easy after activating plugin go to Video Gallery with Lightbox menu.

2.You can manage video by Manage videos menu.

3.You can set settings for this plugin using gallery settings menu.

4.You can add this slider to your wordpress page/post by adding this shortcode to [print_responsive_video_gallery_plus_lightbox]

OR you can add this to your theme by adding this code echo do_shortcode('[print_responsive_video_gallery_plus_lightbox] '); to your theme


== Screenshots ==

1. Gallery Settings
2. Manage Videos
3. Gallery Preview 
4. Fronted screenshot
5. Video Play lightbox
6. PRO Version Unlimited Video Gallery
7. PRO Version Manage Video
8. PRO Version Add Video
9. PRO Version video gallery
10. PRO Version Lightbox
11. Free version Block
12. Pro version add/update galleries from block
13. Pro Version Youtube import playlist
14. New Modern Lightbox


== License ==

This plugin is free for everyone! Since it's released under the GPL, you can use it free of charge on your personal or commercial blog. But you can make some donations if you realy find it useful.


== Changelog ==

= 1.0.48 =

* Rewrote the plugin description, feature lists, and FAQ for accuracy (now reflects the Modern engine, Gutenberg block, and SEO schema markup) and for better WordPress.org search visibility. Expanded tags and added a proper short description. No code changes.

= 1.0.47 (important fix - please update) =

* Fixed: a visible "Table already exists" database error could appear at the top of admin pages after updating. Same root cause and fix as the Pro version - the database migration correctly runs on every admin page load (not just on activation), but dbDelta() was being called unconditionally each time, and it can print this exact error even while working correctly internally. Added a version check so it only actually runs once per plugin version, not on every page load.

= 1.0.46 =

* New: video gallery pages now output VideoObject structured data (JSON-LD schema.org markup), so search engines can potentially show a video thumbnail/rich result directly in search results for pages using this gallery. Works with both the Modern and Legacy engines. Verified with real execution tests covering single videos, multiple videos, and edge cases (no videos, missing title) before release.

= 1.0.45 =

* Fixed: pagination dots showed even when there was only one "page" worth of content (e.g. exactly as many videos as the Visible setting), and clicking a dot beyond the first could scroll into empty space, producing a blank transition. Root cause: page count was calculated from the Scroll setting instead of the Visible setting - now correctly based on Visible, with the pager hidden entirely when everything already fits in one view.

= 1.0.44 =

* Added block editor instructions to the Preview page, alongside the existing shortcode instructions

= 1.0.43 =

* Fixed Vimeo thumbnail fetching for real this time, by matching the exact approach already proven to work in the Pro version: a direct client-side call to Vimeo's v2 video API (vimeo.com/api/v2/video/{id}.json) instead of the server-side oEmbed proxy used in the last two releases, which apparently wasn't working reliably. Removed the now-unused server-side callback.

= 1.0.42 =

* Diagnostic improvement: the Vimeo info fetch now reports the actual server-side error (HTTP status, response body, or request error) instead of a generic "could not fetch" message, and increased the request timeout and set an explicit User-Agent in case Vimeo was rejecting the default WordPress one. Still investigating a report that thumbnail fetching fails even with server-side requests.

= 1.0.41 =

* Fixed: clicking "Click here to get video information and thumbnail" for a Vimeo URL didn't fetch a thumbnail. The previous version called Vimeo's API directly from the browser, which has well-documented CORS restrictions across several of its endpoints. Now routes through a server-side request (same pattern already used for YouTube), which sidesteps browser CORS entirely.

= 1.0.40 =

* New: Vimeo support added to the free version - enter a Vimeo video URL and the title, description, and thumbnail are fetched automatically, same as YouTube and Dailymotion already work. (Metacafe and custom HTML5 video support remain Pro-only.)

= 1.0.39 =

* Added a proper menu icon (video camera dashicon) for the plugin's admin menu entry - was previously using WordPress's generic default icon

= 1.0.38 =

* Fixed: with Slider Engine set to Modern and Lightbox Engine set to Legacy, clicking a video did nothing at all. The Modern slider engine's JavaScript only ever called the modern lightbox system, with no awareness of the Lightbox Engine setting - when Legacy was selected, the modern lightbox script wasn't even loaded, so the check silently found nothing to call and no lightbox ever got wired up. Now respects the setting and calls the matching system, mirroring exactly how the Legacy/bxSlider engine already handled both correctly.

= 1.0.37 =

* Fixed: the upgrade button showed literal text "\u2192" instead of an arrow - PHP doesn't interpret \u escapes inside single-quoted strings, so it was never actually rendering as a character. Replaced with the real arrow character directly.
* Removed the duplicate top-of-page upgrade box on all three admin pages - it now only appears once, in the sidebar, matching where the original ads it replaced were positioned there.

= 1.0.36 =

* New: Gutenberg block ("Responsive Video Gallery") - insert the gallery from the block inserter instead of using the shortcode manually. Shows a simple placeholder in the editor; renders the live gallery on the front end using the same code as the shortcode.
* Removed the Facebook Like banner, PayPal donate banner, Elegant Themes/Divi affiliate banner, and Google Workspace promo banner from the Settings, Manage Videos, and Add/Edit Video admin pages
* Added a proper Pro upsell box in their place, listing the actual Pro features (unlimited galleries, Vimeo/Metacafe/HTML5 support, easing effects, crop/border/shadow styling, and more) with a clear upgrade link
* Removed the now-unused ad banner image files

= 1.0.35 =

* Fixed: clicking arrows rapidly could cause the slider to visibly jump instead of animating smoothly. Two related issues: (1) each click queued its own "loop-wrap correction" check without cancelling earlier ones, so rapid clicks could stack up several pending corrections that fired based on stale, outdated state once they eventually resolved; (2) new clicks could redirect an animation still in progress, which is jarring for any slider regardless of the first issue. Now: only the most recent move's correction is ever allowed to act (stale ones are silently skipped), and new arrow/pager clicks are ignored entirely while a move is still animating, matching how sliders normally handle rapid input.

= 1.0.34 =

* Fixed the actual root cause of the flash from the previous release: the cloned slides used for seamless looping were being inserted in the wrong order. Calling insertBefore() repeatedly in a loop reverses insertion order each time (since the reference point changes with every insert) - this meant the clone sitting immediately before the real content was a clone of the FIRST slide instead of the LAST one. So clicking "prev" from the first slide briefly showed the first slide's own thumbnail again (correct-looking, but wrong) before the loop-wrap correction silently snapped it to the actual last slide a moment later. The previous release's reflow timing fix was real and still valid, but wasn't the cause of this specific flash - verified this fix with a direct simulation of the clone insertion order before shipping it.

= 1.0.33 =

* Fixed: clicking an arrow (most noticeably the left/prev arrow from the first slide) could briefly flash the wrong frame before snapping to the correct one, instead of animating cleanly. The browser needs its current position fully "committed" before a new transition starts, or it can visually jump - a fix already applied after a loop-reset snap-back, but not before every move. Now applied consistently before every arrow click and autoplay tick.

= 1.0.32 =

* Fixed: navigation arrows never appeared when there were fewer videos than (or exactly matching) the Visible setting, even with Circular slider enabled - arrows only considered whether there was extra content beyond what fit, ignoring the circular setting entirely. Now also shows arrows whenever Circular is on and there's more than one video, since continuous rotation should still work even when everything technically fits in view already.
* Fixed a related edge case in the Modern engine's clone-based looping: when there are fewer real videos than the Visible setting, the number of cloned slides could end up smaller than expected, misaligning the slider's starting position. Clone count is now correctly capped to the actual number of real videos available.

= 1.0.31 =

* Fixed: videos didn't open in the lightbox at all on the Modern slider engine. The Modern engine's own JavaScript never actually called RVGLightbox.initGallery() - the function that attaches the click handlers - so clicking a video genuinely did nothing, no matter what engine settings were selected. Now wired correctly, called after the slider's own clone-based looping is set up so it correctly finds every trigger including cloned slides.
* Fixed: the Modern slider's JS/CSS files had been updated in the last two releases but their cache-busting version numbers were never bumped, so browsers could keep serving the old, broken script instead of the fix. Versions now bumped to force a fresh fetch.
* Cleaned up leftover unused data attributes on video triggers from an earlier, different lightbox design that was never actually used.

= 1.0.30 =

* Fixed: a PHP statement in the previous release was accidentally left sitting outside the `<?php ?>` tags, so instead of being executed it printed as literal code text at the top of every video gallery on the front end. This class of mistake doesn't get caught by a normal syntax check (it's technically valid PHP - just wrong), so this time it was verified by actually executing the function and confirming clean HTML output before release.

= 1.0.29 =

* Fixed: Modern slider engine showed a mispositioned/cut-off first slide and the navigation arrows appeared missing. Root cause: the slide-positioning math assumed a responsive, viewport-relative slide width, but slides actually render at a fixed pixel width (matching the Legacy engine's own imagewidth/imageMargin settings) - the two never matched, so every position calculation was off. Now measures the actual rendered slide width directly instead of assuming one.
* Fixed: the slider's viewport had no width constraint, so on a wide page it could show more videos at once than the Visible setting specified. Now constrained to fit exactly the configured number of visible slides, matching how the Legacy/bxSlider engine already sized itself.

= 1.0.28 =

* Fixed: existing sites updating the normal way (clicking Update in the Plugins list) could end up with the Modern slider/lightbox engines selected by default instead of staying on Legacy as intended. The migration that sets this was only hooked to plugin activation, which doesn't fire on a normal file-replace update - now also runs on admin_init as a safety net, so it reliably applies regardless of how the update happened.
* Fixed: the admin Preview page always showed the Legacy (bxSlider) engine regardless of the Slider Engine setting. Now dispatches to the Modern engine correctly, matching the front end.

= 1.0.27 =

* New: Slider Engine setting (Carousel Settings > Slider Engine) — choose between Modern (new, no jQuery required for the slider itself, touch/swipe friendly, built-in fixes for looping/boundary issues) and Legacy (the original bxSlider engine). New installs default to Modern; existing sites keep Legacy after updating, so nothing changes on your live site unless you switch it yourself.
* Known gap: the Modern slider engine currently only renders on the front end. The admin Preview page still always shows the Legacy engine regardless of this setting - a fix for that is planned next.

= 1.0.26 =

* Fixed: play button icon on video thumbnails could be missing or mispositioned depending on context (e.g., showed correctly on the front end but not in the admin Preview page). Root cause: the icon's absolute positioning had no defined anchor on its own thumbnail wrapper, so it was positioning relative to whichever ancestor element happened to be positioned - which differs between the front-end theme's markup and the admin page's markup. Now anchored directly to its own thumbnail wrapper, so it positions correctly regardless of surrounding page structure.
* Fixed: the play button icon on video thumbnails disappeared when Lightbox Engine was set to Modern. It was misfiled inside the Legacy-only stylesheet, even though it's unrelated to which lightbox opens - moved to the general stylesheet that's always loaded regardless of engine.
* New: Lightbox Engine setting (Carousel Settings > Lightbox Engine) — choose between Modern (new, no jQuery required, properly stops video playback on close) and Legacy (the original FancyBox-based lightbox). New installs default to Modern; existing sites keep Legacy after updating, so nothing changes on your live site unless you switch it yourself.
* Fixed: the front-end video gallery's lightbox was silently broken when set to use the new system — it called a jQuery plugin method from a script that was no longer being loaded, so clicking a video did nothing. Now correctly wired for both engines.

= 1.0.25 =

* Added webp image support
* Tested with WordPress 6.8


= 1.0.24 =

* Make plugin compatible with block editor
* Tested with WordPress 6.3


= 1.0.23 =

* fixed vulnerability
* Tested with WordPress 6.2


= 1.0.22 =

* Tested with WordPress 5.9


= 1.0.22 =

* Fixed undefined variables problems
* Tested with WordPress 5.8


= 1.0.21 =

* Fixed small issue



= 1.0.20 =

* Fixed youtube title not featching
* Fixed touch issues
* Tested with WordPress 5.6



= 1.0.19 =

* Fixed slider not working with jQuery 3.x


= 1.0.18 =

* Fixed lightbox not working with jQuery 3.x


= 1.0.17 =

* Improve slider loading


= 1.0.16 =

* Fixed slider not working for lazy loading
* Tested with WordPress 5.5


= 1.0.15 =

* Fixed vertical scroll not working when touch smartphone
* Removed jQuery.NOConflict() as it cause $ usage


= 1.0.14 =

* Improve slider loading.


= 1.0.12 =

* Fixed dailymotion issue of video info not gettting load when there is query string in video url.
* Tested with WordPress 5.3


= 1.0.12 =

* Fixed issue undefined function vg_save_image_curl, reported by pam.



= 1.0.11 =

* Isseu by Rhonda Ramadge.Some how wordpress adding noopener noreferrer into link, and that cause problem in lightbox. So fix that.


= 1.0.10 =

* Fixed windows os chrome browser sometime click not work due to chrome fire touch event on click

= 1.0.9 =

* Added option to have caption in slider.
* Added option to have pager in slider.
* Fixed touch event not open lightbox into smartphone issue.
* Improve code so that slider works event jquery included into footer.
* Tested with WordPress 5.2


= 1.0.8 =

* Dailymotion api updated, So fixed accordingly to plugin so that it works


= 1.0.7 =

* Tested with WordPress 5.1
* Fixed windows chrome click/touch lightbox not open bug
* Added WordPress capabilities feature


= 1.0.6 =

* Improve admin query for video list
* Tested up to WordPress 5.0


= 1.0.5 =
* Make plugin translatable
* Added sorting searching into admin manage video


= 1.0.4 =
* Fix dailymotion video stop working.



= 1.0.3 =
* Fix for shortcode not working in new wordpress 4.8 widgets



= 1.0.2 =
* Fix for multiple fancybox versions


= 1.0.1 =

* I notice that some host does not allow copy remote image via copy function so I have added function to copy image via curl.If copy function fail then try with curl.
* Tested with WordPress 4.6
* Support arrow with auto mode


= 1.0 =

* Stable 1.0 first release


== Upgrade notice ==

= 1.0.14 =

* Please clear browser cache as well as WP Cache( If you have any cache plugin ) after update.


= 1.0.10 =

* Please clear browser cache as well as WP Cache( If you have any cache plugin ) after update.

= 1.0.9 =

* Please clear browser cache as well as WP Cache( If you have any cache plugin ) after update.


= 1.0.7 =

* Please clear browser cache as well as WP Cache( If you have any cache plugin ) after update.


= 1.0 =

* Stable 1.0 first release

= 1.0.1 =

* Upgrade only if you have problem regarding copy function
* Pro Version please do not upgrade, Insted ask @ https://www.i13websolution.com/contacts

= 1.0.2 =
* Fix for multiple fancybox versions


== Frequently asked questions ==

= How do I add the video gallery to a page or post? =

Search for "Responsive Video Gallery" in the block inserter (Gutenberg block editor) - no shortcode needed. You can also use the `[print_responsive_video_gallery_plus_lightbox]` shortcode in any theme, page, or post.

= What video types does the free version support? =

YouTube, Vimeo, and Dailymotion. Just paste the video URL and the title, description, and thumbnail are fetched automatically. The PRO version adds Metacafe and custom HTML5 video support (uploaded files or external URLs).

= How many videos can I add? =

Unlimited videos in your one free gallery. If you need more than one separate video gallery on your site, that requires PRO, which supports unlimited galleries.

= Does this help with SEO? =

Yes - every gallery automatically outputs Schema.org VideoObject structured data (JSON-LD), which helps search engines potentially show a video thumbnail and rich result directly in search listings.

= Is there a lightbox / popup for videos? =

Yes, videos open in a proper lightbox popup by default, with a modern (no jQuery required) lightbox engine or the original Legacy engine to choose from.

= Can I control how the slider looks and animates? =

Yes - number of visible videos, thumbnail size, slide speed, arrows, circular (looping) mode, and pagination are all configurable in the free version. PRO adds thumbnail border/shadow/crop styling and real easing animation effects.

= Does it work with Elementor or Divi? =

Native Elementor widget and Divi module support is included in PRO. The free version works with any builder via the shortcode.

= Can I import an entire YouTube channel or playlist at once? =

Bulk import from a YouTube channel or playlist is a PRO feature - paste a channel URL, @handle, or playlist URL and import up to 50 videos per click, with title/description/thumbnail all fetched automatically.

= Will I lose my videos if I upgrade to PRO? =

No, your existing gallery and all its videos carry over automatically when you activate PRO - nothing needs to be re-entered.

= Is this plugin translation-ready? =

Yes, all strings use standard WordPress translation functions and the plugin is ready for translation via .po/.mo files or a plugin like Loco Translate.
