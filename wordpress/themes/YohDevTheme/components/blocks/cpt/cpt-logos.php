<?php 

/**
 * Logo Carousel Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'cpt-logos-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'cpt-logos-default';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

?>

<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<section class="logo-carousel">
  <div class="container">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <?php 
              $args = array( 'post_type' => 'partners', 'posts_per_page' => -1 );
              $the_query = new WP_Query( $args ); 
              ?>
              <?php if ( $the_query->have_posts() ) : ?>
              <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                <li class="glide__slide"><?php the_post_thumbnail(); ?></li>
              <?php endwhile;
              wp_reset_postdata(); ?>
              <?php else:  ?>
              <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?>
          </ul>

         
      </div>

      <div class="controls" data-glide-el="controls">
        <button data-glide-dir="&lt;"><i class="fa fa-chevron-left"></i></button>
        <button data-glide-dir="&gt;"><i class="fa fa-chevron-right"></i></button>
      </div>
      
    </div>
  </div>
  
</section>


<script src="<?php echo bloginfo('template_directory'); ?>/assets/lib/glide-3.4.1/dist/glide.min.js"></script>
<script>
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        autoplay: 2000 | true,
        perView: 4,
        breakpoints: {
            800: {
            perView: 4
            },
            600: {
            perView: 1
            }
            
        }
    }).mount()
</script>
</div>

    