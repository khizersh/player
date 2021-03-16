import { IS_PLAYING, IS_QUALITY_BOX_OPEN } from "../controls/PlayerConst";
import PlayerActions from "../controls/PlayerActions";

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
      PlayerAction.hideQualityBox();
    } else {
      PlayerAction.showQualityBox();
    }
  }
  return {
    notify: function (index) {
      manageQualityBoxState();
    },
  };
}
