import { MainPlayer } from "../markup/MainPlayer";
import {
  addCSSInDom,
  addScriptsInHtml,
  getElementReference
} from "../utils/script-service";
import { VendorScripts } from "../vendors";
import HttpLiveStreaming from "./HTTPStreaming/HttpLiveStreaming";
import { allScriptLoaderObsevers } from "./HTTPStreaming/HTTPObserver";
import { checkFileFormat, addSourceToVideo } from "../utils";
import { CURRENT_VIDEO_URL } from "./controls/PlayerConst";

function addPlayerToDOM(elementId) {
  var player = document.getElementById(elementId);
  player.innerHTML = MainPlayer;
  return player;
}
let hlsJs = new HttpLiveStreaming();
export function _initializePlayer(id) {
  addScriptsInHtml(VendorScripts);
  addCSSInDom();
  addPlayerToDOM(id);
  playVideoAccordingToFormat();
}

function initHLSVideo() {
  allScriptLoaderObsevers.subscribeObserver(
    new (function() {
      return {
        notify: function() {
          hlsJs.loadHlsVideo();
        }
      };
    })()
  );
}
function checkVideoType() {
  var vType = checkFileFormat(CURRENT_VIDEO_URL);
  return vType;
}
function playVideoAccordingToFormat() {
  let format = checkVideoType();
  if (format == "mp4" || format == "webm") {
    let player = getElementReference("Tplayer");
    addSourceToVideo(player, CURRENT_VIDEO_URL, "video/mp4");
  } else if (format == "m3u8" || format == "m3u8?") {
    initHLSVideo();
  } else {
  }
}
