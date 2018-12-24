<?php

namespace Gutenberg_Blocks\Articles_From_Selected_Posts;

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_block_editor_assets' );

/**
 * Enqueue block editor.
 */
function enqueue_block_editor_assets() {

	$block_path = '/assets/js/editor.blocks.js';

	wp_enqueue_script(
		'show-article-block-js',
		_get_plugin_url() . $block_path,
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
		filemtime( _get_plugin_directory() . $block_path )
	);
}
