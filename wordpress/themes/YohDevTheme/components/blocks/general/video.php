<?php 

/**
 * Video Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'video-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'video-default';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}


$video_header = get_field( 'video_header'); 
$video_image = get_field('video_image');
$video_body = get_field('video_body');
$video_embed = get_field('video_embed');


$margin_options = get_field('margin_options');
$background_image = get_field('background_image');
$overlay_color_options = get_field('overlay_color_options');
$color_options = get_field('color_options');
$padding_options = get_field('padding_options');

$button = get_field('button');


?>


<?php       
if( isset( $block['data']['preview_image_help'] )  ) :    /* rendering in inserter preview  */

    echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';


else : /* rendering in editor body */?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<?php if($color_options) : ?>
  <section class="video  <?php if($margin_options) echo $margin_options;?> <?php if($padding_options) echo $padding_options; ?> bg-<?php echo color_palette(); ?>">
<?php else : ?>
  <section class="video position-relative  <?php if($margin_options) echo $margin_options;?> <?php if($padding_options) echo $padding_options; ?>
  <?php if($overlay_color_options) :?> 
        bg-<?php echo overlay_palette();?>
  <?php endif; ?> 
  " style="background-image: url(<?php echo $background_image; ?>);" >
  <?php if($overlay_color_options) :?>
    <div class="overlay bg-<?php echo overlay_palette();?>"></div>
  <?php endif; ?> 
<?php endif; ?>
  <div class="container position-relative">
    <div class="vid-img-container">
      <?php if($video_image) :?>
      <img class="img-fluid" src="<?php echo esc_url($video_image['url']); ?>" alt="<?php echo $video_image['alt']; ?>">
      <?php else : ?>
      <img class="img-fluid" src="https://via.placeholder.com/150" alt="Placeholder">
      <?php endif;?>
      </div>
      <h2 class="vid-heading">
      <?php if($video_header) :  ?>
      <?php echo $video_header; ?></h2>
      <?php else: echo 'Video Header'?>
      <?php endif;?></h2>
      <div class="video-container">
      <?php if($video_embed) :  ?>
      <?php echo $video_embed; ?>
      <?php else: ?>
        <iframe width="640" height="315" src="https://www.youtube.com/embed/jwUJHZGto0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <?php endif;?>
    </div>
    <p class="vid-body">
    <?php if($video_body) :  ?>
      <?php echo $video_body; ?>
      <?php else: echo 'Video Body'?>
      <?php endif;?>
    </p>
    <?php
      $template = array(
      array( 'acf/yohdev-button')
  );
      if ($button) echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $template ) ) . '" templateLock="all" />';
      ?>
  </div>
</section>
</div>
<?php endif; ?>

