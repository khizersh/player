import {
  CLICK,
  IS_PLAYING,
  PLAYER_PROGRESS,
  PLAYER_TIME_UPDATE
} from "./PlayerConst";
import PlayerEvents from "./PlayerEvents";
import { secondsToHms } from "./../../utils/index";
export default class PlayerControls extends PlayerEvents {
  constructor() {
    super();
    this.addPlayEvent();
    this.addPauseEvent();
    this.addOnScreenBtnPlayEvent();
    this.addOnScreenPlayPauseEvent();
    this.addVideoRewindEvent();
    this.addVideoForwardEvent();
    this.addBufferedSlider();
    this.addVideoTimeUpdate();
    this.addVideoSeek();
    this.addLoadedMetaData();
    this.addFullScreenEvent();
    this.addSettingsOption();
  }
  addOnScreenBtnPlayEvent() {
    let onScreenPlayBtn = this.getOnScreenPlayButton();
    this.addListeners(onScreenPlayBtn, CLICK, e => {
      e.stopPropagation();
      this.PlayVideo();
    });
  }
  addPlayEvent() {
    let playBtn = this.getMainPlayButton();
    this.addListeners(playBtn, CLICK, () => {
      this.PlayVideo();
    });
  }
  addPauseEvent() {
    let pauseBtn = this.getMainPauseButton();
    this.addListeners(pauseBtn, CLICK, () => {
      this.PauseVideo();
    });
  }
  addOnScreenPlayPauseEvent() {
    let mainScreen = this.getFullPlayerSelection();
    this.addListeners(mainScreen, CLICK, () => {
      if (IS_PLAYING) {
        this.PauseVideo();
      } else {
        this.PlayVideo();
      }
    });
  }
  addVideoRewindEvent() {
    let rewindBtn = this.getVideoRewindButton();
    this.addListeners(rewindBtn, CLICK, () => {
      this.RewindVideo();
    });
  }
  addVideoForwardEvent() {
    let forward = this.getVideoForwardButton();
    this.addListeners(forward, CLICK, () => {
      this.ForwardVideo();
    });
  }
  addBufferedSlider() {
    let bufferedBar = this.getBufferedBar();
    this.addListeners(this.video, PLAYER_PROGRESS, () => {
      this.MoveBufferedRangeInVideo(bufferedBar);
    });
  }
  addVideoTimeUpdate() {
    this.addListeners(this.video, PLAYER_TIME_UPDATE, () => {
      let currentTime = this.video.currentTime;
      this.MovePlayerProgress(currentTime);
      this.getCurrentTimeElement().innerHTML = secondsToHms(currentTime);
      this.getOnScreenBufferElement().style.display = "none";
    });
  }
  addVideoSeek() {
    let progressBarContainer = this.getProgressBarContainer();
    this.addListeners(progressBarContainer, CLICK, e => {
      this.SeekVideoTo(e);
    });
  }
  addLoadedMetaData() {
    let totalTime = this.getTotalTimeElement();
    this.video.onloadedmetadata = () => {
      totalTime.innerHTML = secondsToHms(this.video.duration);
      this.getOnScreenBufferElement().style.display = "none";
    };
  }
  addFullScreenEvent() {
    let fullScr = this.getFullScreenButton();
    this.addListeners(fullScr, CLICK, () => {
      this.SwitchToFullScreen();
    });
  }
  addSettingsOption() {
    let settings = this.getQualitySelectButton();
    this.addListeners(settings, CLICK, () => {
      this.OpenCloseSettingBox();
    });
  }
  addListeners(element, name, cb) {
    element.addEventListener(name, cb);
  }
}
