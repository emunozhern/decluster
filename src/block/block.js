import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { InspectorControls, RichText, MediaUpload, PlainText } = wp.editor;
const { PanelBody, PanelRow, RangeControl, Button } = wp.components;

registerBlockType("cgb/block-decluster", {
	title: "decluster",
	icon: "format-image", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "widgets",
	keywords: ["decluster", "emunoz"],
	attributes: {
		// cards: {
		// 	source: "query",
		// 	default: [],
		// 	selector: ".card",
		// 	query: {
		// 		title: {
		// 			type: "string",
		// 			source: "text",
		// 			selector: "h3"
		// 		}
		// 	}
		// },

		cards: {
			type: "array",
			default: []
		},

		number_cards: {
			type: "number",
			default: 1
		}
		// imageAlt: {
		// 	attribute: "alt",
		// 	selector: ".card__image"
		// },
		// imageUrl: {
		// 	attribute: "src",
		// 	selector: ".card__image"
		// }
	},

	edit: ({ attributes, className, setAttributes }) => {
		const handleRangeControl = content => {
			setAttributes({ number_cards: content });

			const cards = [...attributes.cards];

			for (let i = 0; i < content; i++) {
				if (cards.length < content) {
					cards.push({
						title: ""
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

		let cardViewDisplay;
		// const { cards } = attributes;

		// console.log(cards);

		// function onChangeTitle() {
		// setAttributes({ number_cards: content });
		// }

		// const displayCards = cards => {
		// 	return (
		// 		//Loops throug the cards
		// 		cards.map((card, i) => {
		// 			return (
		//
		// 			);
		// 		})
		// 	);
		// };

		//
		// 		<div class="card-image">
		// 			{/*
		// 			<MediaUpload
		// 				onSelect={media => {
		// 					setAttributes({ imageAlt: media.alt, imageUrl: media.url });
		// 				}}
		// 				type="image"
		// 				value={attributes.imageID}
		// 				render={({ open }) => getImageButton(open)}
		// 			/>
		//         */}
		// 		</div>

		// 		<div class="card-info same">
		// 			<div class="card-title">
		// 				<RichText
		// 					tagName="h3"
		// 					value={attributes.slides[i].title}
		// 					// onChange={setContent}
		// 					// value={attributes.title}
		// 					// placeholder={attributes.title}
		// 					// placeholder={" "}
		// 					// onChange={content => setAttributes({ content })}
		// 				/>
		// 			</div>

		// 			{/* <RichText
		// 				className="card-text"
		// 				tagName="p"
		// 				placeholder={"Ingrese una descripcion "}
		// 				// value={attributes.desc}
		// 				// onChange={content => setAttributes({ desc })}
		// 			/> */}
		// 		</div>

		// 		<div class="card-btn" onClick={() => console.log(attributes)}>
		// 			Ver productos
		// 		</div>
		// 	</div>
		// </div>

		// function _cloneArray(arr) {
		// 	if (Array.isArray(arr)) {
		// 		for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
		// 			arr2[i] = arr[i];
		// 		}
		// 		return arr2;
		// 	} else {
		// 		return Array.from(arr);
		// 	}
		// }

		// 	setAttributes({ cards: cards });

		// 	// console.log(cards);
		// }

		// const getImageButton = openEvent => {
		// 	if (attributes.imageUrl) {
		// 		return (
		// 			<img
		// 				src={attributes.imageUrl}
		// 				onClick={openEvent}
		// 				className="image"
		// 			/>
		// 		);
		// 	} else {
		// 		return (
		// 			<div className="button-container">
		// 				<Button onClick={openEvent} className="button button-large">
		// 					Pick an image
		// 				</Button>
		// 			</div>
		// 		);
		// 	}
		// };

		if (attributes.cards.length) {
			cardViewDisplay = attributes.cards.map((location, index) => {
				return (
					<Fragment key={index}>
						<div class="card">
							<div class="card-container"></div>

							<div class="card-info same">
								<div class="card-title">
									<RichText
										tagName="h3"
										placeholder={"Titulo " + index}
										value={attributes.cards[index].title}
										onChange={title => handleTitleChange(title, index)}
									/>
								</div>
							</div>

							<div class="card-btn" onClick={() => console.log(attributes)}>
								Ver productos
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
			return <h4 key={index}>{card.title}</h4>;
		});

		return (
			<div className={className + " album album-home text-muted"}>
				<h2>Cards</h2>
				{cardViewDisplay}
			</div>
		);
	}
});
