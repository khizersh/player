import { CURRENT_VIDEO_URL } from "./controls/PlayerConst";
import PlayerReferences from "./controls/PlayerReferences";

export default class HttpLiveStreaming extends PlayerReferences {
  constructor() {
    super();
    this.hls = {};
  }

  loadHlsVideo() {
    this.playerRef = this.getVideoRef();
    var videoSrc = CURRENT_VIDEO_URL;
    if (Hls.isSupported()) {
      this.hls = new Hls({ maxMaxBufferLength: 30, startFragPrefetch: true });
      this.hls.loadSource(videoSrc);
      this.hls.attachMedia(this.playerRef);
    } else if (this.playerRef.canPlayType("application/vnd.apple.mpegurl")) {
      this.playerRef.src = videoSrc;
    }
  }
  onVideoDataLoaded() {}
}
