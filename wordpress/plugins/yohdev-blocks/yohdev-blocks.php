<?php
/**
 * Plugin Name:       YohDev Gutenberg Blocks
 * Description:       Description
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            YohDev
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       yohdev-blocks
 *
 * @package           yohdev
 */

function yohdev_blocks_init() {

	// Get all block files from the directory.
	$dir    = '/includes/block-editor/blocks/';
	$blocks = scandir(__DIR__ . $dir);

	// Remove unwanted files in the array.
	$blocks = array_diff($blocks, array('.', '..','.DS_Store'));

	// Loop through and register each block dynamically.
	foreach($blocks as $block){
		register_block_type( __DIR__. '/includes/block-editor/blocks/'.  $block);
	};
}
add_action( 'init', 'yohdev_blocks_init' );

/*
*
*
**** Color Palette ****
*
*/

function yohdev_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'yohdev-blocks-category',
				'title' => __( 'YohDev Blocks', 'yohdev-blocks-category' ),
			),
		)
	);
}
add_filter( 'block_categories', 'yohdev_block_category', 10, 2);

function yohdev_gutenburg_default_colors() {

	add_theme_support(
	  'editor-color-palette', 
	  array(
		array(
		  'name' => 'Primary',
		  'slug' => 'primary',
		  'color' => '#9185de'
		),
  
		array(
		  'name' => 'Secondary',
		  'slug' => 'secondary',
		  'color' => '#10d1d3'
		),
  
		array(
		  'name' => 'Yellow',
		  'slug' => 'yellow',
		  'color' => '#D2D36F'
		),
  
		array(
		  'name' => 'Orange',
		  'slug' => 'orange',
		  'color' => '#F46254'
		),
  
		array(
		  'name' => 'Black',
		  'slug' => 'black',
		  'color' => '#000'
		),
  
		array(
		  'name' => 'White',
		  'slug' => 'white',
		  'color' => '#fff'
		)
	  )
	);
  
	add_theme_support(
	  'editor-font-sizes', 
	  array(
		array(
		  'name' => 'Normal',
		  'slug' => 'normal',
		  'size' => 16 
		),
  
		array(
		  'name' => 'Large',
		  'slug' => 'large',
		  'size' => 24 
		)
	  )
	);
  }
  
  add_action('init', 'yohdev_gutenburg_default_colors');
