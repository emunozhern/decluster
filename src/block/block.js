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
		cards: {
			source: "query",
			default: [],
			selector: ".card",
			query: {
				title: {
					type: "string",
					source: "text",
					selector: "h3"
				}
			}
		},

		number_cards: {
			type: "number",
			default: 1
		},
		imageAlt: {
			attribute: "alt",
			selector: ".card__image"
		},
		imageUrl: {
			attribute: "src",
			selector: ".card__image"
		}
	},

	edit: ({ attributes, className, setAttributes }) => {
		const { cards } = attributes;

		console.log(cards);

		function onChangeTitle() {
			// setAttributes({ number_cards: content });
		}

		const displayCards = cards => {
			return (
				//Loops throug the cards
				cards.map((card, i) => {
					return (
						<div class="card">
							<div class="card-container"></div>

							<div class="card-info same">
								<div class="card-title">
									<RichText
										tagName="h3"
										placeholder={"Titulo " + i}
										value={card.title}
										onChange={e => {
											// var newObject = Object.assign({}, card, {
											// 	title: e
											// });
											// var attrs = {};
											// attrs[key] = e;
											// props.setAttributes(attrs);
											const newItem = { ...card, title: e };
											const newItems = [...cards];
											newItems[i] = newItem;
											setAttributes({ cards: newItems });

											// return setAttributes({
											// 	cards: [].concat(
											// 		_cloneArray(
											// 			attributes.cards.filter(function(cardFilter) {
											// 				return cardFilter.index != card.index;
											// 			})
											// 		),
											// 		[card]
											// 	)
											// });
										}}
									/>
								</div>
							</div>

							<div class="card-btn" onClick={() => console.log(attributes)}>
								Ver productos
							</div>
						</div>
					);
				})
			);
		};
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
		// 				// value={props.attributes.desc}
		// 				// onChange={content => setAttributes({ desc })}
		// 			/> */}
		// 		</div>

		// 		<div class="card-btn" onClick={() => console.log(attributes)}>
		// 			Ver productos
		// 		</div>
		// 	</div>
		// </div>

		function _cloneArray(arr) {
			if (Array.isArray(arr)) {
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
					arr2[i] = arr[i];
				}
				return arr2;
			} else {
				return Array.from(arr);
			}
		}

		function onChangeRangeControl(content) {
			setAttributes({ number_cards: content });

			// setAttributes({ cards: Array(content).fill({ title: "", desc: "" }) });

			// console.log("number_cards " + content);
			let cards = attributes.cards;
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

			setAttributes({ cards: cards });

			// console.log(cards);
		}

		const getImageButton = openEvent => {
			if (attributes.imageUrl) {
				return (
					<img
						src={attributes.imageUrl}
						onClick={openEvent}
						className="image"
					/>
				);
			} else {
				return (
					<div className="button-container">
						<Button onClick={openEvent} className="button button-large">
							Pick an image
						</Button>
					</div>
				);
			}
		};

		return (
			<Fragment>
				<div class="album album-home text-muted">
					<div class="row">
						<h1>1</h1>
						{displayCards(attributes.cards)}
					</div>
				</div>

				<InspectorControls>
					<PanelBody title="Form Settings" initialOpen={true}>
						<PanelRow>
							<RangeControl
								value={attributes.number_cards}
								onChange={onChangeRangeControl}
								min={1}
								max={10}
								step={1}
							></RangeControl>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: props => {
		return null;
	}
});
