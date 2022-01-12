const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, InnerBlocks } = wp.editor;
const { PanelBody, IconButton, RangeControl } = wp.components;
const ALLOWED_BLOCKS = ['core/button', 'core/heading', 'core/paragraph', 'yohdev/gutenberg-header'];

import './blocks/header/';
import './blocks/iwt/';
import './blocks/cardRepeater/';
import './blocks/capableCard/';
import './blocks/cta/';
import './blocks/hero/';
