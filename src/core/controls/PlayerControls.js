import {
  CLICK,
  IS_PLAYING,
  PLAYER_PROGRESS,
  PLAYER_TIME_UPDATE,
  DBL_CLICK,
  KEYDOWN
} from "./PlayerConst";
import PlayerEvents from "./PlayerEvents";
import { secondsToHms, trigger } from "./../../utils/index";
export default class PlayerControls extends PlayerEvents {
  constructor() {
    super();
    this.addPlayEvent();
    this.addPauseEvent();
    this.addOnScreenBtnPlayEvent();
    this.addOnScreenPlayPauseEvent();
    this.addVideoForwardEvent();
    this.addBufferedSlider();
    this.addVideoTimeUpdate();
    this.addVideoSeek();
    this.addLoadedMetaData();
    this.addFullScreenEvent();
    this.addSettingsOption();
    this.goFullScreenOnDblClick();
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

  addVideoForwardEvent() {
    this.addListeners(document, KEYDOWN, e => {
      if (e.keyCode == "37") {
        this.RewindVideo();
      } else if (e.keyCode == "39") {
        this.ForwardVideo();
      } else if (e.keyCode == "32") {
        if (IS_PLAYING) {
          this.PauseVideo();
        } else {
          this.PlayVideo();
        }
      }
    });
  }
  addBufferedSlider() {
    let bufferedBar = this.getBufferedBar();
    this.addListeners(this.video, PLAYER_PROGRESS, () => {
      this.MoveBufferedRangeInVideo(bufferedBar);
    });
  }
  addVideoTimeUpdate() {
    this.addListeners(this.video, PLAYER_TIME_UPDATE, e => {
      let currentTime = this.video.currentTime;
      this.MovePlayerProgress(currentTime);
      this.getCurrentTimeElement().innerHTML = secondsToHms(currentTime);
      this.getOnScreenBufferElement().style.visibility = "hidden";
      trigger("playing", {
        currentTime: this.video.currentTime,
        totalTime: this.video.duration
      });
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
      this.getOnScreenBufferElement().style.visibility = "hidden";
      this.getOnScreenPlayButton().style.display = "block";
    };
  }
  addFullScreenEvent() {
    let fullScr = this.getFullScreenButton();
    this.addListeners(fullScr, CLICK, () => {
      this.SwitchToFullScreen();
    });
  }

  goFullScreenOnDblClick() {
    let wrapper = this.getFullPlayerSelection();
    this.addListeners(wrapper, DBL_CLICK, e => {
      e.stopPropagation();
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
