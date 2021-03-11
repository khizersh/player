/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clean-code/TapPlayer.js":
/*!*************************************!*\
  !*** ./src/clean-code/TapPlayer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TapPlayer)
/* harmony export */ });
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton */ "./src/clean-code/skeleton.js");
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
  }

  _createClass(TapPlayer, [{
    key: "_initPlayer",
    value: function _initPlayer() {
      (0,_skeleton__WEBPACK_IMPORTED_MODULE_0__._initializePlayer)(this.wrapper, this);

      console.log(this.playerRef);
    }
  }, {
    key: "playVideo",
    value: function playVideo() {
      this.playerRef.play();
      return;
    }
  }]);

  return TapPlayer;
}();



/***/ }),

/***/ "./src/clean-code/skeleton.js":
/*!************************************!*\
  !*** ./src/clean-code/skeleton.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_initializePlayer": () => (/* binding */ _initializePlayer)
/* harmony export */ });
var vidQualityLevels = [];
var hls = {};

function addPlayerToDOM(elementId) {
  var hlsScript = document.createElement("script");
  hlsScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.5.14/hls.min.js");
  document.getElementsByTagName("head")[0].appendChild(hlsScript);
  var player = document.getElementById(elementId);
  player.innerHTML = "<div class=\"Twrapper\">\n            <video id=\"Tplayer\">\n                <source src=\"https://www.w3schools.com/tags/movie.mp4\" type=\"video/mp4\">\n            </video>\n            <div style=\"width: 0%;display: none;\" id=\"Tplayer_adverts\">\n                <img src=\"https://mailbakery.s3.amazonaws.com/wp-content/uploads/2015/06/26160320/neiman_marcus.gif\"\n                    style=\"width: 100%;\" />\n            </div>\n            <div class=\"Tplayer_main_wrapper\">\n                <div class=\"Tplayer_main_btns\">\n                    <div class=\"Tplayer_main_play\">\n                        <img src=\"images/play-main.png\" width=\"100px\"\n                            alt=\"play-image\" />\n                    </div>\n                    <div class=\"Tplayer_main_buffer\">\n                        <div class=\"loader-6 center\"><span></span></div>\n                    </div>\n          \n                </div>\n                <div class=\"Tplayer_quality_switcher\">\n                    <div class=\"Tplayer_quality_box\">\n                        <ul class=\"Tplayer_quality_ul\">\n                            <li class=\"Tplayer_quality_list_styles\" onclick=\"switchQualityToAuto(this)\">Auto <span\n                                    id=\"Tplayer_current_auto_quality\"></span></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"Tplayer_controls\">\n                    <div class=\"Tplayer_buttons\">\n                        <div class=\"Tplayer_buttons_container\">\n                            <div class=\"Tplayer_btn_space\">\n                                <button class=\"Tplayer_btn Tplayer_10_sec_rewind\">\n                                    <img src=\"images/rewind.svg\" class=\"Tplayer_seekable_btn\" />\n                                </button>\n                            </div>\n                            <div class=\"Tplayer_btn_space\" style=\"margin: auto\">\n                                <button class=\"Tplayer_btn Tplayer_play\">\n                                    <img src=\"images/play.svg\" width=\"15px\" />\n                                </button>\n                                <button class=\"Tplayer_btn Tplayer_pause\">\n                                    <img src=\"images/pause.svg\" width=\"15px\" />\n                                </button>\n                                <button class=\"Tplayer_btn Tplayer_replay\">\n                                    <img src=\"images/replay.svg\" width=\"15px\" />\n                                </button>\n                            </div>\n                            <div class=\"Tplayer_btn_space\">\n                                <button class=\"Tplayer_btn Tplayer_10_sec_forward\">\n                                    <img src=\"images/forward.svg\" class=\"Tplayer_seekable_btn\" />\n                                </button>\n                            </div>\n          \n                        </div>\n                    </div>\n                    <div class=\"Tplayer_bar\">\n                        <div class=\"Tplayer_timer\">\n                            <div class=\"Tplayer_current_time\">0:00</div>\n                        </div>\n                        <div class=\"Tplayer_bar_container\">\n                            <div class=\"Tplayer_progress\"></div>\n                            <div class=\"Tplayer_buffered\"></div>\n                        </div>\n                        <div class=\"Tplayer_timer\">\n                            <div class=\"Tplayer_total_time\">0:00</div>\n                        </div>\n                    </div>\n                    <div class=\"Tplayer_resolution\">\n                        <div class=\"Tplayer_btn_space\">\n          \n                            <button class=\"Tplayer_btn \" id=\"Tplayer_volume\">\n                                <img src=\"images/volume.svg\" class=\"Tplayer_volume_btn\" />\n                            </button>\n                        </div>\n                        <div class=\"Tplayer_btn_space\">\n                            <button class=\"Tplayer_btn \" id=\"Tplayer_settings\">\n                                <img src=\"images/cog.svg\" class=\"Tplayer_setting_btn\" />\n                            </button>\n                        </div>\n                        <div class=\"Tplayer_btn_space\">\n                            <button class=\"Tplayer_btn \" id=\"Tplayer_fullScr\">\n                                <img src=\"images/expand.svg\" class=\"Tplayer_expand_btn\" />\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n          </div>";
  return player;
}

function addUrlToPlayer() {
  if (hls.currentLevel) {
    hls.destroy();
  }

  this.playerRef = document.getElementById("Tplayer"); // var videoSrc = 'https://streams.simpaisa.com:8443/tap/smil:ptvsportsnew.smil/playlist.m3u8';

  var videoSrc = this.url;
  console.log(Hls);

  if (Hls.isSupported()) {
    hls = new Hls({
      maxMaxBufferLength: 30,
      startFragPrefetch: true
    });
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_LOADING, function () {
      TplayerHideBuffer("block");
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(hls.subtitleTracks);
      addQualitiesInPlayer(data.levels);
      realTimeVideoQualityChecker(); // hls.loadLevel = data.levels.length - 1;
    });
    hls.on(Hls.Events.ERROR, function (e) {
      TplayerHideBuffer("block");

      if (e.details === Hls.ErrorDetails.BUFFER_STALLED_ERROR) {}
    });
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = videoSrc;
  }
}

function _initializePlayer(id, obj) {
  addPlayerToDOM(id);
  addUrlToPlayer.call(obj);
}

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
/* harmony import */ var _clean_code_TapPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clean-code/TapPlayer */ "./src/clean-code/TapPlayer.js");

var player = new _clean_code_TapPlayer__WEBPACK_IMPORTED_MODULE_0__.default("video-player", {
  url: "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8"
});
console.log(player);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map