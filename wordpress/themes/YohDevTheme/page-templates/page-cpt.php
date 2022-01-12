<?php
/**
 * Template Name: CPT
 */

get_header();
$cpt = 'news';
$num_of_posts = '1';

?>
<main id="primary" class="site-main">
	<div class="container">
    <?php get_template_part( 'components/recent', 'posts' );?>
<?php 
$paged = ( get_query_var( 'paged' ) ) ? absint( get_query_var( 'paged' ) ) : 1;
$args = array(
    'post_type'=> $cpt,
    'order'    => 'ASC',
    'posts_per_page' => $num_of_posts,
    'paged' => $paged
);              

$the_query = new WP_Query( $args );
?>
<?php if($the_query->have_posts() ) : ?>
    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
    <div class="col-lg-4 pr-lg-5">
            <!-- Card With Text Only -->    
                <div class="custom-card card-with-text py-5">
                <h3><?php the_title(); ?></h3>
                <p><?php the_excerpt(); ?></p>
                <div class="link-with-logo">
                    <a href="<?php the_permalink();?>" class="mt-4">Read More</a>
                </div>
                </div>
            </div>

    <?php endwhile; wp_reset_postdata(); endif;?>
    <?php yohdevtheme_pagination(); ?>
	</div>
	</main><!-- #main -->

<?php
get_footer();