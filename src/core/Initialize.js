import { MainPlayer } from "../markup/MainPlayer";
import { addCSSInDom, addScriptsInHtml } from "../utils/script-service";
import { VendorScripts } from "../vendors";
import HttpLiveStreaming from "./HTTPStreaming/HttpLiveStreaming";
import { allScriptLoaderObsevers } from "./HTTPStreaming/HTTPObserver";

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
  initHLSVideo();
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
