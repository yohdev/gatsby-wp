<?php 

/**
 * Image and Text Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'iwt-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'iwt';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}


$iwt_image = get_field( 'iwt_image');
$iwt_title = get_field( 'iwt_title');
$iwt_heading = get_field( 'iwt_heading');
$iwt_body = get_field( 'iwt_body');
$iwt_img_position = get_field('image_position');

$margin_options = get_field('margin_options');
$background_image = get_field('background_image');
$color_options = get_field('color_options');
$overlay_color_options = get_field('overlay_color_options');
$full_width = get_field('full_width');
$padding_options = get_field('padding_options');
$button = get_field( 'button');

?>

<?php       
if( isset( $block['data']['preview_image_help'] )  ) :    /* rendering in inserter preview  */

    echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';


else : /* rendering in editor body */?>
     
<div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
<?php if($color_options) :?>
    <section class="image-with-text <?php if($margin_options) echo $margin_options; ?> <?php if($padding_options) echo $padding_options; ?> bg-<?php echo color_palette();?>">
<?php else : ?>
    <section class="image-with-text position-relative 
    <?php if($margin_options) echo $margin_options; ?>
    <?php if($padding_options) echo $padding_options; ?>
    <?php if($overlay_color_options) :?> 
        bg-<?php echo overlay_palette();?>
    <?php endif; ?>" 
    style='background-image: url("<?php echo $background_image; ?>");'>
    <?php if($overlay_color_options) :?>
    <div class="overlay bg-<?php echo overlay_palette();?>"></div>
  <?php endif; ?> 
<?php endif; ?>
            <div class="<?php echo $full_width; ?> position-relative">
                <div class="row <?php echo $iwt_img_position; ?> block-content">
                    <div class="col-lg-6 order-2 order-lg-1 align-self-center">
                        <div class="iwt-content">
                            <h4 class="iwt-title-hat">
                                <?php if ($iwt_title) : echo $iwt_title; ?>
                                <?php else : echo "Title hat"; ?>
                                <?php endif; ?>
                            </h4>
                            <h2 class="iwt-heading">
                                <?php if ($iwt_heading) : echo $iwt_heading; ?>
                                <?php else : echo "Section Heading"; ?>
                                <?php endif; ?>
                            </h2>
                            <p class="iwt-body">
                                <?php if ($iwt_body) : echo $iwt_body; ?>
                                <?php else : echo "Section Body"; ?>
                                <?php endif; ?>
                            </p>
                            <?php
                            $template = array(
                            array( 'acf/yohdev-button')
                        );
                            if ($button) echo '<InnerBlocks template="' . esc_attr( wp_json_encode( $template ) ) . '" templateLock="all" />';
                            ?>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2 iwt-image-holder">
                        <?php if ($iwt_image) : ?>
                        <img class="img-fluid" src="<?php echo esc_url($iwt_image['url']); ?>" alt="<?php echo $iwt_image['alt']; ?>">
                        <?php else : ?>
                        <img class="img-fluid" src="https://via.placeholder.com/450" alt="Placeholder">
                        <?php endif; ?>
                    </div>
                </div>
            </div>
    </section>
</div>
<?php endif; ?>


