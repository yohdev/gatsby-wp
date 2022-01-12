<?php 

/**
 * Horizontal Card Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */


  $heading = get_field( 'heading');
  $body = get_field( 'body');

  $color_options = get_field('color_options');
  $margin_options = get_field('margin_options');
  $padding_options = get_field('padding_options');

?>

<div class="yohdev-card-horiz
  <?php if($margin_options) echo $margin_options; ?>
  <?php if($padding_options) echo $padding_options; ?>
  <?php if($color_options):?> 
    bg-<?php echo color_palette(); ?><?endif; ?> m-4">
  
  
  <h3 class="heading">
    <?php if($heading) :echo $heading; ?>
    <?php else : echo 'Card Heading';?>
    <?php endif; ?>
  </h3>
  <p class="body">
    <?php if($body) :echo $body; ?>
    <?php else : echo 'Card Body';?>
    <?php endif; ?>
  </p>
</div>