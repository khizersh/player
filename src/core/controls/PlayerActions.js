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
  diplayErrorOnPlayer(error) {
    this.getPlayerFullWrapper().style.background = "white";
    this.setPlayerOnPlaying();
    this.getErrorContainerText().innerHTML = error;
    this.getErrorContainer().style.visibility = "visible";
  }
  setPlayerToLiveMode() {
    this.getTotalTimeElement().style.display = "none";
    this.getLiveContainer().style.visibility = "visible";
  }
  setPlayerToVODMode() {
    this.getTotalTimeElement().style.display = "block";
    this.getLiveContainer().style.visibility = "hidden";
  }
  hideQualitySettingButton() {
    this.getQualitySelectButton().style.display = "none";
  }
}
