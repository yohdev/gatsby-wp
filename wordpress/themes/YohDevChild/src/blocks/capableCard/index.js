const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, InnerBlocks, BlockControls, AlignmentToolbar } = wp.editor;
const { PanelBody, IconButton, RangeControl } = wp.components;
const ALLOWED_BLOCKS = ['core/heading'];

registerBlockType('yohdev/gutenberg-capable-card', {
  // Built in attributes

  title: 'Gutenburg - Capable Card',
  description: 'Custom YohDev Capability Card',
  icon: 'format-image',
  category: 'text',

  // Custom Attributes

  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h3'
    },

    titleColor: {
      type: 'string',
      default: 'white'
    },

    titleSize: {
      type: 'number',
      default: 25
    },

    body: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },

    bodyColor: {
      type: 'string',
      default: 'white'
    },

    backgroundColor: {
      type: 'string',
      default: 'black'
    },

    borderColor: {
      type: 'string',
      default: '#9185de'
    }
  },

  // Built in functions

  edit: ({ attributes, setAttributes }) => {
    const { title, titleColor, body, bodyColor, titleSize, backgroundColor, borderColor } = attributes;
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

    function onBackgroundColorChange(newColor) {
      setAttributes({ backgroundColor: newColor });
    }

    function onBorderColorChange(newColor) {
      setAttributes({ borderColor: newColor });
    }

    return [
      <InspectorControls style={{ marginBottom: '40px' }}>
        <PanelBody title={'Background Color Options'}>
          <div style={{ marginBottom: '40px' }}>
            <p>
              <strong>Background Color:</strong>
              <ColorPalette value={backgroundColor} onChange={onBackgroundColorChange} />
            </p>
          </div>
          <div style={{ marginTop: '40px', marginBottom: '40px' }}>
            <p>
              <strong>Border Color:</strong>
              <ColorPalette value={borderColor} onChange={onBorderColorChange} />
            </p>
          </div>
        </PanelBody>
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
      </InspectorControls>,

      <div className='yohdev-capable-card' style={{ backgroundColor: `${backgroundColor}` }}>
        <div className='content-container'>
          <RichText key='editable' tagName='h3' placeholder='Heading...' value={title} onChange={onChangeHeading} style={{ color: titleColor }} />
          <div className='card-border' style={{ borderColor: `${borderColor}` }}></div>
          <RichText key='editable' tagName='p' placeholder='Body Text...' value={body} onChange={onChangeBody} style={{ color: bodyColor }} />
        </div>
      </div>
    ];
  },

  save: ({ attributes }) => {
    const { title, titleColor, body, bodyColor, titleSize, backgroundColor, borderColor } = attributes;

    return (
      <div className='yohdev-capable-card' style={{ backgroundColor: `${backgroundColor}` }}>
        <div className='content-container'>
          <h3 style={{ color: titleColor }}>{title}</h3>
          <div className='card-border' style={{ borderColor: `${borderColor}` }}></div>
          <RichText.Content tagName='p' value={body} style={{ color: bodyColor }} />
        </div>
      </div>
    );
  }
});
