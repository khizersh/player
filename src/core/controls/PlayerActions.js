import PlayerReferences from "./PlayerReferences";

export default class PlayerActions extends PlayerReferences {
  constructor() {
    super();
  }

  setPlayerOnPlaying() {
    this.getMainPlayButton().style.display = "none";
    this.getOnScreenPlayButton().style.display = "none";
    this.getMainPauseButton().style.display = "block";
    this.getOnScreenBufferElement().style.display = "none";
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
}
