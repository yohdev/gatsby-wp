/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	InnerBlocks,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import { PanelBody, IconButton, RangeControl } from "@wordpress/components";

import { addFilter } from "@wordpress/hooks";

// Our filter function
function setColumnsClassName(className, blockName) {
	return blockName === "core/columns" ? "row" : className;
}

// Adding the filter
wp.hooks.addFilter(
	"blocks.getBlockDefaultClassName",
	"my-plugin/set-block-custom-class-name",
	setColumnsClassName
);

function setColumnClassName(className, blockName) {
	return blockName === "core/column" ? "col-lg" : className;
}

// Adding the filter
wp.hooks.addFilter(
	"blocks.getBlockDefaultClassName",
	"my-plugin/set-block-custom-class-name",
	setColumnClassName
);

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */

const ALLOWED_BLOCKS = [
	"core/columns",
	"core/column",
	"core/heading",
	"core/paragraph",
	"core/button",
	"core/image",
	"yohdev/header",
];

const MY_TEMPLATE = [
	["yohdev/header", { placeholder: "Enter Heading..." }],
	["core/paragraph", { placeholder: "Enter Body content..." }],
	[
		"core/columns",
		{ className: "repeater-container" },
		[
			["core/column", {}],
			["core/column", {}],
			["core/column", {}],
		],
	],
	[
		"core/columns",
		{},
		[
			["core/column", {}],
			["core/column", {}],
			["core/column", {}],
		],
	],
];

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		titleColor,
		columns,
		body,
		bodyColor,
		overlayColor,
	} = attributes;
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

	return (
		<section {...useBlockProps()}>
			{
				<InspectorControls style={{ marginBottom: "40px" }}>
					<PanelBody title={"Background Options"}>
						<div style={{ marginBottom: "40px" }}>
							<p>
								<strong>Background Color:</strong>
								<ColorPalette
									value={overlayColor}
									onChange={onOverlayColorChange}
								/>
							</p>
						</div>
					</PanelBody>
					<PanelBody title={"Font Color Settings"}>
						<p>
							<strong>Select a Title Color:</strong>
						</p>
						<ColorPalette value={titleColor} onChange={onTitleColorChange} />
						<p>
							<strong>Select a Body Color:</strong>
						</p>
						<ColorPalette value={bodyColor} onChange={onBodyColorChange} />
					</PanelBody>
					<PanelBody title={"Columns Settings"}>
						<p>
							<strong>Number of Columns:</strong>
						</p>

						<RangeControl
							value={columns}
							onChange={(columns) => setAttributes({ columns })}
							min={1}
							max={6}
						/>
					</PanelBody>
				</InspectorControls>
			}
			<div
				className="card-repeater"
				style={{ backgroundColor: `${overlayColor}` }}
			>
				<div className="container">
					<InnerBlocks
						allowedBlocks={(["core/columns"], ["core/column"])}
						template={MY_TEMPLATE}
					/>
				</div>
			</div>
		</section>
	);
}
