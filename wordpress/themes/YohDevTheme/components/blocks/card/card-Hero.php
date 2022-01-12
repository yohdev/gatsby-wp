
<?php 

/**
 * Hero with Card Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'hero-card-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'hero-card-default';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$hero_image = get_field( 'hero_image');
$hero_title = get_field('hero_title');
$hero_subtitle = get_field('hero_subtitle');
$hero_body = get_field('hero_body');

$padding_options = get_field('padding_options');
$margin_options = get_field('margin_options');
$background_image = get_field('background_image');
$mobile_image = get_field('mobile_image');
$overlay_color_options = get_field('overlay_color_options');
$button = get_field( 'button');
?>

<?php       
if( isset( $block['data']['preview_image_help'] )  ) :    /* rendering in inserter preview  */
echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';
else : /* rendering in editor body */?> 

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<?php if($background_image) : ?>
  <section class="hero-wrapper <?php if($mobile_image) : ?>d-none d-lg-block<?php endif; ?> <?php if($margin_options) echo $margin_options; ?> <?php if($padding_options) echo $padding_options; ?>"style="background-image: url(<?php echo $background_image; ?>);"><?php if($overlay_color_options) :?><div class="overlay bg-<?php echo overlay_palette();?>"></div><?php endif; ?> 
<?php else : ?>
  <section class="hero-wrapper <?php if($margin_options) echo $margin_options; ?> <?php if($padding_options) echo $padding_options; ?>">
<?php endif; ?>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-3 hero-cta-holder">
            <div class="hero-cta text-center">
              <h4 class="hero-subtitle">
                <?php if ($hero_subtitle) : echo $hero_subtitle; ?>
                <?php endif;?>
              </h4>
              <h1 class="hero-title mb-3 text-white">
                <?php if ($hero_title) : echo $hero_title; ?>
                <?php endif;?>
              </h1>
              <p class="hero-body text-white my-5">
                <?php if ($hero_body) : echo $hero_body; ?>
                <?php else : echo "Hero Body"; ?>
                <?php endif;?>
              </p>
                <?php
                $template = array(
                array( 'acf/yohdev-button')
            );
                if ($button) echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $template ) ) . '" templateLock="all" />';
                ?>
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>

  <?php if($mobile_image) : ?>
  <section class="hero-wrapper <?php if($mobile_image) : ?>d-block d-lg-none<?php endif; ?> <?php if($margin_options) echo $margin_options; ?> <?php if($padding_options) echo $padding_options; ?>"style="background-image: url(<?php echo $mobile_image; ?>);"><?php if($overlay_color_options) :?><div class="overlay bg-<?php echo overlay_palette();?>"></div>
<?php else : ?>
  <section class="hero-wrapper <?php if($margin_options) echo $margin_options; ?> <?php if($padding_options) echo $padding_options; ?>">
<?php endif; ?>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-3 hero-cta-holder">
            <div class="hero-cta">
              <h1 class="hero-title">
                <?php if ($hero_title) : echo $hero_title; ?>
                <?php else : echo "Hero Title"; ?>
                <?php endif;?>
              </h1>
              <h2 class="hero-subtitle mb-3">
                <?php if ($hero_subtitle) : echo $hero_subtitle; ?>
                <?php else : echo "Hero Subtitle"; ?>
                <?php endif;?>
              </h2>
              <p class="hero-body">
                <?php if ($hero_body) : echo $hero_body; ?>
                <?php else : echo "Hero Body"; ?>
                <?php endif;?>
              </p>
            </div>
          </div>
        </div>
      </div>
  </section>
  </div>
  <?php endif;?>

<?php endif; ?> 