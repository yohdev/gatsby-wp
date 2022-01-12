<?php

/*

* Custom Gutenburg functions

*/


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

function yohdev_gutenburg_blocks() {


  wp_register_script('gutenburg-blocks-js', get_stylesheet_directory_uri() . '/build/index.js', array( 'wp-blocks', 'wp-editor', 'wp-components' ));

  register_block_type(
    'yohdev/gutenberg-blocks',
    array(
      'editor_script' => 'gutenburg-blocks-js'
    )
  );

   
}

add_action('init', 'yohdev_gutenburg_blocks');

?>