import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { InspectorControls, RichText } = wp.editor;
const { PanelBody, PanelRow, RangeControl } = wp.components;

registerBlockType("cgb/block-decluster", {
	title: "decluster",
	icon: "format-image", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "widgets",
	keywords: ["decluster", "emunoz"],
	attributes: {
		// title: {
		//   type: "string",

		//   source: "html",

		//   selector: "h3"
		// },
		// desc: {
		//   type: "string",

		//   source: "html",

		//   selector: "p"
		// },
		card: {},
		number_cards: {
			type: "number",
			default: 1
		}
	},

	edit: props => {
		const { number_cards } = props.attributes;
		let card_list = [];

		for (var i = 0; i < number_cards; i++) {
			card_list.push(
				<div class="card">
					<div class="card-container">
						<div class="card-image" href="/proteinas-isoladas">
							<div className="components-placeholder">
								<div className="components-placeholder__label">No image</div>
								<div className="components-placeholder__fieldset"></div>
							</div>
						</div>

						<div class="card-info same">
							<div class="card-title">
								<RichText
									tagName="h3"
									//   value={props.attributes.title}
									placeholder={"Titulo "}
									//   onChange={content => setAttributes({ title })}
								/>
							</div>

							<RichText
								className="card-text"
								tagName="p"
								// value={props.attributes.desc}
								placeholder={"Ingrese una descripcion "}
								// onChange={content => setAttributes({ desc })}
							/>
						</div>

						<div class="card-btn">Ver productos</div>
					</div>
				</div>
			);
		}

		function onChangeNumberCards(number) {
			console.log(number);

			props.setAttributes({ number_cards: number });
		}

		return (
			<Fragment>
				<div class="album album-home text-muted">
					<div class="row">{card_list}</div>
				</div>

				<InspectorControls>
					<PanelBody title="Form Settings" initialOpen={true}>
						<PanelRow>
							<RangeControl
								value={number_cards}
								onChange={onChangeNumberCards}
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
		return (
			<div className={props.className}>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>decluster</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{" "}
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>
					.
				</p>
			</div>
		);
	}
});
