import { MainPlayer } from "../markup/MainPlayer";
import { addScriptsInHtml } from "../utils/script-service";
import { VendorScripts } from "../vendors";

var vidQualityLevels = [];
var hls = {};

function addPlayerToDOM(elementId) {
  var player = document.getElementById(elementId);
  player.innerHTML = MainPlayer;
  return player;
}

function checkIfHlsAvailable(obj) {
  var hlsAvailable = false;
  var interval = setInterval(() => {
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
    hls = new Hls({ maxMaxBufferLength: 30, startFragPrefetch: true });
    hls.loadSource(videoSrc);
    hls.attachMedia(this.playerRef);
    hls.on(Hls.Events.MANIFEST_LOADING, function () {
      //   TplayerHideBuffer("block");
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      //   addQualitiesInPlayer(data.levels);
      //   realTimeVideoQualityChecker();
    });
    hls.on(Hls.Events.ERROR, (e) => {
      //   TplayerHideBuffer("block");
      if (e.details === Hls.ErrorDetails.BUFFER_STALLED_ERROR) {
      }
    });
  } else if (this.playerRef.canPlayType("application/vnd.apple.mpegurl")) {
    this.playerRef.src = videoSrc;
  }
}
function waitForHLS() {
  if (window.Hls) {
    hls = new Hls({ maxMaxBufferLength: 30, startFragPrefetch: true });
    return true;
  } else {
    return false;
  }
}

export function _initializePlayer(id, obj) {
  addScriptsInHtml(VendorScripts);
  addPlayerToDOM(id);
  checkIfHlsAvailable(obj);
}
