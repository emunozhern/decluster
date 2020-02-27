/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar Fragment = wp.element.Fragment;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    RichText = _wp$editor.RichText;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    RangeControl = _wp$components.RangeControl;\n\n\nregisterBlockType(\"cgb/block-decluster\", {\n\ttitle: \"decluster\",\n\ticon: \"format-image\", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: \"widgets\",\n\tkeywords: [\"decluster\", \"emunoz\"],\n\tattributes: {\n\t\t// title: {\n\t\t//   type: \"string\",\n\n\t\t//   source: \"html\",\n\n\t\t//   selector: \"h3\"\n\t\t// },\n\t\t// desc: {\n\t\t//   type: \"string\",\n\n\t\t//   source: \"html\",\n\n\t\t//   selector: \"p\"\n\t\t// },\n\t\tcard: {},\n\t\tnumber_cards: {\n\t\t\ttype: \"number\",\n\t\t\tdefault: 1\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\tvar number_cards = props.attributes.number_cards;\n\n\t\tvar card_list = [];\n\n\t\tfor (var i = 0; i < number_cards; i++) {\n\t\t\tcard_list.push(wp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ \"class\": \"card\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ \"class\": \"card-container\" },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ \"class\": \"card-image\", href: \"/proteinas-isoladas\" },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t\t{ className: \"components-placeholder\" },\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t\t\t{ className: \"components-placeholder__label\" },\n\t\t\t\t\t\t\t\t\"No image\"\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\twp.element.createElement(\"div\", { className: \"components-placeholder__fieldset\" })\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ \"class\": \"card-info same\" },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t\t{ \"class\": \"card-title\" },\n\t\t\t\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\t\t\t\ttagName: \"h3\"\n\t\t\t\t\t\t\t\t//   value={props.attributes.title}\n\t\t\t\t\t\t\t\t, placeholder: \"Titulo \"\n\t\t\t\t\t\t\t\t//   onChange={content => setAttributes({ title })}\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\t\t\tclassName: \"card-text\",\n\t\t\t\t\t\t\ttagName: \"p\"\n\t\t\t\t\t\t\t// value={props.attributes.desc}\n\t\t\t\t\t\t\t, placeholder: \"Ingrese una descripcion \"\n\t\t\t\t\t\t\t// onChange={content => setAttributes({ desc })}\n\t\t\t\t\t\t})\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ \"class\": \"card-btn\" },\n\t\t\t\t\t\t\"Ver productos\"\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t));\n\t\t}\n\n\t\tfunction onChangeNumberCards(number) {\n\t\t\tconsole.log(number);\n\n\t\t\tprops.setAttributes({ number_cards: number });\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ \"class\": \"album album-home text-muted\" },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ \"class\": \"row\" },\n\t\t\t\t\tcard_list\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\t{ title: \"Form Settings\", initialOpen: true },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\tPanelRow,\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\twp.element.createElement(RangeControl, {\n\t\t\t\t\t\t\tvalue: number_cards,\n\t\t\t\t\t\t\tonChange: onChangeNumberCards,\n\t\t\t\t\t\t\tmin: 1,\n\t\t\t\t\t\t\tmax: 10,\n\t\t\t\t\t\t\tstep: 1\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  *\n  * @param {Object} props Props.\n  * @returns {Mixed} JSX Frontend HTML.\n  */\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t\"div\",\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(\n\t\t\t\t\"p\",\n\t\t\t\tnull,\n\t\t\t\t\"\\u2014 Hello from the frontend.\"\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t\"p\",\n\t\t\t\tnull,\n\t\t\t\t\"CGB BLOCK: \",\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"code\",\n\t\t\t\t\tnull,\n\t\t\t\t\t\"decluster\"\n\t\t\t\t),\n\t\t\t\t\" is a new Gutenberg block.\"\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t\"p\",\n\t\t\t\tnull,\n\t\t\t\t\"It was created via\",\n\t\t\t\t\" \",\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"code\",\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"a\",\n\t\t\t\t\t\t{ href: \"https://github.com/ahmadawais/create-guten-block\" },\n\t\t\t\t\t\t\"create-guten-block\"\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t\".\"\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vZWRpdG9yLnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scyxcbiAgICBSaWNoVGV4dCA9IF93cCRlZGl0b3IuUmljaFRleHQ7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBQYW5lbFJvdyA9IF93cCRjb21wb25lbnRzLlBhbmVsUm93LFxuICAgIFJhbmdlQ29udHJvbCA9IF93cCRjb21wb25lbnRzLlJhbmdlQ29udHJvbDtcblxuXG5yZWdpc3RlckJsb2NrVHlwZShcImNnYi9ibG9jay1kZWNsdXN0ZXJcIiwge1xuXHR0aXRsZTogXCJkZWNsdXN0ZXJcIixcblx0aWNvbjogXCJmb3JtYXQtaW1hZ2VcIiwgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogXCJ3aWRnZXRzXCIsXG5cdGtleXdvcmRzOiBbXCJkZWNsdXN0ZXJcIiwgXCJlbXVub3pcIl0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHQvLyB0aXRsZToge1xuXHRcdC8vICAgdHlwZTogXCJzdHJpbmdcIixcblxuXHRcdC8vICAgc291cmNlOiBcImh0bWxcIixcblxuXHRcdC8vICAgc2VsZWN0b3I6IFwiaDNcIlxuXHRcdC8vIH0sXG5cdFx0Ly8gZGVzYzoge1xuXHRcdC8vICAgdHlwZTogXCJzdHJpbmdcIixcblxuXHRcdC8vICAgc291cmNlOiBcImh0bWxcIixcblxuXHRcdC8vICAgc2VsZWN0b3I6IFwicFwiXG5cdFx0Ly8gfSxcblx0XHRjYXJkOiB7fSxcblx0XHRudW1iZXJfY2FyZHM6IHtcblx0XHRcdHR5cGU6IFwibnVtYmVyXCIsXG5cdFx0XHRkZWZhdWx0OiAxXG5cdFx0fVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHR2YXIgbnVtYmVyX2NhcmRzID0gcHJvcHMuYXR0cmlidXRlcy5udW1iZXJfY2FyZHM7XG5cblx0XHR2YXIgY2FyZF9saXN0ID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlcl9jYXJkczsgaSsrKSB7XG5cdFx0XHRjYXJkX2xpc3QucHVzaCh3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdHsgXCJjbGFzc1wiOiBcImNhcmRcIiB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHR7IFwiY2xhc3NcIjogXCJjYXJkLWNvbnRhaW5lclwiIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRcdHsgXCJjbGFzc1wiOiBcImNhcmQtaW1hZ2VcIiwgaHJlZjogXCIvcHJvdGVpbmFzLWlzb2xhZGFzXCIgfSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwiY29tcG9uZW50cy1wbGFjZWhvbGRlclwiIH0sXG5cdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiBcImNvbXBvbmVudHMtcGxhY2Vob2xkZXJfX2xhYmVsXCIgfSxcblx0XHRcdFx0XHRcdFx0XHRcIk5vIGltYWdlXCJcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbXBvbmVudHMtcGxhY2Vob2xkZXJfX2ZpZWxkc2V0XCIgfSlcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0XHR7IFwiY2xhc3NcIjogXCJjYXJkLWluZm8gc2FtZVwiIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0XHRcdHsgXCJjbGFzc1wiOiBcImNhcmQtdGl0bGVcIiB9LFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0XHRcdFx0XHR0YWdOYW1lOiBcImgzXCJcblx0XHRcdFx0XHRcdFx0XHQvLyAgIHZhbHVlPXtwcm9wcy5hdHRyaWJ1dGVzLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdCwgcGxhY2Vob2xkZXI6IFwiVGl0dWxvIFwiXG5cdFx0XHRcdFx0XHRcdFx0Ly8gICBvbkNoYW5nZT17Y29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGUgfSl9XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZTogXCJjYXJkLXRleHRcIixcblx0XHRcdFx0XHRcdFx0dGFnTmFtZTogXCJwXCJcblx0XHRcdFx0XHRcdFx0Ly8gdmFsdWU9e3Byb3BzLmF0dHJpYnV0ZXMuZGVzY31cblx0XHRcdFx0XHRcdFx0LCBwbGFjZWhvbGRlcjogXCJJbmdyZXNlIHVuYSBkZXNjcmlwY2lvbiBcIlxuXHRcdFx0XHRcdFx0XHQvLyBvbkNoYW5nZT17Y29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgZGVzYyB9KX1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdFx0eyBcImNsYXNzXCI6IFwiY2FyZC1idG5cIiB9LFxuXHRcdFx0XHRcdFx0XCJWZXIgcHJvZHVjdG9zXCJcblx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCkpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uQ2hhbmdlTnVtYmVyQ2FyZHMobnVtYmVyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhudW1iZXIpO1xuXG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgbnVtYmVyX2NhcmRzOiBudW1iZXIgfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdEZyYWdtZW50LFxuXHRcdFx0bnVsbCxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XCJkaXZcIixcblx0XHRcdFx0eyBcImNsYXNzXCI6IFwiYWxidW0gYWxidW0taG9tZSB0ZXh0LW11dGVkXCIgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBcImNsYXNzXCI6IFwicm93XCIgfSxcblx0XHRcdFx0XHRjYXJkX2xpc3Rcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRQYW5lbEJvZHksXG5cdFx0XHRcdFx0eyB0aXRsZTogXCJGb3JtIFNldHRpbmdzXCIsIGluaXRpYWxPcGVuOiB0cnVlIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0UGFuZWxSb3csXG5cdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJhbmdlQ29udHJvbCwge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogbnVtYmVyX2NhcmRzLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VOdW1iZXJDYXJkcyxcblx0XHRcdFx0XHRcdFx0bWluOiAxLFxuXHRcdFx0XHRcdFx0XHRtYXg6IDEwLFxuXHRcdFx0XHRcdFx0XHRzdGVwOiAxXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBQcm9wcy5cbiAgKiBAcmV0dXJucyB7TWl4ZWR9IEpTWCBGcm9udGVuZCBIVE1MLlxuICAqL1xuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFwiZGl2XCIsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwicFwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcIlxcdTIwMTQgSGVsbG8gZnJvbSB0aGUgZnJvbnRlbmQuXCJcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwicFwiLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcIkNHQiBCTE9DSzogXCIsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImNvZGVcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFwiZGVjbHVzdGVyXCJcblx0XHRcdFx0KSxcblx0XHRcdFx0XCIgaXMgYSBuZXcgR3V0ZW5iZXJnIGJsb2NrLlwiXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcInBcIixcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XCJJdCB3YXMgY3JlYXRlZCB2aWFcIixcblx0XHRcdFx0XCIgXCIsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcImNvZGVcIixcblx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFwiYVwiLFxuXHRcdFx0XHRcdFx0eyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9haG1hZGF3YWlzL2NyZWF0ZS1ndXRlbi1ibG9ja1wiIH0sXG5cdFx0XHRcdFx0XHRcImNyZWF0ZS1ndXRlbi1ibG9ja1wiXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRcIi5cIlxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);