<?php

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
   wp_enqueue_script(
		'child-script',
		get_stylesheet_directory_uri() . '/assets/js/main.js', array('font-script'), false, true
	);
}

add_action( 'after_setup_theme', 'yohdev_gutenberg_css' );

function yohdev_gutenberg_css(){

	add_theme_support( 'editor-styles' ); // if you don't add this line, your stylesheet won't be added
	add_editor_style( 'style-editor.css' ); // tries to include style-editor.css directly from your theme folder 

}
?>