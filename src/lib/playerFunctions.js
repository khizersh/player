import { makeAllReferencesFromDOM } from "../apis/references";
import { addEventsInElements } from "../utils/dom";
import { realTimeVideoQualityChecker } from "./hls";
var PlayerReferences = [];

export function checkRefs() {
  PlayerReferences = makeAllReferencesFromDOM();
  return PlayerReferences;
}

export default function MainPlayer() {
  var isTplayerVideoPlaying = false;
  var isQualityBoxVisible = false;
  var PlayerElements = checkRefs();
  var P = PlayerElements;
  addEventsInElements(P.Tplayer_play, "click", TplayerPlayVideo);
  addEventsInElements(P.Tplayer_pause, "click", TplayerPauseVideo);
  addEventsInElements(P.Tplayer_main_btns, "click", TplayerTogglePlayPause);
  addEventsInElements(P.Tplayer_replay, "click", function () {
    P.Tplayer.play();
    P.Tplayer_pause.style.display = "flex";
    P.Tplayer_play.style.display = "none";
    P.Tplayer_replay.style.display = "none";
  });

  addEventsInElements(P.Tplayer, "timeupdate", function () {
    P.Tplayer_current_time.innerHTML = secondsToHms(P.Tplayer.currentTime);
    realTimeVideoQualityChecker();
    MovePlayerProgress(P.Tplayer.currentTime);
    if (P.Tplayer.ended) {
      P.Tplayer_pause.style.display = "none";
      P.Tplayer_play.style.display = "none";
      P.Tplayer_replay.style.display = "flex";
    }
  });
  addEventsInElements(P.Tplayer, "playing", function () {
    TplayerHideBuffer("none");
  });

  P.Tplayer.onloadedmetadata = function (e) {
    TplayerHideBuffer("none");
    TplayerShowHidePlayBtn("block");
    P.Tplayer_total_time.innerHTML = secondsToHms(P.Tplayer.duration);
  };
  addEventsInElements(P.Tplayer, "progress", function () {
    var Tplayer = P.Tplayer;
    var duration = Tplayer.duration;
    if (duration > 0) {
      for (var i = 0; i < Tplayer.buffered.length; i++) {
        if (
          Tplayer.buffered.start(Tplayer.buffered.length - 1 - i) <
          Tplayer.currentTime
        ) {
          let buffered =
            (Tplayer.buffered.end(Tplayer.buffered.length - 1 - i) / duration) *
            100;
          P.Tplayer_buffered.style.width = buffered + "%";
          break;
        }
      }
    }
  });

  P.Tplayer_fullScr.addEventListener("click", function () {
    openFullscreen(Tplayer);
  });
  P.Tplayer_10_sec_rewind.addEventListener("click", function () {
    Tplayer.currentTime = Tplayer.currentTime - 10;
  });
  P.Tplayer_10_sec_forward.addEventListener("click", function () {
    Tplayer.currentTime = Tplayer.currentTime + 10;
  });
  P.Tplayer_settings.addEventListener("click", function () {
    var TplayerQualityBox = P.Tplayer_quality_box;
    if (isQualityBoxVisible) {
      isQualityBoxVisible = false;
      TplayerQualityBox.style.visibility = "hidden";
    } else {
      TplayerQualityBox.style.visibility = "visible";
      isQualityBoxVisible = true;
    }
  });
  P.Tplayer_bar_container.addEventListener("click", function (e) {
    var playerBounds = P.Tplayer_bar_container.getBoundingClientRect();
    var calcPercent = (e.layerX / playerBounds.width) * 100;
    var vidSec = (P.Tplayer.duration / 100) * calcPercent;
    MovePlayerProgress(vidSec);

    P.Tplayer.currentTime = vidSec;
  });
  function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  function MovePlayerProgress(moveTo) {
    var progress = moveTo / P.Tplayer.duration;
    P.Tplayer_progress.style.width = progress * 100 + "%";
  }
  function secondsToHms(e) {
    var h = Math.floor(e / 3600)
        .toString()
        .padStart(2, "0"),
      m = Math.floor((e % 3600) / 60)
        .toString()
        .padStart(2, "0"),
      s = Math.floor(e % 60)
        .toString()
        .padStart(2, "0");
    if (h == "00") {
      return m + ":" + s;
    } else {
      return h + ":" + m + ":" + s;
    }
  }

  function TplayerPlayVideo() {
    // playAdsOnPlayer();
    isTplayerVideoPlaying = true;
    var playPromise = P.Tplayer.play();
    playPromise
      .then((e) => {})
      .catch((error) => {
        console.log(error);
      });
    TplayerShowHidePlayBtn("none");
    P.Tplayer_play.style.display = "none";
    P.Tplayer_pause.style.display = "flex";
    TplayerHideBuffer("none");
  }

  function TplayerPauseVideo() {
    isTplayerVideoPlaying = false;
    P.Tplayer.pause();
    P.Tplayer_pause.style.display = "none";
    P.Tplayer_play.style.display = "flex";
    TplayerShowHidePlayBtn("block");
    TplayerHideBuffer("none");
  }
  function TplayerTogglePlayPause() {
    if (isTplayerVideoPlaying) {
      TplayerPauseVideo();
    } else {
      TplayerPlayVideo();
    }
  }
  function TplayerHideBuffer(param) {
    P.Tplayer_main_buffer.style.display = param;
  }
  function TplayerShowHidePlayBtn(param) {
    P.Tplayer_main_play.style.display = param;
  }
  (function onInit() {
    TplayerShowHidePlayBtn("none");
  })();

  function playAdsOnPlayer() {
    setTimeout(() => {
      Tplayer.style.width = "60%";
      TplayerAds.style.width = "40%";
      TplayerAds.style.display = "block";
      setTimeout((e) => {
        Tplayer.style.width = "100%";
        TplayerAds.style.width = "0%";
        TplayerAds.style.display = "none";
      }, 10000);
    }, 30000);
  }
}
