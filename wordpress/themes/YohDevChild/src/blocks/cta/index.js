const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, InnerBlocks, BlockControls, AlignmentToolbar } = wp.editor;
const { PanelBody, IconButton, RangeControl } = wp.components;
const ALLOWED_BLOCKS = ['core/heading', 'core/button', 'core/paragraph'];

const MY_TEMPLATE = [
  ['core/heading', { className: 'cta-header', placeholder: 'Enter Heading...' }],
  ['core/paragraph', { className: 'cta-body', placeholder: 'Enter Body Content...' }],
  ['core/button', { className: false }]
];

registerBlockType('yohdev/gutenberg-cta', {
  // Built in attributes

  title: 'Gutenburg - YohDev CTA',
  description: 'Call to Action',
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

    body: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },

    backgroundColor: {
      type: 'string',
      default: 'none'
    }
  },

  // Built in functions

  edit: ({ attributes, setAttributes }) => {
    const { backgroundColor } = attributes;
    // Custom Functions

    function onBackgroundColorChange(newColor) {
      setAttributes({ backgroundColor: newColor });
    }

    return [
      <InspectorControls style={{ marginBottom: '40px' }}>
        <PanelBody title={'Background Options'}>
          <div style={{ marginTop: '20px', marginBottom: '40px' }}>
            <p>
              <strong>Background Color:</strong>
              <ColorPalette value={backgroundColor} onChange={onBackgroundColorChange} />
            </p>
          </div>
        </PanelBody>
      </InspectorControls>,

      <div className='yohdev-cta' style={{ backgroundColor: `${backgroundColor}` }}>
        <div className='container'>
          <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={MY_TEMPLATE} />
        </div>
      </div>
    ];
  },

  save: ({ attributes }) => {
    const { backgroundColor } = attributes;

    return (
      <div className='yohdev-cta' style={{ backgroundColor: `${backgroundColor}` }}>
        <div className='container'>
          <InnerBlocks.Content />
        </div>
      </div>
    );
  }
});
