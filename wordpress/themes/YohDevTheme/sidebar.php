<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package YohDevTheme
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}

$heading = get_field('sidebar_feature_posts_heading', 'option');
$sidebar_feature_posts = get_field('sidebar_feature_posts', 'option');
?>



<div class="sb-content">

	<!-- Widget Area -->

	<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
		<div id="primary-sidebar" class=" sb-block primary-sidebar widget-area" role="complementary">
			<?php dynamic_sidebar( 'sidebar-1' ); ?>
		</div><!-- #primary-sidebar -->
	<?php endif; ?>

	<!-- End Widget Area -->
	<div class="sb-block">
		<div class="subscribe">
			<h3 class="sub-heading">Subscribe to the blog!</h3>
			<div class="sub-form">
				<input class="form-control form-control-lg" type="text" placeholder="Your email address" aria-label=".form-control-lg example">
				<button type="submit" class="btn btn-secondary form-control">Subscribe</button>
			</div>
		</div>
	</div>

	<div class="sb-block">
		<h3 class="sr-heading mb-5"><?php echo $heading; ?></h3>
		<?php if($sidebar_feature_posts) : ?>
			<?php foreach( $sidebar_feature_posts as $post ): 

					// Setup this post for WP functions (variable must be named $post).
					setup_postdata($post); ?>
					<div class="col">
							<a class="sr-card" href="<?php the_permalink(); ?>">
								<img class="sr-image img-fluid" src="<?php echo get_the_post_thumbnail_url( $featured_image->ID ); ?>" alt="<?php echo get_the_post_thumbnail_url( $featured_image['alt']->ID ); ?>">
							</a>
					</div>
			<?php endforeach; ?>
		<?php endif; ?>
	</div>
	
</div>


