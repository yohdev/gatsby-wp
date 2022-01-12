<?php 

/**
 * Logo Banner Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'logo-banner-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'logo-banner-default';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$lb_image = get_field( 'lb_image');
$lb_heading = get_field( 'lb_heading');
$lb_body = get_field( 'lb_body');

$margin_options = get_field('margin_options');
$padding_options = get_field('padding_options');
$color_options = get_field('color_options');

$button = get_field('button');
?>

<?php       
if( isset( $block['data']['preview_image_help'] )  ) :    /* rendering in inserter preview  */

    echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';


else : /* rendering in editor body */?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<section class="logo-banner <?php if($margin_options) echo $margin_options;?> <?php if($padding_options) echo $padding_options; ?>" >
  <div class="container position-relative">
    <div class="row">
      <div class="col-lg-4 img-container">
        <?php if($lb_image) :?>
            <img class="img-fluid" src="<?php echo esc_url($lb_image['url']); ?>" alt="<?php echo $lb_image['alt']; ?>">
        <?php else: ?>
            <img class="img-fluid" src="https://via.placeholder.com/150" >
        <?php endif; ?>
      </div>
      <div class="col-lg-8 align-self-center">
      <?php if($color_options) :?>
        <div class="text-container bg-<?php echo color_palette();?>">
        <?php else: ?>
      <div class="text-container">
      <?php endif;?>
              <h2 class="lb-heading">
                <?php if ($lb_heading) : echo $lb_heading; ?>
                <?php else : echo "Logo Banner Heading"; ?>
                <?php endif; ?>
              </h2>
              <p class="lb-body">
                <?php if ($lb_body) : echo $lb_body; ?>
                <?php else : echo "Logo Banner Body"; ?>
                <?php endif; ?>
              </p>
              <?php
              $template = array(
              array( 'acf/yohdev-button')
          );
              if ($button) echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $template ) ) . '" templateLock="all" />';
              ?>
            </div>
      </div>
  </div>
</section>
</div>
<?php endif; ?>
