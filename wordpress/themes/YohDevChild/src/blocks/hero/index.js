const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, InnerBlocks } = wp.editor;
const { PanelBody, IconButton, RangeControl } = wp.components;
const ALLOWED_BLOCKS = ['core/button', 'core/heading', 'core/paragraph', 'yohdev/gutenberg-header'];

registerBlockType('yohdev/gutenberg-hero', {
  // Built in attributes

  title: 'Gutenburg - Hero',
  description: 'Custom Hero Block',
  icon: 'format-image',
  category: 'text',

  // Custom Attributes

  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },

    titleColor: {
      type: 'string',
      default: 'black'
    },

    body: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },

    bodyColor: {
      type: 'string',
      default: 'black'
    },

    backgroundImage: {
      type: 'string',
      default: null
    },

    overlayColor: {
      type: 'string',
      default: 'black'
    },

    overlayOpacity: {
      type: 'number',
      default: 0.3
    }
  },

  // Built in functions

  edit: ({ attributes, setAttributes }) => {
    const { title, body, titleColor, bodyColor, backgroundImage, overlayColor, overlayOpacity } = attributes;
    // Custom Functions

    function onChangeHeading(newTitle) {
      setAttributes({ title: newTitle });
    }

    function onTitleColorChange(newColor) {
      setAttributes({ titleColor: newColor });
    }

    function onChangeBody(newBody) {
      setAttributes({ body: newBody });
    }

    function onBodyColorChange(newColor) {
      setAttributes({ bodyColor: newColor });
    }

    function onSelectImage(newImage) {
      setAttributes({ backgroundImage: newImage.sizes.full.url });
    }

    function onOverlayColorChange(newColor) {
      setAttributes({ overlayColor: newColor });
    }

    function onOverlayOpacityChange(newOpacity) {
      setAttributes({ overlayOpacity: newOpacity });
    }

    return [
      <InspectorControls style={{ marginBottom: '40px' }}>
        <PanelBody title={'Font Color Settings'}>
          <p>
            <strong>Select a Title Color:</strong>
          </p>
          <ColorPalette value={titleColor} onChange={onTitleColorChange} />
          <p>
            <strong>Select a Body Color:</strong>
          </p>
          <ColorPalette value={bodyColor} onChange={onBodyColorChange} />
        </PanelBody>
        <PanelBody title={'Background Image Options'}>
          <p>
            <strong>Select a Background Image:</strong>
          </p>
          <MediaUpload
            onSelect={onSelectImage}
            type='image'
            value={backgroundImage}
            render={({ open }) => (
              <IconButton className='editor-media-placeholder__button is-button is-default is-large' icon='upload' onClick={open}>
                Background Image
              </IconButton>
            )}
          />
          <div style={{ marginTop: '20px', marginBottom: '40px' }}>
            <p>
              <strong>Overlay Color:</strong>
              <ColorPalette value={overlayColor} onChange={onOverlayColorChange} />
            </p>
          </div>
          <RangeControl label={'Overlay Opacity'} value={overlayOpacity} onChange={onOverlayOpacityChange} min={0} max={1} step={0.05} />
        </PanelBody>
      </InspectorControls>,

      <div className='hero' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='overlay' style={{ backgroundColor: `${overlayColor}`, opacity: `${overlayOpacity}` }}></div>
        <div className='container hero-container py-5'>
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
        </div>
      </div>
    ];
  },

  save: ({ attributes }) => {
    const { title, body, titleColor, bodyColor, backgroundImage, overlayColor, overlayOpacity } = attributes;

    return (
      <div className='hero' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='overlay' style={{ backgroundColor: `${overlayColor}`, opacity: `${overlayOpacity}` }}></div>
        <div className='container hero-container py-5'>
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
});
