<?php 

function logos_post_type() {
    register_post_type('logos',
        array(
            'labels'      => array(
                'name'          => __('Logos'),
                'singular_name' => __('Logo'),
            ),
            'public'      => true,
            'has_archive' => true,
            'show_in_rest' => true,
            'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', )
        )
    );
}
add_action('init', 'logos_post_type'); 

remove_action('init', 'tests_post_type');

?>