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

registerBlockType("cgb/block-table-comparation", {
	title: "TableComparation",
	icon: <FontAwesomeIcon icon="table" />,
	category: "widgets",
	keywords: ["simple", "tabla", "compare", "emunoz"],
	attributes: {
		tables: {
			type: "array",
			default: [
				{
					body1: "Descripción...",
					body2: "Descripción...",
					body3: "Descripción...",
					body: "Descripción...",
					li1: "Descripción...",
					li2: "Descripción...",
					li3: "Descripción...",
					name: "Nombre...",
					ahref: "/",
					imageUrl: null,
					noFollow: false
				}
			]
		},
		headTables: {
			type: "array",
			default: [
				{
					head: "Titulo...",
					style: "text1"
				}
			]
		},
		numTables: {
			type: "number",
			default: 1
		},
		numHeadTables: {
			type: "number",
			default: 1
		},
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
		const getImageButton = (openEvent, index) => {
			if (attributes.tables[index].imageUrl) {
				return (
					<img
						src={attributes.tables[index].imageUrl}
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

		let showTablesDisplay;

		showTablesDisplay = attributes.tables.map((table, index) => {
			let showHeadTableDisplay = attributes.headTables.map((head, jndex) => {
				let content;

				content = (
					<RichText
						onChange={content => {
							const tables = [...attributes.tables];
							tables[index].body1 = content;
							setAttributes({
								tables
							});
						}}
						value={attributes.tables[index].body1}
						multiline="p"
						placeholder="p"
						formattingControls={["bold", "italic", "underline"]}
						isSelected={attributes.tables[index].isSelected}
					/>
				);

				if (attributes.headTables[jndex].style == "text2") {
					content = (
						<RichText
							onChange={content => {
								const tables = [...attributes.tables];
								tables[index].body2 = content;
								setAttributes({
									tables
								});
							}}
							value={attributes.tables[index].body2}
							multiline="p"
							placeholder="p"
							formattingControls={["bold", "italic", "underline"]}
							isSelected={attributes.tables[index].isSelected}
						/>
					);
				}

				if (attributes.headTables[jndex].style == "text3") {
					content = (
						<RichText
							onChange={content => {
								const tables = [...attributes.tables];
								tables[index].body3 = content;
								setAttributes({
									tables
								});
							}}
							value={attributes.tables[index].body3}
							multiline="p"
							placeholder="p"
							formattingControls={["bold", "italic", "underline"]}
							isSelected={attributes.tables[index].isSelected}
						/>
					);
				}

				if (attributes.headTables[jndex].style == "name") {
					content = (
						<RichText
							onChange={content => {
								const tables = [...attributes.tables];
								tables[index].name = content;
								setAttributes({
									tables
								});
							}}
							value={attributes.tables[index].name}
							placeholder="Nombre..."
							formattingControls={["bold", "italic", "underline"]}
							isSelected={attributes.tables[index].isSelected}
						/>
					);
				}

				if (attributes.headTables[jndex].style == "li1") {
					content = (
						<ul>
							<RichText
								onChange={content => {
									const tables = [...attributes.tables];
									tables[index].li1 = content;
									setAttributes({
										tables
									});
								}}
								value={attributes.tables[index].li1}
								multiline="li"
								placeholder="li"
								formattingControls={["bold", "italic", "underline"]}
								isSelected={attributes.tables[index].isSelected}
							/>
						</ul>
					);
				}

				if (attributes.headTables[jndex].style == "li2") {
					content = (
						<ul>
							<RichText
								onChange={content => {
									const tables = [...attributes.tables];
									tables[index].li2 = content;
									setAttributes({
										tables
									});
								}}
								value={attributes.tables[index].li2}
								multiline="li"
								placeholder="li"
								formattingControls={["bold", "italic", "underline"]}
								isSelected={attributes.tables[index].isSelected}
							/>
						</ul>
					);
				}

				if (attributes.headTables[jndex].style == "li3") {
					content = (
						<ul>
							<RichText
								onChange={content => {
									const tables = [...attributes.tables];
									tables[index].li3 = content;
									setAttributes({
										tables
									});
								}}
								value={attributes.tables[index].li3}
								multiline="li"
								placeholder="li"
								formattingControls={["bold", "italic", "underline"]}
								isSelected={attributes.tables[index].isSelected}
							/>
						</ul>
					);
				}

				if (attributes.headTables[jndex].style == "image") {
					content = (
						<MediaUpload
							className="image-size"
							style={{
								"margin-top": "10px"
							}}
							onSelect={media => {
								const tables = [...attributes.tables];
								tables[index].imageUrl = media.url;
								setAttributes({
									tables
								});
							}}
							type="image"
							value={attributes.tables[index].imageID}
							render={({ open }) => getImageButton(open, index)}
						/>
					);
				}
				return (
					<div class="row">
						<div class="cell">
							<RichText
								onChange={content => {
									const headTables = [...attributes.headTables];
									headTables[jndex].head = content;
									setAttributes({
										headTables
									});
								}}
								value={attributes.headTables[jndex].head}
								placeholder="Titulo"
							/>
						</div>
						<div class="cell">
							<SelectControl
								label="Tipo"
								value={attributes.headTables[jndex].style}
								options={[
									{ label: "Texto1", value: "text1" },
									{ label: "Texto2", value: "text2" },
									{ label: "Texto3", value: "text3" },
									{ label: "Imagen", value: "image" },
									{ label: "Nombre", value: "name" },
									{ label: "Lista 1", value: "li1" },
									{ label: "Lista 2", value: "li2" },
									{ label: "Lista 3", value: "li3" },
								]}
								onChange={content => {
									// console.log(attributes.tables.length);
									const headTables = [...attributes.headTables];
									headTables[jndex].style = content;
									setAttributes({ headTables });
								}}
							/>

							{content}
						</div>
					</div>
				);
			});

			return (
				<div className="table-comparison">
					<div style={{ display: "block", "text-align": "center" }}>
						<Button
							className="button button-large"
							onClick={el => {
								const tables = [...attributes.tables];
								tables[index].isVisible = !tables[index].isVisible;
								setAttributes({ tables });
							}}
						>
							<FontAwesomeIcon icon="tasks" />
						</Button>

						{attributes.tables[index].isVisible && (
							<Popover
								position="bottom center"
								onFocusOutside={el => {
									const tables = [...attributes.tables];
									tables[index].isVisible = false;
									setAttributes({ tables });
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										padding: "10px"
									}}
								>
									<TextControl
										onChange={el => {
											const tables = [...attributes.tables];
											tables[index].ahref = el;
											setAttributes({ tables });
										}}
										value={attributes.ahref}
									/>

									<ToggleControl
										label={__("NoFolllow")}
										checked={!!attributes.tables[index].noFollow}
										onChange={el => {
											const tables = [...attributes.tables];
											tables[index].noFollow = !attributes.tables[index]
												.noFollow;
											setAttributes({ tables });
										}}
									/>
								</div>
							</Popover>
						)}
					</div>
					{showHeadTableDisplay}
				</div>
			);
		});

		return (
			<Fragment>
				<InspectorControls key="1">
					<PanelBody title="Form Settings" initialOpen={true}>
						<PanelRow>
							<RangeControl
								label="Tablas"
								value={attributes.numTables}
								onChange={el => {
									setAttributes({ numTables: el });
									const tables = [...attributes.tables];

									for (let i = 0; i < el; i++) {
										if (tables.length < el) {
											tables.push({
												body1: "Descripción...",
												body2: "Descripción...",
												body3: "Descripción...",
												li1: "Descripción...",
												li2: "Descripción...",
												li3: "Descripción...",
												name: "Nombre...",
												ahref: "/",
												imageUrl: null,
												noFollow: false
											});
										}

										if (tables.length > el) {
											tables.pop();
										}

										if (tables == el) {
											break;
										}
									}

									setAttributes({ tables });
								}}
								min={1}
								max={100}
								step={1}
							></RangeControl>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label="Head tablas"
								value={attributes.numHeadTables}
								onChange={el => {
									setAttributes({ numHeadTables: el });
									const headTables = [...attributes.headTables];

									for (let i = 0; i < el; i++) {
										if (headTables.length < el) {
											headTables.push({
												head: "Titulo...",
												style: "text1"
											});
										}

										if (headTables.length > el) {
											headTables.pop();
										}

										if (headTables == el) {
											break;
										}
									}

									setAttributes({ headTables });
								}}
								min={1}
								max={100}
								step={1}
							></RangeControl>
						</PanelRow>

						{/* <ToggleControl
							label={__("NoFolllow - Global")}
							checked={!!attributes.noFollow}
							onChange={() => setAttributes({ noFollow: !attributes.noFollow })}
						/> */}
					</PanelBody>
				</InspectorControls>

				<Fragment>{showTablesDisplay}</Fragment>
			</Fragment>
		);
	},

	save({ attributes }) {
		if (attributes.tables.length) {
			console.log("save");
			const showMobileTable = attributes.tables.map((table, index) => {
				let noFollow = attributes.tables[index].noFollow
					? "nofollow noindex noopener noreferrer"
					: noFollow;

				let showHeadTableDisplay;
				showHeadTableDisplay = attributes.headTables.map((head, jndex) => {
					let content;

					content = <RichText.Content value={attributes.tables[index].body1} />;

					if (attributes.headTables[jndex].style == "text2") {
						content = <RichText.Content value={attributes.tables[index].body2} />;
					}
					if (attributes.headTables[jndex].style == "text3") {
						content = (
							<RichText.Content value={attributes.tables[index].body3} />
						);
					}

					if (attributes.headTables[jndex].style == "name") {
						content = (
							<a href={attributes.tables[index].ahref} rel={noFollow}>
								{attributes.tables[index].name}
							</a>
						);
					}

					if (attributes.headTables[jndex].style == "li1") {
						content = (
							<ul>
								<RichText.Content value={attributes.tables[index].li1} />
							</ul>
						);
					}

					if (attributes.headTables[jndex].style == "li2") {
						content = (
							<ul>
								<RichText.Content value={attributes.tables[index].li2} />
							</ul>
						);
					}

					if (attributes.headTables[jndex].style == "li3") {
						content = (
							<ul>
								<RichText.Content value={attributes.tables[index].li3} />
							</ul>
						);
					}

					if (attributes.headTables[jndex].style == "image") {
						// console.log(attributes.tables[index]);
						content =
							attributes.tables[index].name.length > 12 ? (
								<a href={attributes.tables[index].ahref} rel={noFollow}>
									<img
										class="image-size"
										src={attributes.tables[index].imageUrl}
										alt={attributes.tables[index].name}
									/>
								</a>
							) : (
								<img
									class="image-size"
									src={attributes.tables[index].imageUrl}
								/>
							);
					}
					return (
						<Fragment>
							<div class="row">
								<div class="cell">{attributes.headTables[jndex].head}</div>
								<div class="cell">{content}</div>
							</div>
						</Fragment>
					);
				});

				return <div class="product">{showHeadTableDisplay}</div>;
			});
			let numText = 0;
			let numImage = 0;
			let numLi = 0;
			let numName = 0;
			const showDesktopTable = attributes.headTables.map((head, jndex) => {
				const key = Object.values(head);

				const productImage = key[1] == "image" ? " product-image" : "";

				// if (key[1] == "text") {
				// 	numText += 1;
				// }

				// if (key[1] == "name") {
				// 	numName += 1;
				// }

				// if (key[1] == "list") {
				// 	numLi += 1;
				// }

				// if (key[1] == "image") {
				// 	numImage += 1;
				// }

				let numInnerText = 0;
				let numInnerImage = 0;
				let numInnerLi = 0;
				let numInnerName = 0;
				const showRow = attributes.tables.map((table, index) => {
					let noFollow = attributes.tables[index].noFollow
						? "nofollow noindex noopener noreferrer"
						: noFollow;

					let content;

					if (key[1] == "text1") {
						content = (
							<RichText.Content value={attributes.tables[index].body1} />
						);
					}

					if (key[1] == "text2") {
						content = (
							<RichText.Content value={attributes.tables[index].body2} />
						);
					}

					if (key[1] == "text3") {
						content = (
							<RichText.Content value={attributes.tables[index].body3} />
						);
					}

					if (key[1] == "name") {
						content = (
							<a href={attributes.tables[index].ahref} rel={noFollow}>
								{attributes.tables[index].name}
							</a>
						);
					}

					if (key[1] == "li1") {
						content = (
							<ul>
								<RichText.Content value={attributes.tables[index].li1} />
							</ul>
						);
					}

					if (key[1] == "li2") {
						content = (
							<ul>
								<RichText.Content value={attributes.tables[index].li2} />
							</ul>
						);
					}

					if (key[1] == "li3") {
						content = (
							<ul>
								<RichText.Content value={attributes.tables[index].li3} />
							</ul>
						);
					}

					if (key[1] == "image") {
						content =
							attributes.tables[index].name.length > 12 ? (
								<a href={attributes.tables[index].ahref} rel={noFollow}>
									<img
										class="image-size"
										src={attributes.tables[index].imageUrl}
										alt={attributes.tables[index].name}
									/>
								</a>
							) : (
								<img
									class="image-size"
									src={attributes.tables[index].imageUrl}
								/>
							);
					}

					return (
						<div
							class={"product width-" + attributes.tables.length + productImage}
						>
							{content}
						</div>
					);
				});

				return (
					<div class="row">
						<div
							class={"head width-" + attributes.tables.length + productImage}
						>
							{attributes.headTables[jndex].head}
						</div>
						{showRow}
					</div>
				);
			});

			return (
				<div class="table-comparison">
					<div class="desktop">{showDesktopTable}</div>
					<div class="mobile">{showMobileTable}</div>
				</div>
			);
		}

		return null;
	}
});
