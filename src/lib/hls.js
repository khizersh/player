import Hls from "hls.js";
var vidQualityLevels = [];
var hls = {};
export function loadPlayerWithVideo(url) {
  if (hls.currentLevel) {
    hls.destroy();
  }
  var video = document.getElementById("Tplayer");
  // var videoSrc = 'https://streams.simpaisa.com:8443/tap/smil:ptvsportsnew.smil/playlist.m3u8';
  var videoSrc = url;
  if (Hls.isSupported()) {
    hls = new Hls({ maxMaxBufferLength: 30, startFragPrefetch: true });
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_LOADING, function () {
      TplayerHideBuffer("block");
    });
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(hls.subtitleTracks);
      addQualitiesInPlayer(data.levels);
      realTimeVideoQualityChecker();
      // hls.loadLevel = data.levels.length - 1;
    });
    hls.on(Hls.Events.ERROR, (e) => {
      TplayerHideBuffer("block");
      if (e.details === Hls.ErrorDetails.BUFFER_STALLED_ERROR) {
      }
    });
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = videoSrc;
  }
}

function playVideo() {
  var vidUrl = document.getElementById("vidUrl");
  if (vidUrl.value) {
    TplayerPauseVideo();
    loadPlayerWithVideo(vidUrl.value);
  } else {
    alert("No Url Found");
  }
}
function qualitySwitchBetweenVideo(quality) {
  console.log(quality);
  if (hls.currentLevel == quality) {
    return;
  } else {
    hls.currentLevel = quality;
  }
}
function switchQualityToAuto(elem) {
  hls.loadLevel = -1;
  elem.innerHTML = '* Auto <span id="Tplayer_current_auto_quality"></span>';
}
function addQualitiesInPlayer(qualities) {
  var uls = document.getElementsByClassName("Tplayer_quality_ul")[0];
  uls.innerHTML =
    '<li class="Tplayer_quality_list_styles" onclick="switchQualityToAuto(this)">Auto <span id="Tplayer_current_auto_quality"></span></li>';
  for (let i = qualities.length; i > 0; i--) {
    let li = document.createElement("li");
    li.classList.add("Tplayer_quality_list_styles");
    li.innerHTML = qualities[i - 1].height;
    li.addEventListener("click", function (index = i) {
      qualitySwitchBetweenVideo(i - 1);
    });
    uls.append(li);
    vidQualityLevels.unshift(qualities[i - 1].height);
  }
}

export function realTimeVideoQualityChecker() {
  document.getElementById("Tplayer_current_auto_quality").innerHTML = `(${
    vidQualityLevels[hls.currentLevel == -1 ? hls.loadLevel : hls.currentLevel]
  })`;
}
