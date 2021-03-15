import { CLICK, IS_PLAYING } from "./PlayerConst";
import PlayerEvents from "./PlayerEvents";

export default class PlayerControls extends PlayerEvents {
  constructor() {
    super();

    this.addPlayEvent();
    this.addPauseEvent();
    this.addOnScreenBtnPlayEvent();
    this.addOnScreenPlayPauseEvent();
  }
  addOnScreenBtnPlayEvent() {
    let onScreenPlayBtn = this.getOnScreenPlayButton();
    this.addListeners(onScreenPlayBtn, CLICK, () => {
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
  addListeners(element, name, cb) {
    element.addEventListener(name, cb);
  }
}
