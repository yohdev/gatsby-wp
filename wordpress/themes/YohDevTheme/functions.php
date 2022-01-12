<?php

/*-------------------------------
# Including core functions
---------------------------------*/
require_once get_template_directory() . '/inc/core.php' ;

/*-------------------------------
# Including equeue scripts and styles
---------------------------------*/

require_once get_template_directory() . '/inc/enqueue.php' ;

/*-------------------------------
# Including wp_bootstrap_navwalker
---------------------------------*/

if ( ! class_exists( 'wp_bootstrap_navwalker' )) {
    require_once get_template_directory() . '/inc/wp_bootstrap_navwalker.php' ;
}

/*-------------------------------
 * Implement the Custom Header feature.
---------------------------------*/
require_once get_template_directory() . '/inc/underscores/custom-header.php';

/*-------------------------------
 * Custom template tags for this theme.
---------------------------------*/
require_once get_template_directory() . '/inc/underscores/template-tags.php';

/*-------------------------------
 * Functions which enhance the theme by hooking into WordPress.
---------------------------------*/
require_once get_template_directory() . '/inc/underscores/template-functions.php';

/*-------------------------------
 * Customizer additions.
 ---------------------------------*/
require_once get_template_directory() . '/inc/underscores/customizer.php';

/*-------------------------------
 * Custom Utlity Functions
 ---------------------------------*/
 require_once get_template_directory() . '/inc/utils.php';

 /*-------------------------------
 * ACF Blocks
 ---------------------------------*/
 require_once get_template_directory() . '/inc/blocks.php';

 /*-------------------------------
 * GutenBerg Editor
 ---------------------------------*/
 require_once get_template_directory() . '/inc/editor.php';

  /*-------------------------------
 * CPT 
 ---------------------------------*/
 require_once get_template_directory() . '/inc/cpt/reviews-cpt.php';
 require_once get_template_directory() . '/inc/cpt/logos-cpt.php';
 require_once get_template_directory() . '/inc/cpt/faq-cpt.php';

?>
