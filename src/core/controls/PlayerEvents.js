import { Subject } from "../../apis/Observer";
import PlayerObserver, {
  QualityBoxObserver,
  OBSERVING_STATE
} from "../observers";
import { IS_PLAYING, IS_QUALITY_BOX_OPEN } from "./PlayerConst";
import PlayerReferences from "./PlayerReferences";

export default class PlayerEvents extends PlayerReferences {
  constructor() {
    super();
    this.video = this.getVideoRef();
    this.observer = new Subject();
    this.playerObserver = new PlayerObserver();
    this.qualityBoxObserver = new QualityBoxObserver();
    this.observer.subscribeObserver(this.playerObserver);
    this.observer.subscribeObserver(this.qualityBoxObserver);
  }
  PlayVideo() {
    IS_PLAYING = true;
    this.video.play();
    OBSERVING_STATE = "play";
    this.observer.notifyObserver(this.playerObserver);
  }
  PauseVideo() {
    IS_PLAYING = false;
    this.video.pause();
    OBSERVING_STATE = "play";
    this.observer.notifyObserver(this.playerObserver);
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
    OBSERVING_STATE = "buffer";
    var playerBounds = this.getProgressBarContainer().getBoundingClientRect();
    var calcPercent = (elem.layerX / playerBounds.width) * 100;
    var vidSec = (this.video.duration / 100) * calcPercent;
    this.MovePlayerProgress(vidSec);
    this.video.currentTime = vidSec;
    this.vidQualityLevels = [];
    this.observer.notifyObserver(this.playerObserver);
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
  OpenCloseSettingBox() {
    if (IS_QUALITY_BOX_OPEN) {
      IS_QUALITY_BOX_OPEN = false;
      this.observer.notifyObserver(this.qualityBoxObserver);
    } else {
      IS_QUALITY_BOX_OPEN = true;
      this.observer.notifyObserver(this.qualityBoxObserver);
    }
  }
}
