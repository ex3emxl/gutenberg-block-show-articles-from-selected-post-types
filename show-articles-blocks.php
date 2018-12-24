<?php
/**
 * Plugin Name: Articles From Selected Post Type
 * Description: Gutenberg block for WordPress which show articles from selected post type
 * Version:     1.0.0
 * Author:      Se Mi
 * Author URI:
 * Text Domain: gpfwwsafspt
 */

namespace Gutenberg_Blocks\Articles_From_Selected_Posts;

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Gets this plugin's absolute directory path.
 *
 *
 * @return string
 */
function _get_plugin_directory() {
	return __DIR__;
}

/**
 * Gets this plugin's URL.
 *
 *
 * @return string
 */
function _get_plugin_url() {
	static $plugin_url;

	if ( empty( $plugin_url ) ) {
		$plugin_url = plugins_url( null, __FILE__ );
	}

	return $plugin_url;
}

// Enqueue JS and CSS
include __DIR__ . '/lib/enqueue-scripts.php';

// Show Articles Block
include __DIR__ . '/blocks/show-articles/index.php';
