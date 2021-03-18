import { CURRENT_VIDEO_URL } from "./controls/PlayerConst";
import PlayerControls from "./controls/PlayerControls";
import { _initializePlayer } from "./Initialize";

export default class TapPlayer {
  constructor(wrapper, opts = {}) {
    this.url = opts.url;
    this.wrapper = wrapper;
    this.poster = opts.poster;
    this.playerRef = null;
    this._initPlayer();
    this.playVideo();
  }
  _initPlayer() {
    CURRENT_VIDEO_URL = this.url;
    _initializePlayer(this.wrapper);
  }
  playVideo() {
    var controls = new PlayerControls();
  }
}
