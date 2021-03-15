import { CLICK } from "./PlayerConst";
import PlayerEvents from "./PlayerEvents";

export default class PlayerControls extends PlayerEvents {
  constructor() {
    super();
    let playBtn = this.getMainPlayButton();
    this.addListeners(playBtn, CLICK, () => {
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
    this.addEventListener(pauseBtn, CLICK, () => {
      this.PauseVideo();
    });
  }
  addListeners(element, name, cb) {
    element.addEventListener(name, cb);
  }
}
