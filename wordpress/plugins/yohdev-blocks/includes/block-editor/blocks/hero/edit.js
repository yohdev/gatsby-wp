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
	"core/button",
	"core/heading",
	"core/paragraph",
	"yohdev/gutenberg-header",
];

const MY_TEMPLATE = [
	[
		"core/columns",
		{ columns: 2 },
		[
			[
				"core/column",
				{
					className: false,
					placeholder:
						"This is a spacer block to put content on left or right side.",
				},
			],
			[
				"core/column",
				{ className: "content" },
				[
					["core/heading", { placeholder: "Enter heading..." }],
					["core/paragraph", { placeholder: "Enter body..." }],
					["core/button", { align: "left" }],
				],
			],
		],
	],
];

export default function Edit({ attributes, setAttributes }) {
	const {
		title,
		body,
		titleColor,
		bodyColor,
		backgroundImage,
		overlayColor,
		overlayOpacity,
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

	function onSelectImage(newImage) {
		setAttributes({ backgroundImage: newImage.sizes.full.url });
	}

	function onOverlayColorChange(newColor) {
		setAttributes({ overlayColor: newColor });
	}

	function onOverlayOpacityChange(newOpacity) {
		setAttributes({ overlayOpacity: newOpacity });
	}

	return (
		<section {...useBlockProps()}>
			{
				<InspectorControls style={{ marginBottom: "40px" }}>
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
					<PanelBody title={"Background Image Options"}>
						<p>
							<strong>Select a Background Image:</strong>
						</p>
						<MediaUpload
							onSelect={onSelectImage}
							type="image"
							value={backgroundImage}
							render={({ open }) => (
								<IconButton
									className="editor-media-placeholder__button is-button is-default is-large"
									icon="upload"
									onClick={open}
								>
									Background Image
								</IconButton>
							)}
						/>
						<div
							style={{
								marginTop: "20px",
								marginBottom: "40px",
							}}
						>
							<p>
								<strong>Overlay Color:</strong>
								<ColorPalette
									value={overlayColor}
									onChange={onOverlayColorChange}
								/>
							</p>
						</div>
						<RangeControl
							label={"Overlay Opacity"}
							value={overlayOpacity}
							onChange={onOverlayOpacityChange}
							min={0}
							max={1}
							step={0.05}
						/>
					</PanelBody>
				</InspectorControls>
			}
			<div
				className="hero"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<div
					className="overlay"
					style={{
						backgroundColor: `${overlayColor}`,
						opacity: `${overlayOpacity}`,
					}}
				></div>
				<div className="container hero-container py-5">
					<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={MY_TEMPLATE} />
				</div>
			</div>
		</section>
	);
}
