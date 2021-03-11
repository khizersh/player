import { addHLSScript, _initializePlayer } from "./skeleton";
addHLSScript();

export default class TapPlayer {
  constructor(wrapper, opts = {}) {
    this.url = opts.url;
    this.wrapper = wrapper;
    this.poster = opts.poster;
    this.playerRef = null;
    this._initPlayer();
  }
  _initPlayer() {
    _initializePlayer(this.wrapper, this);
    console.log(this.playerRef);
  }
  playVideo() {
    this.playerRef.play();
    return;
  }
}
