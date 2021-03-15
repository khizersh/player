import { Subject } from "../../apis/Observer";
import PlayerObserver from "../observers/PlayerObservers";
import { IS_PLAYING } from "./PlayerConst";
import PlayerReferences from "./PlayerReferences";

export default class PlayerEvents extends PlayerReferences {
  constructor() {
    super();
    this.video = this.getVideoRef();
    this.observer = new Subject();
    this.pObserver = new PlayerObserver();
    this.observer.subscribeObserver(this.pObserver);
    console.log(this.pObserver);
  }

  PlayVideo() {
    IS_PLAYING = true;
    this.video.play();
    this.observer.notifyObserver(this.pObserver);
  }
  PauseVideo() {
    this.video.pause();
  }
  ForwardVideo() {
    this.video.currentTime += 10;
  }
  RewindVideo() {
    this.video.currentTime -= 10;
  }
  SwitchToFullScreen() {
    if (this.video.requestFullscreen) {
      this.video.requestFullscreen();
    } else if (this.video.webkitRequestFullscreen) {
      /* Safari */
      this.video.webkitRequestFullscreen();
    } else if (this.video.msRequestFullscreen) {
      /* IE11 */
      this.video.msRequestFullscreen();
    }
  }
  SeekVideo() {}
}
