import { getCurrentElement } from "../utils/dom";

const NeedReferences = [
  "Tplayer_play",
  "Tplayer_pause",
  "Tplayer_replay",
  "Tplayer",
  "Twrapper",
  "Tplayer_fullScr",
  "Tplayer_progress",
  "Tplayer_buffered",
  "Tplayer_bar",
  "Tplayer_bar_container",
  "Tplayer_10_sec_rewind",
  "Tplayer_10_sec_forward",
  "Tplayer_total_time",
  "Tplayer_current_time",
  "Tplayer_main_play",
  "Tplayer_main_btns",
  "Tplayer_main_buffer",
  "Tplayer_adverts",
  "Tplayer_settings",
  "Tplayer_quality_box",
];
export function makeAllReferencesFromDOM() {
  var allRefs = {};
  for (let i = 0; i < NeedReferences.length; i++) {
    let tempRef = getCurrentElement(NeedReferences[i]);
    allRefs[NeedReferences[i]] = tempRef;
  }
  return allRefs;
}
