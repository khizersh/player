import PlayerReferences from "./PlayerReferences";

export default class PlayerActions extends PlayerReferences {
  constructor() {
    super();
  }

  setPlayerOnPlaying() {
    this.getMainPlayButton().style.display = "none";
    this.getOnScreenPlayButton().style.display = "none";
    this.getMainPauseButton().style.display = "block";
    this.setPlayerOnBuffering(false);
  }
  setPlayerOnPause() {
    this.getMainPlayButton().style.display = "block";
    this.getOnScreenPlayButton().style.display = "block";
    this.getMainPauseButton().style.display = "none";
  }
  showQualityBox() {
    this.getQualitySelectionBox().style.visibility = "visible";
  }
  hideQualityBox() {
    this.getQualitySelectionBox().style.visibility = "hidden";
  }
  setPlayerOnBuffering(val) {
    if (val) {
      this.getOnScreenBufferElement().style.visibility = "visible";
    } else {
      this.getOnScreenBufferElement().style.visibility = "hidden";
    }
  }
}
