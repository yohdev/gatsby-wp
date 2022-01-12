<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package YohDevTheme
 */

get_header();
?>

	<main id="primary" class="site-main">
		<section class="hero-wrapper" style="background-image: url('https://storage.googleapis.com/stateless-yohdev/2021/08/6b01ffc8-hero-default@2x.png');"></section>

		<?php if ( have_posts() ) : ?>

			<div class="yoh-container-default container mb-5">
				<header class="page-header">
					<?php
					the_archive_title( '<h1 class="page-title">', '</h1>' );
					the_archive_description( '<div class="archive-description">', '</div>' );
					?>
				</header><!-- .page-header -->
				<div class="row">
					<div class="col-md-7 col-lg-8">
						<?php
							/* Start the Loop */
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
			</div>

			

	</main><!-- #main -->

<?php

get_footer();