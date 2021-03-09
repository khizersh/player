/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apis/references.js":
/*!********************************!*\
  !*** ./src/apis/references.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeAllReferencesFromDOM\": () => (/* binding */ makeAllReferencesFromDOM)\n/* harmony export */ });\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.js\");\n\nvar NeedReferences = [\"Tplayer_play\", \"Tplayer_pause\", \"Tplayer_replay\", \"Tplayer\", \"Twrapper\", \"Tplayer_fullScr\", \"Tplayer_progress\", \"Tplayer_buffered\", \"Tplayer_bar\", \"Tplayer_bar_container\", \"Tplayer_10_sec_rewind\", \"Tplayer_10_sec_forward\", \"Tplayer_total_time\", \"Tplayer_current_time\", \"Tplayer_main_play\", \"Tplayer_main_btns\", \"Tplayer_main_buffer\", \"Tplayer_adverts\", \"Tplayer_settings\", \"Tplayer_quality_box\"];\nfunction makeAllReferencesFromDOM() {\n  var allRefs = {};\n\n  for (var i = 0; i < NeedReferences.length; i++) {\n    var tempRef = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentElement)(NeedReferences[i]);\n    allRefs[NeedReferences[i]] = tempRef;\n  }\n\n  return allRefs;\n}\n\n//# sourceURL=webpack://tap-player/./src/apis/references.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_hls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/hls */ \"./src/lib/hls.js\");\n/* harmony import */ var _lib_playerFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/playerFunctions */ \"./src/lib/playerFunctions.js\");\n/* harmony import */ var _lib_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/skeleton */ \"./src/lib/skeleton.js\");\n\n\n\n(0,_lib_skeleton__WEBPACK_IMPORTED_MODULE_2__.default)(\"video-player\"); // checkRefs();\n\n(0,_lib_playerFunctions__WEBPACK_IMPORTED_MODULE_1__.default)(); // loadPlayerWithVideo(\n//   \"https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8\"\n// );\n\n//# sourceURL=webpack://tap-player/./src/index.js?");

/***/ }),

/***/ "./src/lib/hls.js":
/*!************************!*\
  !*** ./src/lib/hls.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPlayerWithVideo\": () => (/* binding */ loadPlayerWithVideo),\n/* harmony export */   \"realTimeVideoQualityChecker\": () => (/* binding */ realTimeVideoQualityChecker)\n/* harmony export */ });\n/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hls.js */ \"hls.js\");\n/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar vidQualityLevels = [];\nvar hls = {};\nfunction loadPlayerWithVideo(url) {\n  if (hls.currentLevel) {\n    hls.destroy();\n  }\n\n  var video = document.getElementById(\"Tplayer\"); // var videoSrc = 'https://streams.simpaisa.com:8443/tap/smil:ptvsportsnew.smil/playlist.m3u8';\n\n  var videoSrc = url;\n\n  if (hls_js__WEBPACK_IMPORTED_MODULE_0___default().isSupported()) {\n    hls = new (hls_js__WEBPACK_IMPORTED_MODULE_0___default())({\n      maxMaxBufferLength: 30,\n      startFragPrefetch: true\n    });\n    hls.loadSource(videoSrc);\n    hls.attachMedia(video);\n    hls.on((hls_js__WEBPACK_IMPORTED_MODULE_0___default().Events.MANIFEST_LOADING), function () {\n      TplayerHideBuffer(\"block\");\n    });\n    hls.on((hls_js__WEBPACK_IMPORTED_MODULE_0___default().Events.MANIFEST_PARSED), function (event, data) {\n      console.log(hls.subtitleTracks);\n      addQualitiesInPlayer(data.levels);\n      realTimeVideoQualityChecker(); // hls.loadLevel = data.levels.length - 1;\n    });\n    hls.on((hls_js__WEBPACK_IMPORTED_MODULE_0___default().Events.ERROR), function (e) {\n      TplayerHideBuffer(\"block\");\n\n      if (e.details === (hls_js__WEBPACK_IMPORTED_MODULE_0___default().ErrorDetails.BUFFER_STALLED_ERROR)) {}\n    });\n  } else if (video.canPlayType(\"application/vnd.apple.mpegurl\")) {\n    video.src = videoSrc;\n  }\n}\n\nfunction playVideo() {\n  var vidUrl = document.getElementById(\"vidUrl\");\n\n  if (vidUrl.value) {\n    TplayerPauseVideo();\n    loadPlayerWithVideo(vidUrl.value);\n  } else {\n    alert(\"No Url Found\");\n  }\n}\n\nfunction qualitySwitchBetweenVideo(quality) {\n  console.log(quality);\n\n  if (hls.currentLevel == quality) {\n    return;\n  } else {\n    hls.currentLevel = quality;\n  }\n}\n\nfunction switchQualityToAuto(elem) {\n  hls.loadLevel = -1;\n  elem.innerHTML = '* Auto <span id=\"Tplayer_current_auto_quality\"></span>';\n}\n\nfunction addQualitiesInPlayer(qualities) {\n  var uls = document.getElementsByClassName(\"Tplayer_quality_ul\")[0];\n  uls.innerHTML = '<li class=\"Tplayer_quality_list_styles\" onclick=\"switchQualityToAuto(this)\">Auto <span id=\"Tplayer_current_auto_quality\"></span></li>';\n\n  var _loop = function _loop(i) {\n    var li = document.createElement(\"li\");\n    li.classList.add(\"Tplayer_quality_list_styles\");\n    li.innerHTML = qualities[i - 1].height;\n    li.addEventListener(\"click\", function () {\n      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : i;\n      qualitySwitchBetweenVideo(i - 1);\n    });\n    uls.append(li);\n    vidQualityLevels.unshift(qualities[i - 1].height);\n  };\n\n  for (var i = qualities.length; i > 0; i--) {\n    _loop(i);\n  }\n}\n\nfunction realTimeVideoQualityChecker() {\n  document.getElementById(\"Tplayer_current_auto_quality\").innerHTML = \"(\".concat(vidQualityLevels[hls.currentLevel == -1 ? hls.loadLevel : hls.currentLevel], \")\");\n}\n\n//# sourceURL=webpack://tap-player/./src/lib/hls.js?");

/***/ }),

/***/ "./src/lib/playerFunctions.js":
/*!************************************!*\
  !*** ./src/lib/playerFunctions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkRefs\": () => (/* binding */ checkRefs),\n/* harmony export */   \"default\": () => (/* binding */ MainPlayer)\n/* harmony export */ });\n/* harmony import */ var _apis_references__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/references */ \"./src/apis/references.js\");\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ \"./src/utils/dom.js\");\n/* harmony import */ var _hls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hls */ \"./src/lib/hls.js\");\n\n\n\nvar PlayerReferences = [];\nfunction checkRefs() {\n  PlayerReferences = (0,_apis_references__WEBPACK_IMPORTED_MODULE_0__.makeAllReferencesFromDOM)();\n  return PlayerReferences;\n}\nfunction MainPlayer() {\n  var isTplayerVideoPlaying = false;\n  var isQualityBoxVisible = false;\n  var PlayerElements = checkRefs();\n  var P = PlayerElements;\n  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addEventsInElements)(P.Tplayer_play, \"click\", TplayerPlayVideo);\n  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addEventsInElements)(P.Tplayer_pause, \"click\", TplayerPauseVideo);\n  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addEventsInElements)(P.Tplayer_main_btns, \"click\", TplayerTogglePlayPause);\n  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addEventsInElements)(P.Tplayer_replay, \"click\", function () {\n    P.Tplayer.play();\n    P.Tplayer_pause.style.display = \"flex\";\n    P.Tplayer_play.style.display = \"none\";\n    P.Tplayer_replay.style.display = \"none\";\n  });\n  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addEventsInElements)(P.Tplayer, \"timeupdate\", function () {\n    P.Tplayer_current_time.innerHTML = secondsToHms(P.Tplayer.currentTime);\n    (0,_hls__WEBPACK_IMPORTED_MODULE_2__.realTimeVideoQualityChecker)();\n    MovePlayerProgress(P.Tplayer.currentTime);\n\n    if (P.Tplayer.ended) {\n      P.Tplayer_pause.style.display = \"none\";\n      P.Tplayer_play.style.display = \"none\";\n      P.Tplayer_replay.style.display = \"flex\";\n    }\n  });\n  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addEventsInElements)(P.Tplayer, \"playing\", function () {\n    TplayerHideBuffer(\"none\");\n  });\n\n  P.Tplayer.onloadedmetadata = function (e) {\n    TplayerHideBuffer(\"none\");\n    TplayerShowHidePlayBtn(\"block\");\n    P.Tplayer_total_time.innerHTML = secondsToHms(P.Tplayer.duration);\n  };\n\n  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addEventsInElements)(P.Tplayer, \"progress\", function () {\n    var Tplayer = P.Tplayer;\n    var duration = Tplayer.duration;\n\n    if (duration > 0) {\n      for (var i = 0; i < Tplayer.buffered.length; i++) {\n        if (Tplayer.buffered.start(Tplayer.buffered.length - 1 - i) < Tplayer.currentTime) {\n          var buffered = Tplayer.buffered.end(Tplayer.buffered.length - 1 - i) / duration * 100;\n          P.Tplayer_buffered.style.width = buffered + \"%\";\n          break;\n        }\n      }\n    }\n  });\n  P.Tplayer_fullScr.addEventListener(\"click\", function () {\n    openFullscreen(Tplayer);\n  });\n  P.Tplayer_10_sec_rewind.addEventListener(\"click\", function () {\n    Tplayer.currentTime = Tplayer.currentTime - 10;\n  });\n  P.Tplayer_10_sec_forward.addEventListener(\"click\", function () {\n    Tplayer.currentTime = Tplayer.currentTime + 10;\n  });\n  P.Tplayer_settings.addEventListener(\"click\", function () {\n    var TplayerQualityBox = P.Tplayer_quality_box;\n\n    if (isQualityBoxVisible) {\n      isQualityBoxVisible = false;\n      TplayerQualityBox.style.visibility = \"hidden\";\n    } else {\n      TplayerQualityBox.style.visibility = \"visible\";\n      isQualityBoxVisible = true;\n    }\n  });\n  P.Tplayer_bar_container.addEventListener(\"click\", function (e) {\n    var playerBounds = P.Tplayer_bar_container.getBoundingClientRect();\n    var calcPercent = e.layerX / playerBounds.width * 100;\n    var vidSec = P.Tplayer.duration / 100 * calcPercent;\n    MovePlayerProgress(vidSec);\n    P.Tplayer.currentTime = vidSec;\n  });\n\n  function openFullscreen(elem) {\n    if (elem.requestFullscreen) {\n      elem.requestFullscreen();\n    } else if (elem.webkitRequestFullscreen) {\n      /* Safari */\n      elem.webkitRequestFullscreen();\n    } else if (elem.msRequestFullscreen) {\n      /* IE11 */\n      elem.msRequestFullscreen();\n    }\n  }\n\n  function MovePlayerProgress(moveTo) {\n    var progress = moveTo / P.Tplayer.duration;\n    P.Tplayer_progress.style.width = progress * 100 + \"%\";\n  }\n\n  function secondsToHms(e) {\n    var h = Math.floor(e / 3600).toString().padStart(2, \"0\"),\n        m = Math.floor(e % 3600 / 60).toString().padStart(2, \"0\"),\n        s = Math.floor(e % 60).toString().padStart(2, \"0\");\n\n    if (h == \"00\") {\n      return m + \":\" + s;\n    } else {\n      return h + \":\" + m + \":\" + s;\n    }\n  }\n\n  function TplayerPlayVideo() {\n    // playAdsOnPlayer();\n    isTplayerVideoPlaying = true;\n    var playPromise = P.Tplayer.play();\n    playPromise.then(function (e) {})[\"catch\"](function (error) {\n      console.log(error);\n    });\n    TplayerShowHidePlayBtn(\"none\");\n    P.Tplayer_play.style.display = \"none\";\n    P.Tplayer_pause.style.display = \"flex\";\n    TplayerHideBuffer(\"none\");\n  }\n\n  function TplayerPauseVideo() {\n    isTplayerVideoPlaying = false;\n    P.Tplayer.pause();\n    P.Tplayer_pause.style.display = \"none\";\n    P.Tplayer_play.style.display = \"flex\";\n    TplayerShowHidePlayBtn(\"block\");\n    TplayerHideBuffer(\"none\");\n  }\n\n  function TplayerTogglePlayPause() {\n    if (isTplayerVideoPlaying) {\n      TplayerPauseVideo();\n    } else {\n      TplayerPlayVideo();\n    }\n  }\n\n  function TplayerHideBuffer(param) {\n    P.Tplayer_main_buffer.style.display = param;\n  }\n\n  function TplayerShowHidePlayBtn(param) {\n    P.Tplayer_main_play.style.display = param;\n  }\n\n  (function onInit() {\n    TplayerShowHidePlayBtn(\"none\");\n  })();\n\n  function playAdsOnPlayer() {\n    setTimeout(function () {\n      Tplayer.style.width = \"60%\";\n      TplayerAds.style.width = \"40%\";\n      TplayerAds.style.display = \"block\";\n      setTimeout(function (e) {\n        Tplayer.style.width = \"100%\";\n        TplayerAds.style.width = \"0%\";\n        TplayerAds.style.display = \"none\";\n      }, 10000);\n    }, 30000);\n  }\n}\n\n//# sourceURL=webpack://tap-player/./src/lib/playerFunctions.js?");

/***/ }),

/***/ "./src/lib/skeleton.js":
/*!*****************************!*\
  !*** ./src/lib/skeleton.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializePlayer)\n/* harmony export */ });\nfunction initializePlayer(elementId) {\n  var hlsScript = document.createElement(\"script\");\n  hlsScript.setAttribute(\"src\", \"https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.5.14/hls.min.js\");\n  console.log(\"Lol \", hlsScript);\n  console.log(\"Woah \", document.getElementsByTagName(\"head\")[0]);\n  document.getElementsByTagName(\"head\")[0].appendChild(hlsScript);\n  document.getElementById(elementId).innerHTML = \"<div class=\\\"Twrapper\\\">\\n        <video id=\\\"Tplayer\\\">\\n            <source src=\\\"https://www.w3schools.com/tags/movie.mp4\\\" type=\\\"video/mp4\\\">\\n        </video>\\n        <div style=\\\"width: 0%;display: none;\\\" id=\\\"Tplayer_adverts\\\">\\n            <img src=\\\"https://mailbakery.s3.amazonaws.com/wp-content/uploads/2015/06/26160320/neiman_marcus.gif\\\"\\n                style=\\\"width: 100%;\\\" />\\n        </div>\\n        <div class=\\\"Tplayer_main_wrapper\\\">\\n            <div class=\\\"Tplayer_main_btns\\\">\\n                <div class=\\\"Tplayer_main_play\\\">\\n                    <img src=\\\"http://assets.stickpng.com/images/580b57fcd9996e24bc43c4f9.png\\\" width=\\\"100px\\\"\\n                        alt=\\\"play-image\\\" />\\n                </div>\\n                <div class=\\\"Tplayer_main_buffer\\\">\\n                    <div class=\\\"loader-6 center\\\"><span></span></div>\\n                </div>\\n      \\n            </div>\\n            <div class=\\\"Tplayer_quality_switcher\\\">\\n                <div class=\\\"Tplayer_quality_box\\\">\\n                    <ul class=\\\"Tplayer_quality_ul\\\">\\n                        <li class=\\\"Tplayer_quality_list_styles\\\" onclick=\\\"switchQualityToAuto(this)\\\">Auto <span\\n                                id=\\\"Tplayer_current_auto_quality\\\"></span></li>\\n                    </ul>\\n                </div>\\n            </div>\\n            <div class=\\\"Tplayer_controls\\\">\\n                <div class=\\\"Tplayer_buttons\\\">\\n                    <div class=\\\"Tplayer_buttons_container\\\">\\n                        <div class=\\\"Tplayer_btn_space\\\">\\n                            <button class=\\\"Tplayer_btn Tplayer_10_sec_rewind\\\">\\n                                <img src=\\\"images/rewind.svg\\\" class=\\\"Tplayer_seekable_btn\\\" />\\n                            </button>\\n                        </div>\\n                        <div class=\\\"Tplayer_btn_space\\\" style=\\\"margin: auto\\\">\\n                            <button class=\\\"Tplayer_btn Tplayer_play\\\">\\n                                <img src=\\\"images/play.svg\\\" width=\\\"15px\\\" />\\n                            </button>\\n                            <button class=\\\"Tplayer_btn Tplayer_pause\\\">\\n                                <img src=\\\"images/pause.svg\\\" width=\\\"15px\\\" />\\n                            </button>\\n                            <button class=\\\"Tplayer_btn Tplayer_replay\\\">\\n                                <img src=\\\"images/replay.svg\\\" width=\\\"15px\\\" />\\n                            </button>\\n                        </div>\\n                        <div class=\\\"Tplayer_btn_space\\\">\\n                            <button class=\\\"Tplayer_btn Tplayer_10_sec_forward\\\">\\n                                <img src=\\\"images/forward.svg\\\" class=\\\"Tplayer_seekable_btn\\\" />\\n                            </button>\\n                        </div>\\n      \\n                    </div>\\n                </div>\\n                <div class=\\\"Tplayer_bar\\\">\\n                    <div class=\\\"Tplayer_timer\\\">\\n                        <div class=\\\"Tplayer_current_time\\\">0:00</div>\\n                    </div>\\n                    <div class=\\\"Tplayer_bar_container\\\">\\n                        <div class=\\\"Tplayer_progress\\\"></div>\\n                        <div class=\\\"Tplayer_buffered\\\"></div>\\n                    </div>\\n                    <div class=\\\"Tplayer_timer\\\">\\n                        <div class=\\\"Tplayer_total_time\\\">0:00</div>\\n                    </div>\\n                </div>\\n                <div class=\\\"Tplayer_resolution\\\">\\n                    <div class=\\\"Tplayer_btn_space\\\">\\n      \\n                        <button class=\\\"Tplayer_btn \\\" id=\\\"Tplayer_volume\\\">\\n                            <img src=\\\"images/volume.svg\\\" class=\\\"Tplayer_volume_btn\\\" />\\n                        </button>\\n                    </div>\\n                    <div class=\\\"Tplayer_btn_space\\\">\\n                        <button class=\\\"Tplayer_btn \\\" id=\\\"Tplayer_settings\\\">\\n                            <img src=\\\"images/cog.svg\\\" class=\\\"Tplayer_setting_btn\\\" />\\n                        </button>\\n                    </div>\\n                    <div class=\\\"Tplayer_btn_space\\\">\\n                        <button class=\\\"Tplayer_btn \\\" id=\\\"Tplayer_fullScr\\\">\\n                            <img src=\\\"images/expand.svg\\\" class=\\\"Tplayer_expand_btn\\\" />\\n                        </button>\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n      </div>\";\n}\n\n//# sourceURL=webpack://tap-player/./src/lib/skeleton.js?");

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCurrentElement\": () => (/* binding */ getCurrentElement),\n/* harmony export */   \"getElemByClass\": () => (/* binding */ getElemByClass),\n/* harmony export */   \"addElementAnyWhereInDom\": () => (/* binding */ addElementAnyWhereInDom),\n/* harmony export */   \"addEventsInElements\": () => (/* binding */ addEventsInElements)\n/* harmony export */ });\n/*  @Param childElem to get the child reference\r\n    @Param parentElem to get the parent reference\r\n*/\nfunction getCurrentElement(element) {\n  var elementById = document.getElementById(element);\n  var elementByClassName = document.getElementsByClassName(element)[0];\n\n  if (!elementById) {} else {\n    return elementById;\n  }\n\n  if (!elementByClassName) {\n    return false;\n  } else {\n    return elementByClassName;\n  }\n}\nfunction getElemByClass(elem) {\n  return document.getElementsByClassName(elem)[0];\n}\nfunction addElementAnyWhereInDom(elem, parent) {\n  var elementFound = getCurrentElement(parent);\n\n  if (elementFound) {\n    elementFound.innerHTML = elem.outerHTML;\n  }\n}\nfunction addEventsInElements(elem, eventName, cb) {\n  console.log(\"Hey \", elem, eventName);\n  elem.addEventListener(eventName, cb);\n}\n\n//# sourceURL=webpack://tap-player/./src/utils/dom.js?");

/***/ }),

/***/ "hls.js":
/*!**********************!*\
  !*** external "Hls" ***!
  \**********************/
/***/ ((module) => {

module.exports = Hls;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;