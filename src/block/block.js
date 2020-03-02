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
	TextControl
} = wp.components;

registerBlockType("cgb/block-decluster", {
	title: "decluster",
	icon: "format-image", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "widgets",
	keywords: ["decluster", "emunoz"],
	attributes: {
		cards: {
			type: "array",
			default: []
		},

		number_cards: {
			type: "number",
			default: 1
		}
	},

	edit: ({ attributes, className, setAttributes }) => {
		const handleRangeControl = content => {
			setAttributes({ number_cards: content });

			const cards = [...attributes.cards];

			for (let i = 0; i < content; i++) {
				if (cards.length < content) {
					cards.push({
						title: "",
						desc: "",
						ahref: "",
						isVisible: false
					});
				}
				if (cards.length > content) {
					cards.pop();
				}

				if (cards == content) {
					break;
				}
			}

			setAttributes({ cards });
		};

		const handleTitleChange = (title, index) => {
			const cards = [...attributes.cards];
			cards[index].title = title;
			setAttributes({ cards });
		};

		const handleDescChange = (desc, index) => {
			const cards = [...attributes.cards];
			cards[index].desc = desc;
			setAttributes({ cards });
		};

		const handleImageChange = (media, index) => {
			const cards = [...attributes.cards];
			cards[index].imageUrl = media.url;
			setAttributes({ cards });
		};

		const handleaHrefChange = (ahref, index) => {
			const cards = [...attributes.cards];
			cards[index].ahref = ahref;
			setAttributes({ cards });
		};

		const handlePopoverClick = index => {
			const cards = [...attributes.cards];
			cards[index].isVisible = !cards[index].isVisible;
			setAttributes({ cards });
		};

		let cardViewDisplay;

		const getImageButton = (openEvent, index) => {
			const cards = [...attributes.cards];

			if (cards[index].imageUrl) {
				return (
					<img
						src={cards[index].imageUrl}
						onClick={openEvent}
						className="image"
					/>
				);
			} else {
				return (
					<Button onClick={openEvent} className="button button-large">
						<FontAwesomeIcon icon="image" />
					</Button>
				);
			}
		};

		if (attributes.cards.length) {
			cardViewDisplay = attributes.cards.map((location, index) => {
				return (
					<Fragment key={index}>
						<div class="card">
							<div class="card-container">
								<div className="card-image">
									{/* <Button
										className="button button-large"
										onClick={popover => {
											handlePopoverClick(index);
										}}
									>
										<FontAwesomeIcon icon="cogs" />
										{attributes.cards[index].isVisible && (
											<Popover position="bottom center">
												<RichText
													placeholder={"URL " + index}
													value={attributes.cards[index].ahref}
													onChange={ahref => handleaHrefChange(ahref, index)}
												/>
											</Popover>
										)}
									</Button> */}

									<MediaUpload
										onSelect={media => handleImageChange(media, index)}
										type="image"
										value={attributes.cards[index].imageID}
										render={({ open }) => getImageButton(open, index)}
									/>
								</div>

								<div class="card-info same">
									<div class="card-title">
										<RichText
											tagName="h3"
											placeholder={"Titulo " + index}
											value={attributes.cards[index].title}
											onChange={title => handleTitleChange(title, index)}
										/>
									</div>

									<TextControl
										placeholder={"URL " + index}
										value={attributes.cards[index].ahref}
										onChange={ahref => handleaHrefChange(ahref, index)}
									/>
									<RichText
										className="card-text"
										tagName="p"
										placeholder={"Ingrese una descripcion "}
										value={attributes.cards[index].desc}
										onChange={desc => handleDescChange(desc, index)}
									/>
								</div>

								<div class="card-btn" onClick={() => console.log(attributes)}>
									Ver productos
								</div>
							</div>
						</div>
					</Fragment>
				);
			});
		}

		return (
			<Fragment>
				<InspectorControls key="1">
					<PanelBody title="Form Settings" initialOpen={true}>
						<PanelRow>
							<RangeControl
								value={attributes.number_cards}
								onChange={handleRangeControl}
								min={1}
								max={10}
								step={1}
							></RangeControl>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				<div key="2" className={className + " album album-home text-muted"}>
					<div class="row">{cardViewDisplay}</div>
				</div>
			</Fragment>
		);
	},

	save: ({ attributes, className, setAttributes }) => {
		const cardViewDisplay = attributes.cards.map((card, index) => {
			return (
				<div class="card">
					<div class="card-container">
						<a class="card-image" href={card.ahref}>
							<img alt={card.title} title={card.title} src={card.imageUrl} />
						</a>
						<div class="card-info same" style="height: 154px;">
							<a href={card.ahref} class="card-title">
								<h3>{card.title}</h3>
							</a>
							<p class="card-text">{card.desc}</p>
						</div>
						<a href={card.ahref} class="card-btn">
							Ver productos
						</a>
					</div>
				</div>
			);
		});

		return (
			<div className={className + " album album-home text-muted"}>
				<div class="row">{cardViewDisplay}</div>
			</div>
		);
	}
});

registerBlockType("cgb/block-amazon", {
	title: "Cluster Interno",
	icon: "dashicons-welcome-widgets-menus", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "widgets",
	keywords: ["amazon", "emunoz"],
	attributes: {
		cards: {
			type: "array",
			default: []
		},

		number_cards: {
			type: "number",
			default: 1
		}
	},

	edit: ({ attributes, className, setAttributes }) => {
		const handleRangeControl = content => {
			setAttributes({ number_cards: content });

			const cards = [...attributes.cards];

			for (let i = 0; i < content; i++) {
				if (cards.length < content) {
					cards.push({
						title: "",
						desc: "",
						ahref: "",
						isVisible: false
					});
				}
				if (cards.length > content) {
					cards.pop();
				}

				if (cards == content) {
					break;
				}
			}

			setAttributes({ cards });
		};

		const handleTitleChange = (title, index) => {
			const cards = [...attributes.cards];
			cards[index].title = title;
			setAttributes({ cards });
		};

		const handleDescChange = (desc, index) => {
			const cards = [...attributes.cards];
			cards[index].desc = desc;
			setAttributes({ cards });
		};

		const handleImageChange = (media, index) => {
			const cards = [...attributes.cards];
			cards[index].imageUrl = media.url;
			setAttributes({ cards });
		};

		const handleaHrefChange = (ahref, index) => {
			const cards = [...attributes.cards];
			cards[index].ahref = ahref;
			setAttributes({ cards });
		};

		const handlePopoverClick = index => {
			const cards = [...attributes.cards];
			cards[index].isVisible = !cards[index].isVisible;
			setAttributes({ cards });
		};

		let cardViewDisplay;

		const getImageButton = (openEvent, index) => {
			const cards = [...attributes.cards];

			if (cards[index].imageUrl) {
				return (
					<img
						src={cards[index].imageUrl}
						onClick={openEvent}
						className="image"
					/>
				);
			} else {
				return (
					<Button onClick={openEvent} className="button button-large">
						<FontAwesomeIcon icon="image" />
					</Button>
				);
			}
		};

		if (attributes.cards.length) {
			cardViewDisplay = attributes.cards.map((location, index) => {
				return (
					<Fragment key={index}>
						<div class="card">
							<div class="card-container">
								<div className="card-image">
									{/* <Button
										className="button button-large"
										onClick={popover => {
											handlePopoverClick(index);
										}}
									>
										<FontAwesomeIcon icon="cogs" />
										{attributes.cards[index].isVisible && (
											<Popover position="bottom center">
												<RichText
													placeholder={"URL " + index}
													value={attributes.cards[index].ahref}
													onChange={ahref => handleaHrefChange(ahref, index)}
												/>
											</Popover>
										)}
									</Button> */}

									<MediaUpload
										onSelect={media => handleImageChange(media, index)}
										type="image"
										value={attributes.cards[index].imageID}
										render={({ open }) => getImageButton(open, index)}
									/>
								</div>

								<div class="card-info same">
									<div class="card-title">
										<RichText
											tagName="h3"
											placeholder={"Titulo " + index}
											value={attributes.cards[index].title}
											onChange={title => handleTitleChange(title, index)}
										/>
									</div>

									<TextControl
										placeholder={"URL " + index}
										value={attributes.cards[index].ahref}
										onChange={ahref => handleaHrefChange(ahref, index)}
									/>
									<RichText
										className="card-text"
										tagName="p"
										placeholder={"Ingrese una descripcion "}
										value={attributes.cards[index].desc}
										onChange={desc => handleDescChange(desc, index)}
									/>
								</div>

								<div class="card-btn" onClick={() => console.log(attributes)}>
									Ver productos
								</div>
							</div>
						</div>
					</Fragment>
				);
			});
		}

		return (
			<Fragment>
				<InspectorControls key="1">
					<PanelBody title="Form Settings" initialOpen={true}>
						<PanelRow>
							<RangeControl
								value={attributes.number_cards}
								onChange={handleRangeControl}
								min={1}
								max={10}
								step={1}
							></RangeControl>
						</PanelRow>
					</PanelBody>
				</InspectorControls>

				<div key="2" className={className + " album album-home text-muted"}>
					<div class="row">{cardViewDisplay}</div>
				</div>
			</Fragment>
		);
	},

	save: ({ attributes, className, setAttributes }) => {
		const cardViewDisplay = attributes.cards.map((card, index) => {
			return (
				<div class="card">
					<div class="card-container">
						<a
							class="card-image"
							href={card.ahref}
							rel="nofollow noindex noopener noreferrer"
							target="_blank"
						>
							<img alt={card.title} title={card.title} src={card.imageUrl} />
						</a>
						<div class="card-info same" style="height: 154px;">
							<a
								href={card.ahref}
								rel="nofollow noindex noopener noreferrer"
								target="_blank"
								class="card-title"
							>
								<h3>{card.title}</h3>
							</a>
							<p class="card-text">{card.desc}</p>
						</div>
						<a
							href={card.ahref}
							rel="nofollow noindex noopener noreferrer"
							target="_blank"
							class="card-btn"
							style="width: 100%"
						>
							Ver productos
						</a>
					</div>
				</div>
			);
		});

		return (
			<div className={className + " album album-category"}>
				<div class="container">
					<div class="row">{cardViewDisplay}</div>
				</div>
			</div>
		);
	}
});
