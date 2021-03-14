import PlayerReferences from "./PlayerReferences";

export default class PlayerEvents extends PlayerReferences {
  constructor() {
    super();
    this.video = this.getVideoRef();
  }

  PlayVideo() {
    this.video.play();
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
