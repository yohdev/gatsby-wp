<?php get_header(); 

$featured_image = get_field('featured_image');
$heading = get_field('sidebar_feature_posts_heading', 'option');
$sidebar_feature_posts = get_field('sidebar_feature_posts', 'option');

?>



<div class="single-blog-post mt-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-7">
        <div class="bp-content">
          <?php
              // Start the loop.
              while ( have_posts() ) : the_post();
              ?>
                  <header class="entry-header">
                      <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
                  </header><!-- .entry-header -->

                  <div class="img-container my-5">
                    <?php echo the_post_thumbnail( 'full' ); ?>
                  </div>
                  
                  <div class="entry-content">
                      <?php
                          the_content();
                      ?>
                  </div><!-- .entry-content -->
      
          <?php // End of the loop.
      endwhile; ?>
        </div>
      </div>
      <div class="col-lg-5">
        <?php get_sidebar(); ?>
        
      </div>
    </div>
  </div>
</div>




  <?php if( have_rows('sp_featured_posts', 'options') ): ?>
      <?php while( have_rows('sp_featured_posts', 'options') ): the_row(); 

          // Get sub field values.
          $heading = get_sub_field('heading');
          $subtext = get_sub_field('subtext');
          $posts = get_sub_field('posts');
          $btn = get_sub_field('link');

          ?>
          <div class="image-card-repeater single-post">
            <div class="container">
              <div class="content">
                <div class="left">
                  <h2 class="spf-heading"><?php echo $heading; ?></h2>
                <p class="spf-body"><?php echo $subtext; ?></p>
                </div>
                <div class="right">
                  <a href="<?php echo $btn['url']?>" class="btn cta-text-link primary-blue"><?php echo $btn['title']?> <i class="fa fa-angle-double-right"></i></a>
                </div>
              </div>
              <div class="row image-cards justify-content-center mt-5">
                <?php if($posts) : ?>
                  <?php foreach( $posts as $post ): 

                      // Setup this post for WP functions (variable must be named $post).
                      setup_postdata($post); ?>
                      <div class="col-lg-3">
                          <div class="repeater-card">
                            <img class="img-fluid" src="<?php echo get_the_post_thumbnail_url( $featured_image->ID ); ?>" alt="<?php echo get_the_post_thumbnail_url( $featured_image['alt']->ID ); ?>">
                            <?php echo the_excerpt(); ?>
                            <a href="<?php echo the_permalink(); ?>" class="btn btn-secondary">Learn More</a>
                          </div>
                      </div>
                  <?php endforeach; ?>
                <?php endif; ?>
              </div>
            </div>
          </div>
      <?php endwhile; ?>
  <?php endif; ?>



<?php get_footer(); ?>