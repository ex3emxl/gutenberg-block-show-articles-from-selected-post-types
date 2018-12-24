<?php

namespace Gutenberg_Blocks\Articles_From_Selected_Posts;


add_action( 'plugins_loaded', __NAMESPACE__ . '\register_dynamic_block' );
/**
 * Register the dynamic block.
 */
function register_dynamic_block() {

	// Only load if Gutenberg is available.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Hook server side rendering into render callback
	register_block_type( 'gpfwwsafspt/show-articles', [
		'render_callback' => __NAMESPACE__ . '\render_show_articles_block',
	] );

}

/**
 * Server rendering for /blocks/examples/show-articles
 */
function render_show_articles_block( $att ) {

	return "{$markup}";
}
