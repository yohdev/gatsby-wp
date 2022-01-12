<?php 

/**
 * FAQ Repeater Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

 // Create id attribute allowing for custom "anchor" value.
$id = 'cpt-faq-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'cpt-faq-default';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<div class="container">
  <?php
  $featured_posts = get_field('faq');
  if( $featured_posts ): ?>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <?php foreach( $featured_posts as $key=>$post ):
          
          

          // Setup this post for WP functions (variable must be named $post).
          setup_postdata($post);
          
          $question = get_the_title($post->ID); ?>

            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading-<?php echo $key; ?>">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-<?php echo $key; ?>" aria-expanded="false" aria-controls="flush-collapseOne">
                    <?php echo $question; ?>
                </button>
                </h2>
                <div id="flush-collapse-<?php echo $key; ?>" class="accordion-collapse collapse" aria-labelledby="flush-heading-<?php echo $key; ?>" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"><?php the_field( 'answer', $post->ID ); ?></div>
                </div>
            </div>


          <?php endforeach; ?>
        
          </div>
      <?php 
      // Reset the global post object so that the rest of the page works correctly.
       wp_reset_postdata(); ?>
  <?php endif; ?>
</div>
</div>