( function ( blocks, element, blockEditor, i18n, components ) {
	'use strict';

	var el = element.createElement;
	var __ = i18n.__;
	var useBlockProps = blockEditor.useBlockProps;
	var Placeholder = components.Placeholder;

	blocks.registerBlockType( 'rvg/responsive-video-gallery', {
		edit: function () {
			var blockProps = useBlockProps ? useBlockProps() : {};

			return el(
				'div',
				blockProps,
				el(
					Placeholder,
					{
						icon: 'video-alt3',
						label: __( 'Responsive Video Gallery', 'wp-responsive-video-gallery-with-lightbox' ),
					},
					el(
						'p',
						{ style: { margin: 0 } },
						__(
							'Your video gallery will appear here on the live page. Add and manage videos from the Responsive Video Gallery admin menu.',
							'wp-responsive-video-gallery-with-lightbox'
						)
					)
				)
			);
		},
		save: function () {
			// Server-side rendered via render_callback - nothing to save client-side.
			return null;
		},
	} );
} )(
	window.wp.blocks,
	window.wp.element,
	window.wp.blockEditor || window.wp.editor,
	window.wp.i18n,
	window.wp.components
);
