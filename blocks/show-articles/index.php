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
 * Server rendering for /blocks/show-articles
 */
function render_show_articles_block( $att ) {

    $recent_posts = wp_get_recent_posts( [
        'post_type' => (empty($att['typeOfPost'])) ? 'post' : $att['typeOfPost'],
        'numberposts' => (empty($att['numberOfPost'])) ? 3 : $att['numberOfPost'],
        'order' => (empty($att['sortOfPost'])) ? 'ASC' : $att['sortOfPost'],
        'post_status' => 'publish',
    ] );

    if ( empty( $recent_posts ) ) {
        return '<p>No posts</p>';
    }

    $markup = '<ul>';

    foreach ( $recent_posts as $post ) {
        $post_id  = $post['ID'];
        $markup  .= sprintf(
            '<li><a href="%1$s">%2$s</a></li>',
            esc_url( get_permalink( $post_id ) ),
            esc_html( get_the_title( $post_id ) )
        );
    }

    $markup .= '</ul>';

    return "{$markup}";
}
