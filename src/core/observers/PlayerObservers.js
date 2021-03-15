import { IS_PLAYING } from "../controls/PlayerConst";

export default function PlayerObserver() {
  console.log(IS_PLAYING);

  return {
    notify: function (index) {
      console.log(IS_PLAYING);
      console.log("Observer " + index + " is notified!");
    },
  };
}
