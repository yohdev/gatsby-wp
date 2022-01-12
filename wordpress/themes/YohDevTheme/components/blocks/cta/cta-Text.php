<?php 

/**
 * CTA Text Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'cta-text-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'cta-text-default';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$heading = get_field('heading');
$body = get_field('body');

$padding_options = get_field('padding_options');
$margin_options = get_field('margin_options');
$background_image = get_field('background_image');
$overlay_color_options = get_field('overlay_color_options');

$button = get_field('button');
$button_type = get_field('button_type');
$button_color_btn = get_field('button_color_btn');
$button_color_text_link = get_field('button_color_text_link');
?>

<?php       
if( isset( $block['data']['preview_image_help'] )  ) :    /* rendering in inserter preview  */

echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';


else : /* rendering in editor body */?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<?php if($background_image) : ?>
  <section class="cta-text-block position-relative  <?php if($margin_options) echo $margin_options;?> <?php if($padding_options) echo $padding_options; ?>" style="background-image: url(<?php echo $background_image; ?>);">
  <?php if($overlay_color_options) :?>
    <div class="overlay bg-<?php echo overlay_palette();?>"></div>
  <?php endif; ?> 
<?php else : ?>
  <section class="cta-text-block <?php if($margin_options) echo $margin_options;?> <?php if($padding_options) echo $padding_options; ?>">
<?php endif; ?>
  <div class="container">
    <div class="text-block position-relative z-2">
      <h2 class="tb-heading">
        <?php if($heading) :echo $heading; ?>
        <?php else : echo 'CTA Heading';?>
        <?php endif; ?>
      </h2>
      <p class="tb-body">
        <?php if($body) : echo $body;?>
        <?php else : echo 'CTA Body';?>
        <?php endif; ?>
      </p>
      <a href="<?php echo $button['url']; ?>" target="<?php echo $button['target']; ?>" class="<?php if($button_type) : echo $button_type; ?><?php else :?> <?php echo 'btn btn-primary' ?> <?php endif;?> <?php if($button_color_btn) : echo $button_color_btn; ?> <?php endif;?><?php if($button_color_text_link) : echo $button_color_text_link; ?><?php endif;?>">
      <?php if($button['title']): echo $button['title'];?>
      <?php else : echo 'Learn More';?>
      <?php endif;?>
      </a>
    </div>
  </div>
</section>
</div>
<?php endif; ?>