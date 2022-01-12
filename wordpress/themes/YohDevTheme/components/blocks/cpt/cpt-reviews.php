<?php 

/**
 * Review Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'cpt-reviews-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'cpt-reviews-default';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

?>

<?php 

$review_header = get_field( 'review_header'); 
$bg_image = get_field('background_image');

$padding_options = get_field('padding_options');
$margin_options = get_field('margin_options');
$background_image = get_field('background_image');
$overlay_color_options = get_field('overlay_color_options');
$color_options = get_field('color_options');

?>
<?php
if( isset( $block['data']['preview_image_help'] )  ) :    /* rendering in inserter preview  */

echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';


else : /* rendering in editor body */?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<?php
$args = array(
	'post_type' => 'reviews',
	'category_name' => 'example-category'
);
$the_query = new WP_Query ( $args ); 
?>

<?php if($color_options) : ?>
  <section class="reviews bg-<?php echo color_palette(); ?> <?php if($margin_options) echo $margin_options; ?> <?php if($padding_options) echo $padding_options; ?>">
  <?php else : ?>
    <section class="reviews <?php if($margin_options) echo $margin_options; ?> <?php if($padding_options) echo $padding_options; ?>" style="background-image: url(<?php echo $background_image; ?>);"> 
    <?php if($overlay_color_options) :?>
    <div class="overlay bg-<?php echo overlay_palette();?>"></div>
  <?php endif; ?> 
<?php endif; ?>

  <div class="container">
    <div class="rev-content">
    <?php if ($review_header) : ?> 
      <h2 class="rev-header">
        <?php  echo $review_header; ?>\
      </h2>
      <?php endif; ?>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        
        <div class="carousel-inner">
          <?php 
            $args = array(  
                'post_type' => 'reviews',
                'post_status' => 'publish',
                'posts_per_page' => 8, 
                'orderby' => 'title',
                'order' => 'ASC', 
            );
            $loop = new WP_Query( $args );

            while ( $loop->have_posts() ) : $loop->the_post(); ?>
              <?php $review_image = get_field( 'review_image', get_the_ID()); ?>
              <?php $review_name = get_field( 'review_name', get_the_ID()); ?>
              <?php $review_body = get_field( 'review_body', get_the_ID()); ?>
              <?php $review_date = get_field( 'review_date', get_the_ID()); ?>

              <div class="carousel-item <?php if ( $loop->current_post == 0 ) : ?>active<?php endif; ?>">
                <img class="rev-image" src="<?php echo esc_url($review_image['url']); ?>" alt="<?php echo $review_image['alt']; ?>">
                <div class="stars">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <span class="rev-name"><?php echo $review_name; ?></span>
                <span class="rev-date"><?php echo $review_date; ?></span>
                <p class="rev-body"><?php echo $review_body; ?></p>
              </div>
            <?php endwhile; wp_reset_postdata(); ?>
        </div>

        <div class="carousel-indicators">
          <?php 
            $args = array(
              'post_type'     => 'reviews'
            );
            $the_query = new WP_Query( $args );
          ?>

          <?php $loop = new WP_Query( $args ); 
                
            while ( $loop->have_posts() ) : $loop->the_post(); ?>

              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="<?php echo $loop->current_post; ?>" class="<?php if ( $loop->current_post == 0 ) : ?>active<?php endif; ?>" aria-current="true" aria-label="Slide"></button>
            <?php endwhile; ?>
            <?php wp_reset_postdata();  ?>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</section>
</div>
<?php endif; ?>