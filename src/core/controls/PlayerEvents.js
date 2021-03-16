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
  }

  PlayVideo() {
    IS_PLAYING = true;
    this.video.play();
    this.observer.notifyObserver(this.pObserver);
  }
  PauseVideo() {
    IS_PLAYING = false;
    this.video.pause();
    this.observer.notifyObserver(this.pObserver);
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
  SeekVideoTo(elem) {
    var playerBounds = this.getProgressBarContainer().getBoundingClientRect();
    var calcPercent = (elem.layerX / playerBounds.width) * 100;
    var vidSec = (this.video.duration / 100) * calcPercent;
    this.MovePlayerProgress(vidSec);
    this.video.currentTime = vidSec;
  }

  MoveBufferedRangeInVideo(element) {
    var video = this.video;
    var duration = video.duration;
    if (duration > 0) {
      for (var i = 0; i < video.buffered.length; i++) {
        if (
          video.buffered.start(video.buffered.length - 1 - i) <
          video.currentTime
        ) {
          let buffered =
            (video.buffered.end(video.buffered.length - 1 - i) / duration) *
            100;
          element.style.width = buffered + "%";
          break;
        }
      }
    }
  }
  MovePlayerProgress(moveTo) {
    let video = this.getVideoRef();
    let progressBar = this.getProgressBar();
    var progress = moveTo / video.duration;
    progressBar.style.width = progress * 100 + "%";
  }
}
