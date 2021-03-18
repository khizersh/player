import {
  CURRENT_VIDEO_URL,
  IS_PLAYING,
  IS_QUALITY_BOX_OPEN,
} from "../controls/PlayerConst";
import PlayerActions from "../controls/PlayerActions";
import HttpLiveStreaming from "../HttpLiveStreaming";

var PlayerAction = new PlayerActions();

export default function PlayerObserver() {
  function managePlayerPlayingState() {
    if (IS_PLAYING) {
      PlayerAction.setPlayerOnPlaying();
    } else {
      PlayerAction.setPlayerOnPause();
    }
  }
  return {
    notify: function (index) {
      managePlayerPlayingState();
    },
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
    notify: function (index) {
      manageQualityBoxState();
    },
  };
}

export function ScriptLoadedObserver() {
  return {
    notify: function (index) {
      if (window.Hls) {
        var hlsObj = new HttpLiveStreaming();
        hlsObj.loadHlsVideo();
      }
    },
  };
}
