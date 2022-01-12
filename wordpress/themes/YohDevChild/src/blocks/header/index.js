const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, InnerBlocks, BlockControls, AlignmentToolbar } = wp.editor;
const { PanelBody, IconButton, RangeControl } = wp.components;
const ALLOWED_BLOCKS = ['core/heading'];

registerBlockType('yohdev/gutenberg-header', {
  // Built in attributes

  title: 'Gutenburg - YohDev Header',
  description: 'Custom Header',
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

    dotColor: {
      type: 'string',
      default: '#9185de'
    },

    alignment: {
      type: 'string',
      default: 'none'
    }
  },

  // Built in functions

  edit: ({ attributes, setAttributes }) => {
    const { title, titleColor, titleSize, dotColor, alignment } = attributes;
    // Custom Functions

    function onChangeHeading(newTitle) {
      setAttributes({ title: newTitle });
    }

    function onTitleColorChange(newColor) {
      setAttributes({ titleColor: newColor });
    }

    function onDotColorChange(newColor) {
      setAttributes({ dotColor: newColor });
    }

    function onChangeAlignment(newAlignment) {
      setAttributes({
        alignment: newAlignment === undefined ? 'none' : newAlignment
      });
    }

    return [
      <InspectorControls style={{ marginBottom: '40px' }}>
        <PanelBody title={'Font Color Settings'}>
          <p>
            <strong>Select a Title Color:</strong>
          </p>
          <ColorPalette value={titleColor} onChange={onTitleColorChange} />
          <p>
            <strong>Select a Dot Color:</strong>
          </p>
          <ColorPalette value={dotColor} onChange={onDotColorChange} />
        </PanelBody>
      </InspectorControls>,

      <div className='yohdev-heading-container'>
        <BlockControls>
          <AlignmentToolbar value={attributes.alignment} onChange={onChangeAlignment} />
        </BlockControls>
        <div className='content-container'>
          <RichText key='editable' tagName='h1' value={title} placeholder='Hero Heading' className='yohdev-heading' onChange={onChangeHeading} style={{ fontSize: titleSize, color: titleColor }} />
          <span className='cool-dot' style={{ backgroundColor: dotColor }}></span>
        </div>
      </div>
    ];
  },

  save: ({ attributes }) => {
    const { title, titleColor, titleSize, dotColor, alignment } = attributes;

    return (
      <div className='yohdev-heading-container'>
        <div className='content-container'>
          {title && (
            <h1 className='yohdev-heading' style={{ fontSize: titleSize, color: titleColor, textAlign: alignment }}>
              {title}
            </h1>
          )}
          {title && <span className='cool-dot' style={{ backgroundColor: dotColor }}></span>}
        </div>
      </div>
    );
  }
});
