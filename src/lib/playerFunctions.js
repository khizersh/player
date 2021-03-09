import { makeAllReferencesFromDOM } from "../apis/references";
import { getCurrentElement } from "../utils/dom";
import { realTimeVideoQualityChecker } from "./hls";
var PlayerReferences = [];

export function checkRefs() {
  PlayerReferences = makeAllReferencesFromDOM();
}

export default function MainPlayer() {
  var isTplayerVideoPlaying = false;
  var isQualityBoxVisible = false;
  playBtn.addEventListener("click", TplayerPlayVideo);
  pauseBtn.addEventListener("click", TplayerPauseVideo);
  TplayerMainBtns.addEventListener("click", TplayerTogglePlayPause);

  replayBtn.addEventListener("click", function () {
    Tplayer.play();
    pauseBtn.style.display = "flex";
    playBtn.style.display = "none";
    replayBtn.style.display = "none";
  });
  Tplayer.addEventListener("timeupdate", function () {
    TplayerCurrentTime.innerHTML = secondsToHms(Tplayer.currentTime);
    realTimeVideoQualityChecker();

    MovePlayerProgress(Tplayer.currentTime);
    if (Tplayer.ended) {
      pauseBtn.style.display = "none";
      playBtn.style.display = "none";
      replayBtn.style.display = "flex";
    }
  });
  Tplayer.addEventListener("playing", (event) => {
    TplayerHideBuffer("none");
  });
  Tplayer.onloadedmetadata = function (e) {
    TplayerHideBuffer("none");
    TplayerShowHidePlayBtn("block");
    TplayerTotalTime.innerHTML = secondsToHms(Tplayer.duration);
  };
  Tplayer.addEventListener("progress", function () {
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
          TplayerBuffered.style.width = buffered + "%";
          break;
        }
      }
    }
  });

  TplayerFullScreen.addEventListener("click", function () {
    openFullscreen(Tplayer);
  });
  Tplayer10SecRewind.addEventListener("click", function () {
    Tplayer.currentTime = Tplayer.currentTime - 10;
  });
  Tplayer10SecForward.addEventListener("click", function () {
    Tplayer.currentTime = Tplayer.currentTime + 10;
  });
  TplayerQualitySettings.addEventListener("click", function () {
    if (isQualityBoxVisible) {
      isQualityBoxVisible = false;
      TplayerQualityBox.style.visibility = "hidden";
    } else {
      TplayerQualityBox.style.visibility = "visible";
      isQualityBoxVisible = true;
    }
  });
  TplayerBarContainer.addEventListener("click", function (e) {
    var playerBounds = TplayerBarContainer.getBoundingClientRect();
    var calcPercent = (e.layerX / playerBounds.width) * 100;
    var vidSec = (Tplayer.duration / 100) * calcPercent;
    MovePlayerProgress(vidSec);

    Tplayer.currentTime = vidSec;
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
    var progress = moveTo / Tplayer.duration;
    TplayerProgress.style.width = progress * 100 + "%";
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
    var playPromise = Tplayer.play();
    playPromise
      .then((e) => {})
      .catch((error) => {
        console.log(error);
      });
    TplayerShowHidePlayBtn("none");
    playBtn.style.display = "none";
    pauseBtn.style.display = "flex";
    TplayerHideBuffer("none");
  }

  function TplayerPauseVideo() {
    isTplayerVideoPlaying = false;
    Tplayer.pause();
    pauseBtn.style.display = "none";
    playBtn.style.display = "flex";
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
    TplayerMainBuffer.style.display = param;
  }
  function TplayerShowHidePlayBtn(param) {
    TplayerMainPlayBtn.style.display = param;
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
