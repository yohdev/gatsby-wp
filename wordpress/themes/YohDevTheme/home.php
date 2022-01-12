<?php
/**
 * Templare name: Posts Page
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package YohDevTheme
 */

get_header();
?>

	<main id="primary" class="site-main">
                <section class="hero-wrapper" style="background-image: url('https://storage.googleapis.com/stateless-yohdev/2021/08/6b01ffc8-hero-default@2x.png');"></section>

								
                <div class="yoh-container-default container mb-5">
                <header class="entry-header">
									<?php if ( is_singular() && is_home() ) : ?>
													<h1 class="page-title cb-heading"><?php echo the_archive_title(); ?></h1>
									<?php else : ?>
													<h1 class="page-title cb-heading"><?php echo single_post_title(); ?></h1>
									<?php endif; ?>
									<?php
									if ( have_posts() ) :

									?>
								</header>

			<div class="row">
				<div class="col-md-7 col-lg-8">
					<?php /* Start the Loop */
						while ( have_posts() ) :
							the_post();

							/*
							* Include the Post-Type-specific template for the content.
							* If you want to override this in a child theme, then include a file
							* called content-___.php (where ___ is the Post Type name) and that will be used instead.
							*/
							get_template_part( 'template-parts/content', get_post_type() );

						endwhile;

						the_posts_pagination();

					else :

						get_template_part( 'template-parts/content', 'none' );

					endif;
					?>
				</div>

				<div class="col-md-5 col-lg-4 px-lg-5">
					<?php get_sidebar(); ?>
				</div>
			</div>

			

	</main><!-- #main -->
</div>
<?php

get_footer();
