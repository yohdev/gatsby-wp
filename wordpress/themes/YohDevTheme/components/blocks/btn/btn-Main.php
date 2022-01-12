<?php 

/**
 * Transactional Button Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'btn-main' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'btn-main-default';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
} 

$button = get_field('button');
$button_type = get_field('button_type');
$button_color_btn = get_field('button_color_btn');
$button_color_text_link = get_field('button_color_text_link');
?>

<?php

if( isset( $block['data']['preview_image_help'] )  ) :    /* rendering in inserter preview  */

echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';
?>

<?php else : ?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<?php if($button) :?>
<?php if($button_type == 'btn') :  ?>
  <a href="<?php echo $button['url']; ?>" target="<?php echo $button['target']; ?>" class="btn <?php if($button_color_btn) echo $button_color_btn;?>">
    <?php if($button['title']): echo $button['title'];?>
    <?php else : echo 'Learn More';?>
    <?php endif;?>
  </a>
<?php else :?>
  <a href="<?php echo $button['url']; ?>" target="<?php echo $button['target']; ?>" class="text-link <?php if($button_color_text_link) echo $button_color_text_link; ?>">
    <?php if($button['title']): echo $button['title'];?>
    <?php else : echo 'Learn More';?>
    <?php endif;?>
    <i class="fa fa-angle-double-right"></i>
  </a>
<?php endif;?> 
<?php else :?>
  <a href="#" class="btn btn-primary">
Button Text
  </a>
<?php endif;?>
</div>
<?php endif?>
