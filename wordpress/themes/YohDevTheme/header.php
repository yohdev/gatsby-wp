<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package YohDevTheme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php //wp_body_open(); ?>
<div id="page" class="site">
    <a class="skip-link screen-reader-text d-none" href="#primary"><?php esc_html_e( 'Skip to content', 'yohdevtheme' ); ?></a>

    <header id="masthead" class="">
        <div class="w-100 navbar-wrapper bg-primary">
            <nav class="navbar navbar-expand-sm fixed-top bg-dark navbar-dark">
                <div class="container">
                    <?php
                        // Display the Custom Logo
                        the_custom_logo();

                        // No Custom Logo, just display the site's name
                        if (!has_custom_logo()) {
                            ?>
                            <a class="navbar-brand" href="<?php echo $HOME_URL;?>">
                            
                            </a>
                            <?php
                        }
                    ?>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <?php
                    wp_nav_menu(array(
                        'theme_location'    => 'primary',
                        'container'       => 'div',
                        'container_id'    => 'navbarNav',
                        'container_class' => 'collapse navbar-collapse',
                        'menu_id'         => false,
                        'menu_class'      => 'navbar-nav ms-auto',
                        'depth'           => 4,
                        'fallback_cb'     => 'wp_bootstrap_navwalker::fallback',
                        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s<li><a href="http://www.example.com/contact" class="btn btn-secondary">Get Started</a></li></ul>',
                        'walker'          => new wp_bootstrap_navwalker()
                        ));
                ?>
            </nav>	 
        </div>
    </header><!-- #masthead -->     
</div>  
   
