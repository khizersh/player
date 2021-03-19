import TapPlayer from "./core/TapPlayer";

var player = new TapPlayer("video-player", {
  url:
    // "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8"
    "https://streams.simpaisa.com:8443/pitvlive4/saamanews.smil/playlist.m3u8?"
});
console.log(player);
