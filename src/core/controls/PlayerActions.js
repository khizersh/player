import PlayerReferences from "./PlayerReferences";

export default class PlayerActions extends PlayerReferences {
  constructor() {
    super();
  }
  playVideo() {
    var video = this.getVideoRef();
    video.play();
  }
}
