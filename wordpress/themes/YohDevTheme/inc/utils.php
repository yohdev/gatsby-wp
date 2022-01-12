<?php
/*-------------------------------
# Remove Category Prefix
---------------------------------*/
function prefix_category_title( $title ) {
    if ( is_category() ) {
        $title = single_cat_title( '', false );
    }
    return $title;
}
add_filter( 'get_the_archive_title', 'prefix_category_title' );

/*-------------------------------
# Get Date
---------------------------------*/
function currentYear(){
	return date('Y');
}

/*-------------------------------
# Length
---------------------------------*/
add_filter( 'excerpt_length', function($length) {
    return 20;
} );

/*-------------------------------
# Pagination
---------------------------------*/
function yohdevtheme_pagination() {

	global $the_query;
	$big = 9999999; // need an unlikely integer
	  echo paginate_links( array(
	   'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
	   'format' => '?paged=%#%',
	   'current' => max( 1, get_query_var('paged') ),
	   'total' => $the_query->max_num_pages) );
	}

/*-------------------------------
# Bootstrap Dropdown
---------------------------------*/

	add_filter( 'nav_menu_link_attributes', 'prefix_bs5_dropdown_data_attribute', 20, 3 );
/**
 * Use namespaced data attribute for Bootstrap's dropdown toggles.
 *
 * @param array    $atts HTML attributes applied to the item's `<a>` element.
 * @param WP_Post  $item The current menu item.
 * @param stdClass $args An object of wp_nav_menu() arguments.
 * @return array
 */
function prefix_bs5_dropdown_data_attribute( $atts, $item, $args ) {
    if ( is_a( $args->walker, 'WP_Bootstrap_Navwalker' ) ) {
        if ( array_key_exists( 'data-toggle', $atts ) ) {
            unset( $atts['data-toggle'] );
            $atts['data-bs-toggle'] = 'dropdown';
        }
    }
    return $atts;
}

?>