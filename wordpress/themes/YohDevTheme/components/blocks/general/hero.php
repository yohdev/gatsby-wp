<?php 

/**
 * Hero Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'hero-default-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'hero-default';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}


$hero_image = get_field( 'hero_image'); 
$desktop_background_image = get_field('desktop_background_image');
$hero_title = get_field('hero_title');
$hero_link = get_field('hero_link');

$background_image = get_field('background_image');
$mobile_image = get_field('mobile_image');
$overlay_color_options = get_field('overlay_color_options');
$margin_options = get_field('margin_options');
$padding_options = get_field('padding_options');

?>

<?php       
if( isset( $block['data']['preview_image_help'] )  ) :    /* rendering in inserter preview  */
echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';
else : /* rendering in editor body */?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<?php if($background_image) :?>
<section class="hero-wrapper alt <?php if($mobile_image) : ?>d-none d-lg-block<?php endif; ?><?php if($margin_options) echo $margin_options; ?> <?php if($padding_options) echo $padding_options; ?><?php if($overlay_color_options) :?> bg-<?php echo overlay_palette();?><?php endif; ?><?php if($margin_options) echo $margin_options; ?><?php if($padding_options) echo $padding_options; ?>" style="background-image: url(<?php echo $background_image; ?>);"> <?php if($overlay_color_options) :?> <div class="overlay bg-<?php echo overlay_palette();?>"></div>
<?php endif; ?>

<?php endif; ?>
    <div class="container">
      <div class="alt-hero-cta">
        <h1 class="alt-hero-title">
          <?php if($hero_title) : echo $hero_title;?>
          <?php else : echo 'Hero Title'; ?>
          <?php endif; ?>
        </h1>
        <InnerBlocks />
      </div>
  </div>
  </div>
</section>

<?php if($mobile_image) :?>
<section class="hero-wrapper alt <?php if($mobile_image) : ?>d-block d-lg-none<?php endif; ?><?php if($margin_options) echo $margin_options; ?> <?php if($padding_options) echo $padding_options; ?><?php if($overlay_color_options) :?> bg-<?php echo overlay_palette();?><?php endif; ?><?php if($margin_options) echo $margin_options; ?><?php if($padding_options) echo $padding_options; ?>" style="background-image: url(<?php echo $mobile_image; ?>);"> <?php if($overlay_color_options) :?> <div class="overlay bg-<?php echo overlay_palette();?>"></div>

<?php endif; ?>
    <div class="container">
      <div class="alt-hero-cta">
        <h1 class="alt-hero-title">
          <?php if($hero_title) : echo $hero_title;?>
          <?php else : echo 'Hero Title'; ?>
          <?php endif; ?>
        </h1>
        <InnerBlocks />
      </div>
  </div>
  </div>
</section>

<?php endif; ?>
</div>
<?php endif; ?>