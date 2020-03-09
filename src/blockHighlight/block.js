import "./editor.scss";
import "./style.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, fas);

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { InspectorControls, RichText, MediaUpload, PlainText } = wp.editor;
const {
	PanelBody,
	PanelRow,
	RangeControl,
	Button,
	Popover,
	TextControl,
	SelectControl,
	ToggleControl
} = wp.components;

registerBlockType("cgb/block-highlight", {
	title: "SimpleDestacado",
	icon: <FontAwesomeIcon icon="highlighter" />,
	category: "widgets",
	keywords: ["simple", "destacado", "highlight", "emunoz"],
	attributes: {
		title: {
			source: "text",
			selector: ".product-title"
		},
		body: {
			type: "array",
			source: "children",
			selector: ".product-desc"
		},
		imageAlt: {
			attribute: "alt",
			selector: ".image-size"
		},
		imageUrl: {
			attribute: "src",
			selector: ".image-size"
		},
		noFollow: {
			type: "boolean",
			default: false
		},
		isVisible: {
			type: "boolean",
			default: false
		},
		ahref: {
			type: "string",
			default: "/"
		}
	},
	edit({ attributes, className, setAttributes }) {
		const getImageButton = openEvent => {
			if (attributes.imageUrl) {
				return (
					<img
						src={attributes.imageUrl}
						onClick={openEvent}
						className="image-size"
					/>
				);
			} else {
				return (
					<Fragment>
						<div
							onClick={openEvent}
							class="components-placeholder"
							style={{ "margin-top": "10px" }}
						>
							<div class="components-placeholder__label">Sin Imagen</div>
							<div class="components-placeholder__fieldset"></div>
						</div>
					</Fragment>
				);
			}
		};

		return (
			<div className="product-hightlight">
				<div style={{ display: "block", "text-align": "center" }}>
					<Button
						className="button button-large"
						onClick={el => setAttributes({ isVisible: !attributes.isVisible })}
					>
						<FontAwesomeIcon icon="tasks" />
					</Button>

					{attributes.isVisible && (
						<Popover
							position="bottom center"
							onFocusOutside={popover => setAttributes({ isVisible: false })}
						>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									padding: "10px"
								}}
							>
								<TextControl
									onChange={content => setAttributes({ ahref: content })}
									value={attributes.ahref}
								/>

								<ToggleControl
									label={__("NoFolllow")}
									checked={!!attributes.noFollow}
									onChange={() => {
										setAttributes({ noFollow: !attributes.noFollow });
									}}
								/>
							</div>
						</Popover>
					)}
				</div>

				<div class="image-left">
					<MediaUpload
						className="image-size"
						style={{ "margin-top": "10px" }}
						onSelect={media => {
							setAttributes({ imageAlt: media.alt, imageUrl: media.url });
						}}
						type="image"
						value={attributes.imageID}
						render={({ open }) => getImageButton(open)}
					/>
				</div>

				<div class="content">
					<RichText
						className="product-title"
						onChange={content => setAttributes({ title: content })}
						value={attributes.title}
						placeholder="Titulo"
					/>

					<RichText
						className="product-desc"
						onChange={content => setAttributes({ body: content })}
						value={attributes.body}
						multiline="li"
						placeholder="Contenido"
						formattingControls={["bold", "italic", "underline"]}
						isSelected={attributes.isSelected}
					/>
				</div>
			</div>
		);
	},

	save({ attributes }) {
		const cardImage = (src, alt) => {
			if (!src) return null;

			if (alt) {
				return <img className="image-size" src={src} alt={alt} />;
			}

			return <img className="image-size" src={src} alt="" />;
		};

		let noFollow = attributes.noFollow
			? "nofollow noindex noopener noreferrer"
			: "";

		return (
			<div className="product-hightlight">
				<a className="image-left" href={attributes.ahref} rel={noFollow}>
					{cardImage(attributes.imageUrl, attributes.title)}
				</a>

				<div className="content">
					<a className="product-title" href={attributes.ahref} rel={noFollow}>
						{attributes.title}
					</a>

					<ul className="product-desc">{attributes.body}</ul>
				</div>
			</div>
		);
	}
});
