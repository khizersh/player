import TapPlayer from "./core/TapPlayer";

 window.player = new TapPlayer("video-player", {
  url:
    "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8"
    // "https://cdn.ta.tapmad.com/pslseve/e330ea762c3e87ea992cada811a1a458.sdp/pslseve/locpsl4/hdntl=exp=1643621780~acl=%2f*~data=hdntl~hmac=ab23f248903ab12feb3cd30e163c0e8da89eff012ca3ff728a38e6155d86b5d2/chunks.m3u8"
  // "https://streams.simpaisa.com:8443/pitvlive4/saamanews.smil/playlist.m3u8?"
  // "https://vods.tapmad.com/vods/IndianMovies/SecretSuperstar/Low/SecretSuperstar.mp4"
  // "https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
  // "https://dash.akamaized.net/dash264/TestCases/1b/qualcomm/1/MultiRatePatched.mpd"
  // "https://www95.cloudvideo.tv/hls/mfqjqj3lsxo6sr7qw7du3oyi67peyvua6nfdeoq2kpjy6djqkqg5mlx42lta/index-v1-a1.m3u8"
  // "http://185.105.4.106:1935/live/Bahrain%20TV/chunklist.m3u8"
  // "https://vidcdn.vidgyor.com/mediaone-origin/liveabr/mediaone-origin/live1/chunks.m3u8"
});

// player.on("seek", e => {
//   console.log("seek ", e);
// });
// player.on("forward", e => {
//   console.log(e);  
// });
// player.on("rewind", e => {
//   console.log(e);
// });
// player.on("currentQuality", e => {
//   console.log(e);
// });
// player.on("qualitiesAvailable", e => {
//   console.log(e);
// });
// console.log(player);
