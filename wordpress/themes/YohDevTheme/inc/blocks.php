<?php 
add_action('acf/init', 'yohdevtheme_acf_init_block_types');

function yohdevtheme_acf_init_block_types() {

$acf_blocks = [
[/*----------------------------------------- BTNS -----------------------------------------*/
        'name'              => 'YohDev Button',
        'title'             => __('YohDev Button'),
        'description'       => __('Button with primary color'),
        'render_template'   => 'components/blocks/btn/btn-Main.php',
        'keywords'          => ['Transactional Button' ],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]]
],
[/*----------------------------------------- CTAS -----------------------------------------*/
        'name'              => 'YohDev CTA Text Block',
        'title'             => __('YohDev CTA Text Block'),
        'description'       => __('CTA Text Block with Heading, body copy and button'),
        'render_template'   => 'components/blocks/cta/cta-Text.php',
        'keywords'          => [ 'CTA Text Block' ],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]]
],
[/*----------------------------------------- CARDS -----------------------------------------*/
        'name'              => 'Yohdev Card Repeater',
        'title'             => __('YohDev Repeater - Card'),
        'description'       => __('Card repeater that has image and text'),
        'render_template'   => 'components/blocks/card/card-Repeater.php',
        'keywords'          => ['Card Repeater'] ,
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]]
],
[
        'name'              => 'YohDev Hero with Card Block',
        'title'             => __('YohDev Hero with Card Block'),
        'description'       => __('Hero with Card Block'),
        'render_template'   => 'components/blocks/card/card-Hero.php',
        'keywords'          => ['Hero with Card Block' ],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]]
],
[
        'name'              => 'YohDev Horizontal Card',
        'title'             => __('YohDev Horizontal Card'),
        'description'       => __('YohDev Horizontal Card'),
        'render_template'   => 'components/blocks/card/card-horiz.php',
        'keywords'          => ['Hero with Card Block' ],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]]
],
[/*----------------------------------------- CPT -----------------------------------------*/
        'name'              => 'Yohdev Reviews',
        'title'             => __('YohDev Reviews'),
        'description'       => __('Reviews Block'),
        'render_template'   => 'components/blocks/cpt/cpt-reviews.php',
        'keywords'          => ['Reviews'],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]]
],
[
        'name'              => 'YohDev Logo Carousel',
        'title'             => __('YohDev Logo Carousel'),
        'description'       => __('Carousel that scrolls partner logos.'),
        'render_callback'   => 'block_render',
        'render_template'   => 'components/blocks/cpt/cpt-logos.php',
        'keywords'          => ['Carousel'],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]]
],
[
        'name'              => 'Yohdev FAQ Accordion',
        'title'             => __('YohDev FAQ Accordion'),
        'description'       => __('FAQ Accordion Block that displays frequently asked questions.'),
        'render_callback'   => 'block_render',
        'render_template'   => 'components/blocks/cpt/cpt-faqs.php',
        'keywords'          => ['FAQ'],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]]
],
[/*----------------------------------------- GENERAL -----------------------------------------*/
        'name'              => 'YohDev Logo Banner',
        'title'             => __('YohDev Logo Banner'),
        'description'       => __('Logo and Text Banner'),
        'render_template'   => 'components/blocks/general/logoBanner.php',
        'keywords'          => ['Logo Banner' ],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]]
],
[
        'name'              => 'YohDev Video Block',
        'title'             => __('YohDev Video Block'),
        'description'       => __('Video Block'),
        'render_template'   => 'components/blocks/general/video.php',
        'keywords'          => ['Video Block' ],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]]
],
[
        'name'              => 'YohDev Hero Block',
        'title'             => __('YohDev Hero Block'),
        'description'       => __('Hero Block'),
        'render_template'   => 'components/blocks/general/hero.php',
        'keywords'          => ['Hero Block' ],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]]
],
[
        'name'              => 'YohDev Image and Text Block',
        'title'             => __('YohDev Image and Text Block'),
        'description'       => __('Block that offers a section with an image and text'),
        'render_template'   => 'components/blocks/general/image-text.php',
        'keywords'          => ['Image and Text Block' ],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]],
        'enqueue_style'     => get_stylesheet_directory_uri() . '/style.css',
],
[
        'name'              => 'Latest Posts',
        'title'             => __('Latest Posts'),
        'description'       => __('Latest Posts Block that displays posts.'),
        'render_template'   => 'components/blocks/general/latest-posts.php',
        'keywords'          => ['Latest Blog Posts'],
        'supports'          => ['align' => false, 'anchor'=> true, 'customClassName'=> true, 'jsx'=> true ],
        'example'           => ['attributes' => ['mode' => 'preview','data' => ['preview_image_help' => 'https://via.placeholder.com/450']]],
]
];
    // Check function exists.
    if( function_exists('acf_register_block_type') ) {
        foreach($acf_blocks as $acf_block) {
            acf_register_block_type($acf_block);
        }
    }
}