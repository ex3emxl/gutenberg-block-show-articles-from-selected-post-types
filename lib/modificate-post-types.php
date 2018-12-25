<?php

namespace Gutenberg_Blocks\Articles_From_Selected_Posts;

add_filter( 'register_post_type_args', __NAMESPACE__ . '\change_registered_post_types', 10, 2 );

/**
 * Enable REST visible for a registered post type.
 *
 * @param array  $args      Array of arguments for registering a post type.
 * @param string $post_type Post type key.
 */
function change_registered_post_types( $args, $post_type ) {

    $services_post_types = array(
        'user_request',
        'oembed_cache',
        'customize_changeset',
        'custom_css',
        'nav_menu_item',
        'revision',
        'attachment',
        'wp_block'
    );
    if ( in_array($post_type, $services_post_types) )
        return $args;

    $args['show_in_rest'] = true;

    return $args;
}