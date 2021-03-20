export var allScriptLoaderObsevers = new Subject();
import { Subject } from "../../apis/Observer";

export var observer = new Subject();
export var scriptObserver = new (function ScriptLoadedObserver() {
  return {
    notify: function(index) {
      if (window.Hls) {
        allScriptLoaderObsevers.notifyAllObservers();
        observer.unsubscribeObserver(scriptObserver);
      }
    }
  };
})();
observer.subscribeObserver(scriptObserver);
