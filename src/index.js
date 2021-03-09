import { loadPlayerWithVideo } from "./lib/hls";
import MainPlayer, { checkRefs } from "./lib/playerFunctions";
import initializePlayer from "./lib/skeleton";

initializePlayer("video-player");
checkRefs();
// MainPlayer();
loadPlayerWithVideo(
  "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8"
);
