<?php 

/**
 * Card Repeater Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'card-repeater' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'card-repeater-default';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
} 

$card_repeater_header = get_field( 'card_repeater_header');
$card_subtext = get_field( 'card_subtext'); 
$text_align = get_field('text_align');
$card_link = get_field('card_link');
$cta_link = get_field('cta_link');

$color_options = get_field('color_options');
$margin_options = get_field('margin_options');
$padding_options = get_field('padding_options');

$featured_img_url = get_post_thumbnail_id( $post->ID );
echo wp_get_attachment_image_url( $featured_img_url, 'thumbnail' );

?>

<?php       
	    if( isset( $block['data']['preview_image_help'] )  ) :    /* rendering in inserter preview  */

			echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';
	
		
		else : /* rendering in editor body */?>
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
        <section class="image-card-repeater 
        <?php if($margin_options) echo $margin_options; ?>
        <?php if($padding_options) echo $padding_options; ?>
        <?php if($color_options):?> 
            bg-<?php echo color_palette(); ?>">
        <?endif; // This logic will need to be looked at. It's causing the section element to not close and is affecting the container div. ?> 
                <div class="container cr-content">
                    <h2 class="cr-header">
                        <?php if($card_repeater_header) : echo $card_repeater_header; ?>
                        <?php endif;?>
                    </h2>
                    <?php if($card_subtext) : ?>
                    <p class="cr-body">
                        <?php echo $card_subtext; ?>
                    </p>
                    <?php endif;?>
                    <div class="row image-cards justify-content-center my-5">
                        <?php if( have_rows('cards') ):?>
                            <?php while( have_rows('cards') ) : the_row(); 
                                // Load sub field value.
                                $card_image = get_sub_field('card_image');
                                $card_title = get_sub_field('card_title');
                                $card_body = get_sub_field('card_body');
                                $card_link = get_sub_field('card_link');
                                $button = get_sub_field('button');
                                $button_type = get_sub_field('button_type');
                                $button_color_btn = get_sub_field('button_color_btn');
                                $button_color_text_link = get_sub_field('button_color_text_link');
                                ?>
                                <div class="col-lg-3">
                                    <div class="yohdev-card <?php echo $text_align ; ?> my-3">
                                        <?php if($card_image) : ?>
                                            <div class="card-image-container">
                                                <img src="<?php echo $card_image['url']; ?>" alt="<?php echo $card_image['alt']; ?>" class="img-fluid">
                                            </div>
                                        
                                        <?php endif;?>
                                        <div class="card-body">
                                            <h3 class="card-heading">
                                                <?php if($card_title) : echo $card_title;?>
                                                <?php else :  echo 'Card Title'; ?>
                                                <?php endif;?>
                                            </h3>
                                            <p class="card-body-text">
                                                <?php if($card_body) : echo $card_body; ?>
                                                <?php else : echo 'Card Body'; ?>
                                                <?php endif;?>
                                            </p>
                                            <a href="<?php echo $button['url']; ?>" target="<?php echo $button['target']; ?>" class="<?php if($button_type) : echo $button_type; ?><?php else :?> <?php echo 'btn btn-primary' ?> <?php endif;?> <?php if($button_color_btn) : echo $button_color_btn; ?> <?php endif;?><?php if($button_color_text_link) : echo $button_color_text_link; ?><?php endif;?>">
                                            <?php if($button['title']): echo $button['title'];?>
                                            <?php else : echo 'Learn More';?>
                                            <?php endif;?>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            <?php endwhile;?>
                        <?php else : ?>
                            <div class="col-lg-3">
                                    <div class="yohdev-card">
                                        <div class="card-image" style="background-image: url('https://via.placeholder.com/150')"></div>
                                        
                                        <div class="card-body">
                                            <h3 class="card-heading">Card Title</h3>
                                            <p class="card-body-text">Card Body</p>
                                            <a class="btn btn-primary">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                        <?php endif;?>
                    </div>
                </div>
        </section>
        </div>
        <?php endif; ?>



