<?php 

function reviews_post_type() {
    register_post_type('reviews',
        array(
            'labels'      => array(
                'name'          => __('Reviews'),
                'singular_name' => __('Review'),
            ),
                'public'      => true,
                'has_archive' => true,
                'show_in_rest' => true,
        )
    );
}
add_action('init', 'reviews_post_type'); 

remove_action('init', 'tests_post_type');

?>