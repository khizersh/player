import { getElementReference } from "../../utils/script-service";

export default class PlayerReferences {
  constructor() {}

  getMainPlayButton() {
    return this.validateElementReference("Tplayer_play");
  }
  getPlayerContainer() {
    return this.validateElementReference("Twrapper");
  }
  getMainPauseButton() {
    return this.validateElementReference("Tplayer_pause");
  }
  getMainReplayButton() {
    return this.validateElementReference("Tplayer_replay");
  }
  getVideoRef() {
    return this.validateElementReference("Tplayer");
  }
  getPlayerFullWrapper() {
    return this.validateElementReference("Tplayer_main_wrapper");
  }
  getFullScreenButton() {
    return this.validateElementReference("Tplayer_fullScr");
  }
  getQualitySelectButton() {
    return this.validateElementReference("Tplayer_settings");
  }
  getProgressBar() {
    return this.validateElementReference("Tplayer_progress");
  }
  getBufferedBar() {
    return this.validateElementReference("Tplayer_buffered");
  }
  getProgressBarContainer() {
    return this.validateElementReference("Tplayer_bar_container");
  }
  getTotalTimeElement() {
    return this.validateElementReference("Tplayer_total_time");
  }
  getCurrentTimeElement() {
    return this.validateElementReference("Tplayer_current_time");
  }
  getOnScreenPlayButton() {
    return this.validateElementReference("Tplayer_main_play");
  }
  getFullPlayerSelection() {
    return this.validateElementReference("Tplayer_main_btns");
  }
  getOnScreenBufferElement() {
    return this.validateElementReference("Tplayer_main_buffer");
  }
  getQualitySelectionBox() {
    return this.validateElementReference("Tplayer_quality_box");
  }
  getQualityLists() {
    return this.validateElementReference("Tplayer_quality_ul");
  }
  getCurrentVideoQuality() {
    return this.validateElementReference("Tplayer_current_auto_quality");
  }
  getErrorContainerText() {
    return this.validateElementReference("err-text");
  }
  getErrorContainer() {
    return this.validateElementReference("err-container");
  }
  getLiveContainer() {
    return this.validateElementReference("Tplayer_live");
  }
  getLiveLogo() {
    return this.validateElementReference("Tplayer_live_logo");
  }
  getVolumeBar() {
    return this.validateElementReference("Tplayer_volume_bar");
  }
  getVolumeButton() {
    return this.validateElementReference("Tplayer_volume");
  }
  getVolumeSlider() {
    return this.validateElementReference("slider");
  }
  validateElementReference(element) {
    var elementRef = getElementReference(element);
    if (elementRef) {
      return elementRef;
    } else {
      return false;
    }
  }
}
