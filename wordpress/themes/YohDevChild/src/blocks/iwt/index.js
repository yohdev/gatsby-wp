const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, InnerBlocks, BlockControls, AlignmentToolbar } = wp.editor;
const { PanelBody, IconButton, RangeControl } = wp.components;
const ALLOWED_BLOCKS = ['core/columns', 'core/column', 'core/heading', 'core/paragraph', 'core/button', 'core/image'];

const MY_TEMPLATE = [
  [
    'core/columns',
    { columns: 2 },
    [
      ['core/column', { className: 'image' }, [['core/image', { className: 'img-fluid' }]]],
      [
        'core/column',
        { className: 'content' },
        [
          ['core/heading', { placeholder: 'Enter heading...' }],
          ['core/paragraph', { placeholder: 'Enter body...' }],
          ['core/button', {}]
        ]
      ]
    ]
  ]
];

registerBlockType('yohdev/gutenberg-image-with-text', {
  // Built in attributes

  title: 'Gutenburg - Image With Text',
  description: 'Container block that holds an image and text content.',
  icon: 'format-image',
  category: 'text',

  // Custom Attributes

  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h1'
    },

    titleColor: {
      type: 'string',
      default: 'black'
    },

    titleSize: {
      type: 'number',
      default: 65
    },

    columns: {
      type: 'number',
      default: 2
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
    const { className, backgroundImage, columns, overlayColor, overlayOpacity } = attributes;
    // Custom Functions

    function onChangeHeading(newTitle) {
      setAttributes({ title: newTitle });
    }

    function onTitleColorChange(newColor) {
      setAttributes({ titleColor: newColor });
    }

    function onChangeAlignment(newAlignment) {
      setAttributes({
        alignment: newAlignment === undefined ? 'none' : newAlignment
      });
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
        <PanelBody title={'Columns Settings'}>
          <p>
            <strong>Number of Columns:</strong>
          </p>

          <RangeControl value={columns} />
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
      <div className='image-with-text' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='overlay' style={{ backgroundColor: `${overlayColor}`, opacity: `${overlayOpacity}` }}></div>
        <div className='container'>
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={MY_TEMPLATE} templateLock='insert' />
        </div>
      </div>
    ];
  },

  save: ({ attributes }) => {
    const { className, backgroundImage, columns, overlayColor, overlayOpacity } = attributes;

    return (
      <div className='image-with-text' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='overlay' style={{ backgroundColor: `${overlayColor}`, opacity: `${overlayOpacity}` }}></div>
        <div className='container'>
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
});
