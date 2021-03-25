import TapPlayer from "./core/TapPlayer";

var player = new TapPlayer("video-player", {
  url:
    "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8"
  // "https://streams.simpaisa.com:8443/pitvlive4/saamanews.smil/playlist.m3u8?"
  // "https://vods.tapmad.com/vods/IndianMovies/SecretSuperstar/Low/SecretSuperstar.mp4"
  // "https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
  // "https://dash.akamaized.net/dash264/TestCases/1b/qualcomm/1/MultiRatePatched.mpd"
  // "https://www95.cloudvideo.tv/hls/mfqjqj3lsxo6sr7qw7du3oyi67peyvua6nfdeoq2kpjy6djqkqg5mlx42lta/index-v1-a1.m3u8"
});

player.on("seek", e => {
  console.log(e);
});
player.on("forward", e => {
  console.log(e);
});
player.on("rewind", e => {
  console.log(e);
});
player.on("currentQuality", e => {
  console.log(e);
});
player.on("qualitiesAvailable", e => {
  console.log(e);
});
console.log(player);
