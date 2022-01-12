<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package YohDevTheme
 */




?>




<footer class="footer-wrapper mt-5">
	    <div class="container">
	        <div class="row main-row mx-auto">

						<!-- START: Contact -->
						<div class="col-lg col-md-6">
              <?php if( have_rows('footer_area_one', 'option') ): ?>
                  <?php while( have_rows('footer_area_one', 'option') ): the_row();
                  
                  
                  $logo = get_sub_field('logo');
                  $slogan = get_sub_field('slogan');
                  $button = get_sub_field('button');
                  $button_type = get_sub_field('button_type');
                  $button_color_btn = get_sub_field('button_color_btn');
                  $button_color_text_link = get_sub_field('button_color_text_link');
                  ?>

                    <div class="footer-cta mb-4">
                      <img class="img-fluid mb-2" src="<?php echo esc_url($logo['url']);?>" alt="<?php echo esc_url($logo['alt']);?>">
                      <span class="on-primary-text slogan w-100 d-block my-4"><?php echo $slogan;?></span>
                      <?php if($button) :?>
                        <?php if($button_type == 'btn') :  ?>
                        <a href="<?php echo $button['url']; ?>" target="<?php echo $button['target']; ?>" class="btn <?php if($button_color_btn) echo $button_color_btn;?>">
                            <?php if($button['title']): echo $button['title'];?>
                            <?php else : echo 'Learn More';?>
                            <?php endif;?>
                        </a>
                        <?php else :?>
                        <a href="<?php echo $button['url']; ?>" target="<?php echo $button['target']; ?>" class="text-link <?php if($button_color_text_link) echo $button_color_text_link; ?>">
                            <?php if($button['title']): echo $button['title'];?>
                            <?php else : echo 'Learn More';?>
                            <?php endif;?>
                            <i class="fa fa-angle-double-right"></i>
                        </a>
                        <?php endif;?> 
                    <?php endif;?>

								    </div>

                  <?php endwhile; ?>
              <?php endif; ?>
						</div>

						<!-- START: Contact -->
						<div class="col-lg col-md-6">
              <?php if( have_rows('footer_area_two', 'option') ): ?>
                  <?php while( have_rows('footer_area_two', 'option') ): the_row();
                  
                  $fa2_heading = get_sub_field('heading');
                  ?>

                    <div class="footer-cta company mb-4">
                      <h2><?php echo $fa2_heading; ?></h2>
                      <?php
                        $featured_posts = get_sub_field('link_selection', 'option');
                        if( $featured_posts ): ?>
                            <ul class="footer-menu">
                            <?php foreach( $featured_posts as $featured_post ): 
                                $permalink = get_permalink( $featured_post->ID );
                                $title = get_the_title( $featured_post->ID );
                                $custom_field = get_field( 'field_name', $featured_post->ID );
                                ?>
                                <li>
                                    <a href="<?php echo esc_url( $permalink ); ?>"><?php echo esc_html( $title ); ?></a>
                                </li>
                            <?php endforeach; ?>
                            </ul>
                        <?php endif; ?> 
								    </div>

                  <?php endwhile; ?>
              <?php endif; ?>
						</div>

	          <!-- START: Resources -->
						<div class="col-lg col-md-6">
              <?php if( have_rows('footer_area_three', 'option') ): ?>
                  <?php while( have_rows('footer_area_three', 'option') ): the_row();
                  
                  $fa2_heading = get_sub_field('heading');
                  ?>

                    <div class="footer-cta company mb-4">
                      <h2><?php echo $fa2_heading; ?></h2>
                      <?php
                        $featured_posts = get_sub_field('resource_link_selection', 'option');
                        if( $featured_posts ): ?>
                            <ul class="footer-menu">
                            <?php foreach( $featured_posts as $featured_post ): 
                                $permalink = get_permalink( $featured_post->ID );
                                $title = get_the_title( $featured_post->ID );
                                $custom_field = get_field( 'field_name', $featured_post->ID );
                                ?>
                                <li>
                                    <a href="<?php echo esc_url( $permalink ); ?>"><?php echo esc_html( $title ); ?></a>
                                </li>
                            <?php endforeach; ?>
                            </ul>
                        <?php endif; ?> 
								    </div>

                  <?php endwhile; ?>
              <?php endif; ?>
						</div>
	           
	          <!-- START: Footer CTA -->
            <div class="col-lg col-md-6">
              <?php if( have_rows('footer_area_four', 'option') ): ?>
                  <?php while( have_rows('footer_area_four', 'option') ): the_row();
                  
                  $fa2_heading = get_sub_field('heading');
                  ?>

                    <div class="footer-cta company mb-4">
                      <h2><?php echo $fa2_heading; ?></h2>
                      <?php
                        $featured_posts = get_sub_field('sa_link_selection', 'option');
                        if( $featured_posts ): ?>
                            <ul class="footer-menu">
                            <?php foreach( $featured_posts as $featured_post ): 
                                $permalink = get_permalink( $featured_post->ID );
                                $title = get_the_title( $featured_post->ID );
                                $custom_field = get_field( 'field_name', $featured_post->ID );
                                ?>
                                <li>
                                    <a href="<?php echo esc_url( $permalink ); ?>"><?php echo esc_html( $title ); ?></a>
                                </li>
                            <?php endforeach; ?>
                            </ul>
                        <?php endif; ?> 
								    </div>

                  <?php endwhile; ?>
              <?php endif; ?>
						</div>
	            
	            <!-- START: Footer Contact -->
						<div class="col-lg col-md-6 footer-contact">
              <?php if( have_rows('footer_area_five', 'option') ): ?>
                  <?php while( have_rows('footer_area_five', 'option') ): the_row();
                  
                  $fa2_heading = get_sub_field('heading');
                  $email = get_sub_field('company_email');
                  $phone = get_sub_field('company_phone');
                  $name = get_sub_field('company_name');
                  $address = get_sub_field('company_address');
                  ?>

                    <div class="footer-cta mb-4">
                      <h2><?php echo $fa2_heading; ?></h2>
                      <p><?php echo $email; ?></p>
                      <p class="pt-3"><?php echo $phone; ?></p>
                      <p class="pt-3"><?php echo $name; ?></p>
                      <p class="pt-3"><?php echo $address; ?></p>
								    </div>

                  <?php endwhile; ?>
              <?php endif; ?>
						</div>
	        </div> <!-- END Row -->
	        <div class="row legal pt-4 mx-auto">
						<div class="col-lg-3 social-nav order-lg-3">
							<div class="icon-holder">
								<a href="#"><i class="fa fa-facebook-official"></i></a>
								<a href="#"><i class="fa fa-linkedin-square"></i></a>
								<a href="#"><i class="fa fa-youtube-play"></i></a>
								<a href="#"><i class="fa fa-twitter"></i></a>
							</div>
						</div>
						<div class="col-lg-3">
							<p>© YohDev <?php echo currentYear(); ?> All Rights Reserved</p>
						</div>
						<div class="col-lg-6 legal-menu">
							<ul class="footer-menu">
								<li><a href="#">Cookies</a></li>
								<li><a href="#">Legal</a></li>
								<li><a href="#">Privacy Statement</a></li>
								<li><a href="#">Branding &amp; Logo</a></li>
							</ul>
						</div>
	        </div>
	    </div>
	</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
