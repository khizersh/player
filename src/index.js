import TapPlayer from "./core/TapPlayer";

var player = new TapPlayer("video-player", {
  url:
    "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8"
  // "https://streams.simpaisa.com:8443/pitvlive4/saamanews.smil/playlist.m3u8?"
  // "https://vods.tapmad.com/vods/IndianMovies/SecretSuperstar/Low/SecretSuperstar.mp4"
  // "https://dash.akamaized.net/dash264/TestCases/1b/qualcomm/1/MultiRatePatched.mpd"
});
console.log(player);
