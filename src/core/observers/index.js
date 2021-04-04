import {
  CURRENT_VIDEO_URL,
  IS_PLAYING,
  IS_QUALITY_BOX_OPEN,
  IS_VIDEO_LIVE
} from "../controls/PlayerConst";
import PlayerActions from "../controls/PlayerActions";
import { allScriptLoaderObsevers } from "../HTTPStreaming/HttpLiveStreaming";

var PlayerAction = new PlayerActions();
export var OBSERVING_STATE = "";

export default function PlayerObserver() {
  function managePlayerPlayingState() {
    if (IS_PLAYING) {
      PlayerAction.setPlayerOnPlaying();
    } else {
      PlayerAction.setPlayerOnPause();
    }
  }
  function handleOnScreenBuffer() {
    PlayerAction.setPlayerOnBuffering(true);
  }
  return {
    notify: function(index) {
      if (OBSERVING_STATE == "play") {
        managePlayerPlayingState();
      } else if (OBSERVING_STATE == "buffer") {
        handleOnScreenBuffer();
      }
    }
  };
}

export function QualityBoxObserver() {
  function manageQualityBoxState() {
    if (IS_QUALITY_BOX_OPEN) {
      PlayerAction.showQualityBox();
    } else {
      PlayerAction.hideQualityBox();
    }
  }
  return {
    notify: function(index) {
      manageQualityBoxState();
    }
  };
}

export function LiveStreamObserver() {
  function checkIfVideoIsLive() {
    if (IS_VIDEO_LIVE) {
      PlayerAction.setPlayerToLiveMode();
    } else {
      PlayerAction.setPlayerToVODMode();
    }
  }
  return {
    notify: function() {
      checkIfVideoIsLive();
    }
  };
}
