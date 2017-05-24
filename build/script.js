/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _Walker = __webpack_require__(1);

	var _Walker2 = _interopRequireWildcard(_Walker);

	var bodyWalker = new _Walker2['default'](document.body);
	bodyWalker.walkRoot();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _Translator = __webpack_require__(2);

	var _Translator2 = _interopRequireWildcard(_Translator);

	// This is ES6-ified code I previously stole from cloud-to-butt:
	// https://github.com/panicsteve/cloud-to-butt

	var Walker = (function () {
		function Walker(root) {
			_classCallCheck(this, Walker);

			this.root = root;
			this.translator = new _Translator2['default']();
		}

		_createClass(Walker, [{
			key: 'walk',
			value: function walk(node) {
				var child, next;
				switch (node.nodeType) {
					case 1: // Element
					case 9: // Document
					case 11:
						// Document fragment
						child = node.firstChild;
						while (child) {
							next = child.nextSibling;
							this.walk(child);
							child = next;
						}
						break;

					case 3:
						// Text node
						this.translator.translate(node);
						break;
				}
			}
		}, {
			key: 'walkRoot',
			value: function walkRoot() {
				this.walk(this.root);
			}
		}]);

		return Walker;
	})();

	exports['default'] = Walker;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	function handle(text) {
		var v = text;
		v = v.replace(/(Dance Dance Revolution)|(DDR)\b/g, function ($1) {
			return 'East Germany';
		});
		return v;
	}

	var Translator = (function () {
		function Translator() {
			_classCallCheck(this, Translator);
		}

		_createClass(Translator, [{
			key: 'translate',
			value: function translate(textNode) {
				var v = textNode.nodeValue;

				v = handle(v);

				textNode.nodeValue = v;
			}
		}]);

		return Translator;
	})();

	exports['default'] = Translator;
	module.exports = exports['default'];

/***/ }
/******/ ]);