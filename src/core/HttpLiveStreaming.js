import { CURRENT_VIDEO_URL, PLAYER_TIME_UPDATE } from "./controls/PlayerConst";
import PlayerActions from "./controls/PlayerActions";

export default class HttpLiveStreaming extends PlayerActions {
  constructor() {
    super();
    this.hls = {};
    this.vidQualityLevels = [];
  }

  loadHlsVideo() {
    this.playerRef = this.getVideoRef();
    var videoSrc = CURRENT_VIDEO_URL;
    if (Hls.isSupported()) {
      this.hls = new Hls({ maxMaxBufferLength: 30, startFragPrefetch: true });
      this.hls.loadSource(videoSrc);
      this.hls.attachMedia(this.playerRef);
      this.onVideoDataLoaded();
      this.onBufferEvent();
    } else if (this.playerRef.canPlayType("application/vnd.apple.mpegurl")) {
      this.playerRef.src = videoSrc;
    }
  }
  onVideoDataLoaded() {
    this.hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
      console.log("Ali");

      this.addQualitiesInPlayer(data.levels);
      this.realTimeVideoQualityChecker();
      this.onHLSStreamPlaying();
    });
  }
  onBufferEvent() {
    try {
      this.hls.on(Hls.Events.ERROR, (event, { details }) => {
        console.log(details);

        if (details === Hls.ErrorDetails.BUFFER_STALLED_ERROR) {
          this.setPlayerOnBuffering(true);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
  addQualitiesInPlayer(qualities) {
    var uls = this.getQualityLists();
    uls.innerHTML =
      '<li class="Tplayer_quality_list_styles" onclick="switchQualityToAuto(this)">Auto <span id="Tplayer_current_auto_quality"></span></li>';
    for (let i = qualities.length; i > 0; i--) {
      let li = document.createElement("li");
      li.classList.add("Tplayer_quality_list_styles");
      li.innerHTML = qualities[i - 1].height;
      li.addEventListener("click", (index = i) => {
        this.qualitySwitchBetweenVideo(i - 1);
      });
      uls.append(li);
      this.vidQualityLevels.unshift(qualities[i - 1].height);
    }
  }
  realTimeVideoQualityChecker() {
    this.getCurrentVideoQuality().innerHTML = `(${
      this.vidQualityLevels[
        this.hls.currentLevel == -1 ? this.hls.loadLevel : this.hls.currentLevel
      ]
    })`;
  }
  onHLSStreamPlaying() {
    this.getVideoRef().addEventListener(PLAYER_TIME_UPDATE, () => {
      this.realTimeVideoQualityChecker();
    });
  }
  qualitySwitchBetweenVideo(quality) {
    if (this.hls.currentLevel == quality) {
      return;
    } else {
      this.hls.currentLevel = quality;
    }
  }
  switchQualityToAuto(elem) {
    this.hls.loadLevel = -1;
    elem.innerHTML = '* Auto <span id="Tplayer_current_auto_quality"></span>';
  }
}
