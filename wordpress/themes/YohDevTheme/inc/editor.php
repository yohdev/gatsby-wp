<?php

// Customize Gutenberg color palette
// Match these colors to the variables set up in /assets/scss/partials/base/variables.scss
add_theme_support( 'editor-color-palette',
[
	[
		'name'  => __( 'Primary' ),
		'slug'  => 'primary-red',
		'color'	=> '#cd1a2f',
	],
    [
		'name'  => __( 'Primary Light' ),
		'slug'  => 'primary-red-200',
		'color'	=> '#ffd3d8',
	],
    [
		'name'  => __( 'Primary Dark' ),
		'slug'  => 'primary-red-700',
		'color' => '#790000',
	],
      /* Secondary Colors */
      [
        'name' => __( 'Secondary' ),
        'slug' => 'primary-blue',
        'color' => '#3386f3',
    ],
    [
        'name' => __( 'Secondary Light' ),
        'slug' => 'primary-blue-200',
        'color' => '#d5e7ff',
    ],
    [
		'name'  => __( 'Secondary Dark' ),
		'slug'  => 'secondary-brighter-blue-700',
		'color' => '#013d80',
	],
    /* Neutrals */
    [
		'name'  => __( 'Neutral Black' ),
		'slug'  => 'neutral-black',
		'color' => '#070d0d',
    ],
    [
		'name'  => __( 'Neutral Grey' ),
		'slug'  => 'neutral-gray',
		'color' => '#dbdbdb',
    ],
    [
		'name'  => __( 'White' ),
		'slug'  => 'light',
		'color' => '#ffffff',
    ],
    // [
	// 	'name'  => __( 'Accent Orange 200' ),
	// 	'slug'  => 'accent-orange-200',
	// 	'color' => '#ffe9db',
    // ],
     
]
);

/**
 * ACF Color Palette
 *
 * Add default color palatte to ACF color picker for branding
 * Match these colors to colors in /functions.php & /assets/scss/partials/base/variables.scss
 *
*/
add_action( 'acf/input/admin_footer', 'wd_acf_color_palette' );
function wd_acf_color_palette() { 
    $colors = get_theme_support( 'editor-color-palette' );?>
<script type="text/javascript">
     acf.add_filter('color_picker_args', function( args, $field ){
        var arr = [];
        <?php foreach ($colors[0] as $color) : ?>
        arr.push('<?php echo $color['color']?>');
        <?php endforeach; ?>
          // add the hexadecimal codes here for the colors you want to appear as swatches
          args.palettes = arr
          // return colors
          return args;
     });
</script>
<?php }

function color_palette(){
$wd_acf_color_picker_values = get_field( 'color_options' );

$colors = get_theme_support( 'editor-color-palette' );

    if( ! empty( $colors ) ) {
            foreach( $colors[0] as $color ) {
                if( $wd_acf_color_picker_values == $color['color']) {
                    $wd_color_class = $color['slug'];
                }
            }
        return $wd_color_class;
    }
}

function overlay_palette(){
    $wd_acf_overlay_picker_values = get_field( 'overlay_color_options' );
    
    $colors = get_theme_support( 'editor-color-palette' );
    
        if( ! empty( $colors ) ) {
                foreach( $colors[0] as $color ) {
                    if( $wd_acf_overlay_picker_values == $color['color']) {
                        $wd_overlay_class = $color['slug'];
                    }
                }
            return $wd_overlay_class;
        }
    }
