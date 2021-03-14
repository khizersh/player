/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/Initialize.js":
/*!********************************!*\
  !*** ./src/core/Initialize.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_initializePlayer": () => (/* binding */ _initializePlayer)
/* harmony export */ });
/* harmony import */ var _markup_MainPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../markup/MainPlayer */ "./src/markup/MainPlayer.js");
/* harmony import */ var _utils_script_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/script-service */ "./src/utils/script-service.js");
/* harmony import */ var _vendors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendors */ "./src/vendors/index.js");



var vidQualityLevels = [];
var hls = {};

function addPlayerToDOM(elementId) {
  var player = document.getElementById(elementId);
  player.innerHTML = _markup_MainPlayer__WEBPACK_IMPORTED_MODULE_0__.MainPlayer;
  return player;
}

function checkIfHlsAvailable(obj) {
  var hlsAvailable = false;
  var interval = setInterval(function () {
    if (window.Hls) {
      hlsAvailable = waitForHLS();
      loadHlsVideo.call(obj);
      clearInterval(interval);
    }
  }, 1000);
}

function loadHlsVideo() {
  if (hls.currentLevel) {
    hls.destroy();
  }

  this.playerRef = document.getElementById("Tplayer");
  var videoSrc = this.url;

  if (Hls.isSupported()) {
    hls = new Hls({
      maxMaxBufferLength: 30,
      startFragPrefetch: true
    });
    hls.loadSource(videoSrc);
    hls.attachMedia(this.playerRef);
    hls.on(Hls.Events.MANIFEST_LOADING, function () {//   TplayerHideBuffer("block");
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {//   addQualitiesInPlayer(data.levels);
      //   realTimeVideoQualityChecker();
    });
    hls.on(Hls.Events.ERROR, function (e) {
      //   TplayerHideBuffer("block");
      if (e.details === Hls.ErrorDetails.BUFFER_STALLED_ERROR) {}
    });
  } else if (this.playerRef.canPlayType("application/vnd.apple.mpegurl")) {
    this.playerRef.src = videoSrc;
  }
}

function waitForHLS() {
  if (window.Hls) {
    hls = new Hls({
      maxMaxBufferLength: 30,
      startFragPrefetch: true
    });
    return true;
  } else {
    return false;
  }
}

function _initializePlayer(id, obj) {
  (0,_utils_script_service__WEBPACK_IMPORTED_MODULE_1__.addScriptsInHtml)(_vendors__WEBPACK_IMPORTED_MODULE_2__.VendorScripts);
  addPlayerToDOM(id);
  checkIfHlsAvailable(obj);
}

/***/ }),

/***/ "./src/core/TapPlayer.js":
/*!*******************************!*\
  !*** ./src/core/TapPlayer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TapPlayer)
/* harmony export */ });
/* harmony import */ var _controls_PlayerControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/PlayerControls */ "./src/core/controls/PlayerControls.js");
/* harmony import */ var _Initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Initialize */ "./src/core/Initialize.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var TapPlayer = /*#__PURE__*/function () {
  function TapPlayer(wrapper) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, TapPlayer);

    this.url = opts.url;
    this.wrapper = wrapper;
    this.poster = opts.poster;
    this.playerRef = null;

    this._initPlayer();

    this.playVideo();
  }

  _createClass(TapPlayer, [{
    key: "_initPlayer",
    value: function _initPlayer() {
      (0,_Initialize__WEBPACK_IMPORTED_MODULE_1__._initializePlayer)(this.wrapper, this);
    }
  }, {
    key: "playVideo",
    value: function playVideo() {
      var controls = new _controls_PlayerControls__WEBPACK_IMPORTED_MODULE_0__.default();
      controls.btnClick();
    }
  }]);

  return TapPlayer;
}();



/***/ }),

/***/ "./src/core/controls/PlayerControls.js":
/*!*********************************************!*\
  !*** ./src/core/controls/PlayerControls.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerControls)
/* harmony export */ });
/* harmony import */ var _PlayerEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerEvents */ "./src/core/controls/PlayerEvents.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PlayerControls = /*#__PURE__*/function (_PlayerEvents) {
  _inherits(PlayerControls, _PlayerEvents);

  var _super = _createSuper(PlayerControls);

  function PlayerControls() {
    _classCallCheck(this, PlayerControls);

    return _super.call(this);
  }

  _createClass(PlayerControls, [{
    key: "btnClick",
    value: function btnClick() {
      var _this = this;

      var playBtn = this.getMainPlayButton();
      console.log(playBtn);
      playBtn.addEventListener("click", function () {
        _this.PlayVideo;
      });
    }
  }]);

  return PlayerControls;
}(_PlayerEvents__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/core/controls/PlayerEvents.js":
/*!*******************************************!*\
  !*** ./src/core/controls/PlayerEvents.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerEvents)
/* harmony export */ });
/* harmony import */ var _PlayerReferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerReferences */ "./src/core/controls/PlayerReferences.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PlayerEvents = /*#__PURE__*/function (_PlayerReferences) {
  _inherits(PlayerEvents, _PlayerReferences);

  var _super = _createSuper(PlayerEvents);

  function PlayerEvents() {
    var _this;

    _classCallCheck(this, PlayerEvents);

    _this = _super.call(this);
    _this.video = _this.getVideoRef();
    return _this;
  }

  _createClass(PlayerEvents, [{
    key: "PlayVideo",
    value: function PlayVideo() {
      console.log(this);
      this.video.play();
    }
  }, {
    key: "PauseVideo",
    value: function PauseVideo() {
      this.video.pause();
    }
  }, {
    key: "ForwardVideo",
    value: function ForwardVideo() {
      this.video.currentTime += 10;
    }
  }, {
    key: "RewindVideo",
    value: function RewindVideo() {
      this.video.currentTime -= 10;
    }
  }, {
    key: "SwitchToFullScreen",
    value: function SwitchToFullScreen() {
      if (this.video.requestFullscreen) {
        this.video.requestFullscreen();
      } else if (this.video.webkitRequestFullscreen) {
        /* Safari */
        this.video.webkitRequestFullscreen();
      } else if (this.video.msRequestFullscreen) {
        /* IE11 */
        this.video.msRequestFullscreen();
      }
    }
  }, {
    key: "SeekVideo",
    value: function SeekVideo() {}
  }]);

  return PlayerEvents;
}(_PlayerReferences__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/core/controls/PlayerReferences.js":
/*!***********************************************!*\
  !*** ./src/core/controls/PlayerReferences.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerReferences)
/* harmony export */ });
/* harmony import */ var _utils_script_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/script-service */ "./src/utils/script-service.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var PlayerReferences = /*#__PURE__*/function () {
  function PlayerReferences() {
    _classCallCheck(this, PlayerReferences);
  }

  _createClass(PlayerReferences, [{
    key: "getMainPlayButton",
    value: function getMainPlayButton() {
      return this.validateElementReference("Tplayer_play");
    }
  }, {
    key: "getMainPauseButton",
    value: function getMainPauseButton() {
      return this.validateElementReference("Tplayer_pause");
    }
  }, {
    key: "getMainReplayButton",
    value: function getMainReplayButton() {
      return this.validateElementReference("Tplayer_replay");
    }
  }, {
    key: "getVideoRef",
    value: function getVideoRef() {
      return this.validateElementReference("Tplayer");
    }
  }, {
    key: "getFullScreenButton",
    value: function getFullScreenButton() {
      return this.validateElementReference("TplayerFullScreen");
    }
  }, {
    key: "getQualitySelectButton",
    value: function getQualitySelectButton() {
      return this.validateElementReference("Tplayer_settings");
    }
  }, {
    key: "getProgressBar",
    value: function getProgressBar() {
      return this.validateElementReference("Tplayer_progress");
    }
  }, {
    key: "getBufferedBar",
    value: function getBufferedBar() {
      return this.validateElementReference("Tplayer_buffered");
    }
  }, {
    key: "getProgressBarContainer",
    value: function getProgressBarContainer() {
      return this.validateElementReference("Tplayer_bar_container");
    }
  }, {
    key: "getVideoForwardButton",
    value: function getVideoForwardButton() {
      return this.validateElementReference("Tplayer_10_sec_forward");
    }
  }, {
    key: "getVideoRewindButton",
    value: function getVideoRewindButton() {
      return this.validateElementReference("Tplayer_10_sec_rewind");
    }
  }, {
    key: "getTotalTimeElement",
    value: function getTotalTimeElement() {
      return this.validateElementReference("Tplayer_total_time");
    }
  }, {
    key: "getCurrentTimeElement",
    value: function getCurrentTimeElement() {
      return this.validateElementReference("Tplayer_current_time");
    }
  }, {
    key: "getOnScreenPlayButton",
    value: function getOnScreenPlayButton() {
      return this.validateElementReference("Tplayer_main_play");
    }
  }, {
    key: "getFullPlayerSelection",
    value: function getFullPlayerSelection() {
      return this.validateElementReference("Tplayer_main_btns");
    }
  }, {
    key: "getOnScreenBufferElement",
    value: function getOnScreenBufferElement() {
      return this.validateElementReference("Tplayer_main_buffer");
    }
  }, {
    key: "getQualitySelectionBox",
    value: function getQualitySelectionBox() {
      return this.validateElementReference("Tplayer_quality_box");
    }
  }, {
    key: "validateElementReference",
    value: function validateElementReference(element) {
      var elementRef = (0,_utils_script_service__WEBPACK_IMPORTED_MODULE_0__.getElementReference)(element);

      if (elementRef) {
        return elementRef;
      } else {
        return false;
      }
    }
  }]);

  return PlayerReferences;
}();



/***/ }),

/***/ "./src/markup/MainPlayer.js":
/*!**********************************!*\
  !*** ./src/markup/MainPlayer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPlayer": () => (/* binding */ MainPlayer)
/* harmony export */ });
var MainPlayer = "<div class=\"Twrapper\">\n<video id=\"Tplayer\">\n    <source src=\"https://www.w3schools.com/tags/movie.mp4\" type=\"video/mp4\">\n</video>\n<div style=\"width: 0%;display: none;\" id=\"Tplayer_adverts\">\n    <img src=\"https://mailbakery.s3.amazonaws.com/wp-content/uploads/2015/06/26160320/neiman_marcus.gif\"\n        style=\"width: 100%;\" />\n</div>\n<div class=\"Tplayer_main_wrapper\">\n    <div class=\"Tplayer_main_btns\">\n        <div class=\"Tplayer_main_play\">\n            <img src=\"images/play-main.png\" width=\"100px\"\n                alt=\"play-image\" />\n        </div>\n        <div class=\"Tplayer_main_buffer\">\n            <div class=\"loader-6 center\"><span></span></div>\n        </div>\n\n    </div>\n    <div class=\"Tplayer_quality_switcher\">\n        <div class=\"Tplayer_quality_box\">\n            <ul class=\"Tplayer_quality_ul\">\n                <li class=\"Tplayer_quality_list_styles\" onclick=\"switchQualityToAuto(this)\">Auto <span\n                        id=\"Tplayer_current_auto_quality\"></span></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"Tplayer_controls\">\n        <div class=\"Tplayer_buttons\">\n            <div class=\"Tplayer_buttons_container\">\n                <div class=\"Tplayer_btn_space\">\n                    <button class=\"Tplayer_btn Tplayer_10_sec_rewind\">\n                        <img src=\"images/rewind.svg\" class=\"Tplayer_seekable_btn\" />\n                    </button>\n                </div>\n                <div class=\"Tplayer_btn_space\" style=\"margin: auto\">\n                    <button class=\"Tplayer_btn Tplayer_play\">\n                        <img src=\"images/play.svg\" width=\"15px\" />\n                    </button>\n                    <button class=\"Tplayer_btn Tplayer_pause\">\n                        <img src=\"images/pause.svg\" width=\"15px\" />\n                    </button>\n                    <button class=\"Tplayer_btn Tplayer_replay\">\n                        <img src=\"images/replay.svg\" width=\"15px\" />\n                    </button>\n                </div>\n                <div class=\"Tplayer_btn_space\">\n                    <button class=\"Tplayer_btn Tplayer_10_sec_forward\">\n                        <img src=\"images/forward.svg\" class=\"Tplayer_seekable_btn\" />\n                    </button>\n                </div>\n\n            </div>\n        </div>\n        <div class=\"Tplayer_bar\">\n            <div class=\"Tplayer_timer\">\n                <div class=\"Tplayer_current_time\">0:00</div>\n            </div>\n            <div class=\"Tplayer_bar_container\">\n                <div class=\"Tplayer_progress\"></div>\n                <div class=\"Tplayer_buffered\"></div>\n            </div>\n            <div class=\"Tplayer_timer\">\n                <div class=\"Tplayer_total_time\">0:00</div>\n            </div>\n        </div>\n        <div class=\"Tplayer_resolution\">\n            <div class=\"Tplayer_btn_space\">\n\n                <button class=\"Tplayer_btn \" id=\"Tplayer_volume\">\n                    <img src=\"images/volume.svg\" class=\"Tplayer_volume_btn\" />\n                </button>\n            </div>\n            <div class=\"Tplayer_btn_space\">\n                <button class=\"Tplayer_btn \" id=\"Tplayer_settings\">\n                    <img src=\"images/cog.svg\" class=\"Tplayer_setting_btn\" />\n                </button>\n            </div>\n            <div class=\"Tplayer_btn_space\">\n                <button class=\"Tplayer_btn \" id=\"Tplayer_fullScr\">\n                    <img src=\"images/expand.svg\" class=\"Tplayer_expand_btn\" />\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n</div>";

/***/ }),

/***/ "./src/utils/script-service.js":
/*!*************************************!*\
  !*** ./src/utils/script-service.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addScriptsInHtml": () => (/* binding */ addScriptsInHtml),
/* harmony export */   "getElementReference": () => (/* binding */ getElementReference)
/* harmony export */ });
function addScriptsInHtml(scripts) {
  for (var i = 0; i < scripts.length; i++) {
    var scriptTag = document.createElement("script");
    scriptTag.setAttribute("src", scripts[i]);
    document.getElementsByTagName("head")[0].appendChild(scriptTag);
  }
}
function getElementReference(classOrId) {
  var byId = document.getElementById(classOrId);
  var byClass = document.getElementsByClassName(classOrId)[0];

  if (byId) {
    return byId;
  } else {
    if (byClass) {
      return byClass;
    } else {
      return false;
    }
  }
}

/***/ }),

/***/ "./src/vendors/index.js":
/*!******************************!*\
  !*** ./src/vendors/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VendorScripts": () => (/* binding */ VendorScripts)
/* harmony export */ });
var HLSScript = "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.5.14/hls.min.js";
var CastScript = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
var VendorScripts = [HLSScript, CastScript];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_TapPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/TapPlayer */ "./src/core/TapPlayer.js");

var player = new _core_TapPlayer__WEBPACK_IMPORTED_MODULE_0__.default("video-player", {
  url: "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8"
});
console.log(player);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map