<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package yohdevtheme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		

		<div class="card-blog">
			<a href='<?php echo the_permalink(); ?>'>
				<div class="cb-image" style="background-image: url('<?php echo get_the_post_thumbnail_url(get_the_ID(),'full'); ?>');"></div>
			</a>

			<div class="cb-content">
				
				<header class="entry-header">
					<?php
						the_title( '<h2 class="entry-title cb-heading">', '</h2>' );
					 ?>
				</header><!-- .entry-header -->


    <div class="entry-content">
        <?php
        the_content();
        ?>
    </div><!-- .entry-content -->
	<div class="cb-link-container">
					<a href="<?php echo the_permalink(); ?>" class="cb-link">Read More <i class="fa fa-angle-double-right"></i></a>
					<p class="date"><?php echo the_date(); ?></p>
				</div>
			</div>	

    <!-- <footer class="entry-footer"> -->
        <?php //yohdevtheme_entry_footer(); ?>
    <!-- </footer> -->
	<!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->