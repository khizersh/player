import { IS_PLAYING } from "../controls/PlayerConst";
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
    notify: function(index) {
      managePlayerPlayingState();
    }
  };
}
