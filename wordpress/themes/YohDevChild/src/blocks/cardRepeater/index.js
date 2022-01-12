const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, InnerBlocks, BlockControls, AlignmentToolbar } = wp.editor;
const { PanelBody, IconButton, RangeControl } = wp.components;
const ALLOWED_BLOCKS = ['core/columns', 'core/column', 'core/heading', 'core/paragraph', 'core/button', 'core/image', 'yohdev/gutenberg-header'];

const MY_TEMPLATE = [
  ['yohdev/gutenberg-header', { placeholder: 'Enter Heading...' }],
  ['core/paragraph', { placeholder: 'Enter Body content...' }],
  [
    'core/columns',
    { className: 'repeater-container' },
    [
      ['core/column', {}],
      ['core/column', {}],
      ['core/column', {}]
    ]
  ],
  [
    'core/columns',
    {},
    [
      ['core/column', {}],
      ['core/column', {}],
      ['core/column', {}]
    ]
  ]
];

registerBlockType('yohdev/gutenberg-card-repeater', {
  // Built in attributes

  title: 'Gutenburg - Card Repeater',
  description: 'Container block that holds repeatable cards.',
  icon: 'format-image',
  category: 'layout',

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

    bodyColor: {
      type: 'string',
      default: 'black'
    },

    columns: {
      type: 'number',
      default: 3
    },

    overlayColor: {
      type: 'string',
      default: 'none'
    }
  },

  // Built in functions

  edit: ({ attributes, setAttributes }) => {
    const { title, titleColor, columns, body, bodyColor, overlayColor } = attributes;
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

    function onOverlayColorChange(newColor) {
      setAttributes({ overlayColor: newColor });
    }

    return [
      <InspectorControls style={{ marginBottom: '40px' }}>
        <PanelBody title={'Background Options'}>
          <div style={{ marginBottom: '40px' }}>
            <p>
              <strong>Background Color:</strong>
              <ColorPalette value={overlayColor} onChange={onOverlayColorChange} />
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
        <PanelBody title={'Columns Settings'}>
          <p>
            <strong>Number of Columns:</strong>
          </p>

          <RangeControl value={columns} onChange={columns => setAttributes({ columns })} min={1} max={6} />
        </PanelBody>
      </InspectorControls>,
      <section className='card-repeater' style={{ backgroundColor: `${overlayColor}` }}>
        <div className='container'>
          <InnerBlocks allowedBlocks={(['core/columns'], ['core/column'])} template={MY_TEMPLATE} />
        </div>
      </section>
    ];
  },

  save: ({ attributes }) => {
    const { title, titleColor, overlayColor, body, bodyColor } = attributes;

    return (
      <section className='card-repeater' style={{ backgroundColor: `${overlayColor}` }}>
        <div className='container'>
          <InnerBlocks.Content />
        </div>
      </section>
    );
  }
});
