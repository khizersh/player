import { getElementReference } from "../../utils/script-service";

export default class PlayerReferences {
  constructor() {}

  getMainPlayButton() {
    return this.validateElementReference("Tplayer_play");
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
  getVideoForwardButton() {
    return this.validateElementReference("Tplayer_10_sec_forward");
  }
  getVideoRewindButton() {
    return this.validateElementReference("Tplayer_10_sec_rewind");
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

  validateElementReference(element) {
    var elementRef = getElementReference(element);
    if (elementRef) {
      return elementRef;
    } else {
      return false;
    }
  }
}
