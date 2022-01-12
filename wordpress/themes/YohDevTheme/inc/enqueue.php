<?php
/**
 * Enqueue scripts and styles.
 */
function yohdevtheme_scripts() {
	wp_enqueue_style( 'yohdevtheme-style', get_stylesheet_uri(), array(), YOHDEVTHEME_VERSION );
	wp_style_add_data( 'yohdevtheme-style', 'rtl', 'replace' );
	wp_enqueue_script(
		'bootstrap-script',
		get_template_directory_uri() . '/assets/lib/bootstrap-5.0.1/dist/js/bootstrap.min.js', array(), false, true
	);

	wp_enqueue_script( 'yohdevtheme-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), YOHDEVTHEME_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	wp_enqueue_script(
		'custom-script',
		get_template_directory_uri() . '/assets/js/main.js', array(), false, true
	);

	wp_enqueue_script(
		'font-script',
		'https://use.fontawesome.com/38d0f25062.js', array(), false, true
	);
}
add_action( 'wp_enqueue_scripts', 'yohdevtheme_scripts' );

//admin styles
add_theme_support( 'editor-styles' );
add_editor_style( 'style-editor.css' );
add_theme_support('align-wide');

?>