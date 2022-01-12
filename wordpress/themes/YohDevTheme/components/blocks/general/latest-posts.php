<?php 

/**
 * Latest Posts Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'latest-posts-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'latest-posts';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$heading = get_field('heading');
$body = get_field('body');
$link = get_field('link');

global $post;

?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<div class="container py-5">
  <div class="top-content">
    <div class="left">
      <h2><?php echo $heading ?></h2>
      <p><?php echo $body ?></p>
    </div>
    <div class="right">
    <?php
      $template = array(
      array( 'acf/yohdev-button')
  );
    echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $template ) ) . '" templateLock="all" />';
      ?>
    </div>
  </div>
  <div class="row justify-content-center">
    
    <?php
      $featured_posts = get_field('latest_posts');
      if( $featured_posts ): ?>

          <?php foreach( $featured_posts as $post ): 

            $title = get_the_title( $featured_post->ID );

              // Setup this post for WP functions (variable must be named $post).
              setup_postdata($post); ?>
              <div class="col-md-4 col-lg-3 yohdev-card-container">
                <div class="yohdev-card">
                  <div class="card-image" style="background-image: url('<?php echo get_the_post_thumbnail_url($post->ID, 'full') ?>');">
                     
                  </div>
                  
                  <div class="card-body">
                    <p class="cb-body"><?php echo the_excerpt(); ?></p>

                    <div class="cb-link-container">
                      <a href="<?php echo get_permalink($post->ID); ?>" class="btn btn-secondary primary-blue">Learn More</a>
                    </div>
                  </div>
                  
                </div>
              </div>
          <?php endforeach; ?>

          <?php 
          // Reset the global post object so that the rest of the page works correctly.
          wp_reset_postdata(); ?>
      <?php endif; ?>
  </div>
</div>
</div>