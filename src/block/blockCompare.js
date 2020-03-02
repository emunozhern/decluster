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

registerBlockType("cgb/block-compare", {
	title: "SimpleCluster",
	icon: <FontAwesomeIcon icon="not-equal" />,
	category: "widgets",
	keywords: ["simple", "compare", "emunoz"],
	attributes: {
		cards: {
			type: "array",
			default: [
				{
					title: "Titulo ..",
					desc: "Descripcion ..",
					ahref: "/",
					isVisible: false,
					noFollow: false
				}
			]
		},

		number_cards: {
			type: "number",
			default: 1
		},

		styleCard: {
			type: "string",
			default: "home"
		},

		noFollow: {
			type: "boolean",
			default: false
		}
	},

	edit: ({ attributes, className, setAttributes }) => {
		const handleRangeControl = content => {
			setAttributes({ number_cards: content });

			const cards = [...attributes.cards];

			for (let i = 0; i < content; i++) {
				if (cards.length < content) {
					cards.push({
						title: "Titulo ..",
						desc: "Descripcion ..",
						ahref: "/",
						isVisible: false,
						noFollow: false
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

		const handleSelectControl = content => {
			setAttributes({ styleCard: content });
		};

		const handleClosedToggle = () => {
			console.log("1");
			// const cards = [...attributes.cards];
			// cards.forEach((el, index) => {
			// 	cards[index].isVisible = false;
			// });
			// setAttributes({ cards });
		};

		const handleToggleControl = () => {
			setAttributes({ hasFixedBackground: !attributes.hasFixedBackground });
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

		let cardViewDisplay;

		if (attributes.cards.length) {
			cardViewDisplay = attributes.cards.map((location, index) => {
				return (
					<Fragment key={index}>
						<div class="card">
							<div class="card-container">
								<div className="card-image">
									<div style={{ display: "inline" }}>
										<Button
											className="button button-large"
											onClick={popover => {
												handlePopoverClick(index);
											}}
										>
											<FontAwesomeIcon icon="cogs" />
										</Button>

										{attributes.cards[index].isVisible && (
											<Popover position="bottom center">
												<div class="editor-url-input block-editor-url-input">
													<TextControl
														placeholder={"Pegar url"}
														value={attributes.cards[index].ahref}
														onChange={ahref => handleaHrefChange(ahref, index)}
													/>

													<ToggleControl
														label={__("NoFolllow")}
														checked={!!attributes.cards[index].noFollow}
														onChange={() => {
															const cards = [...attributes.cards];
															cards[index].noFollow = !cards[index].noFollow;
															setAttributes({ cards });
														}}
													/>
												</div>
											</Popover>
										)}
									</div>

									<MediaUpload
										style={{ "margin-top": "10px" }}
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
								label="Numero de card"
								value={attributes.number_cards}
								onChange={handleRangeControl}
								min={1}
								max={10}
								step={1}
							></RangeControl>
						</PanelRow>

						<PanelRow>
							<SelectControl
								label="Card Estilo"
								value={attributes.styleCard}
								options={[
									{ label: "Home", value: "home" },
									{ label: "Category", value: "category" }
								]}
								onChange={handleSelectControl}
							/>
						</PanelRow>

						<ToggleControl
							label={__("NoFolllow - Global")}
							checked={!!attributes.noFollow}
							onChange={() => setAttributes({ noFollow: !attributes.noFollow })}
							help={
								!!attributes.noFollow
									? __("Aplicado NoFollow a todos los enlaces.")
									: __("Follow aplicado a todos los enlaces.")
							}
						/>
					</PanelBody>
				</InspectorControls>

				<div key="2" className={className + " album album-home text-muted"}>
					<div class="row">{cardViewDisplay}</div>
				</div>
			</Fragment>
		);
	},

	save: ({ attributes, className, setAttributes }) => {
		if (attributes.cards.length) {
			const cardViewDisplay = attributes.cards.map((card, index) => {
				let noFollow = card.noFollow
					? "nofollow noindex noopener noreferrer"
					: "";
				noFollow = attributes.noFollow
					? "nofollow noindex noopener noreferrer"
					: noFollow;

				return (
					<div class="card">
						<div class="card-container">
							<a class="card-image" href={card.ahref} rel={noFollow}>
								<img alt={card.title} title={card.title} src={card.imageUrl} />
							</a>
							<div class="card-info same" style="height: 154px;">
								<a href={card.ahref} class="card-title" rel={noFollow}>
									<h3>{card.title}</h3>
								</a>
								<p class="card-text">{card.desc}</p>
							</div>
							<a
								href={card.ahref}
								class="card-btn"
								rel={noFollow}
								style="width: 100%;"
							>
								Ver productos
							</a>
						</div>
					</div>
				);
			});

			if (attributes.styleCard == "category") {
				return (
					<div className={className + " album album-category"}>
						{/* <div class="container"> */}
						<div class="row">{cardViewDisplay}</div>
						{/* </div> */}
					</div>
				);
			}

			return (
				<div className={className + " album album-home text-muted"}>
					<div class="row">{cardViewDisplay}</div>
				</div>
			);
		}

		return null;
	}
});
