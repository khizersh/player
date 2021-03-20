import { cssForPlayer } from "./../css/index";
import { observer, scriptObserver } from "../core/HTTPStreaming/HTTPObserver";

export function addScriptsInHtml(scripts) {
  for (let i = 0; i < scripts.length; i++) {
    var scriptTag = document.createElement("script");
    scriptTag.type = "text/javascript";
    scriptTag.addEventListener("load", function(event) {
      observer.notifyObserver(scriptObserver);
    });
    scriptTag.setAttribute("src", scripts[i]);
    document.getElementsByTagName("head")[0].appendChild(scriptTag);
  }
}

export function getElementReference(classOrId) {
  var byId = document.getElementById(classOrId);
  var byClass = document.getElementsByClassName(classOrId)[0];
  if (byId) {
    return byId;
  } else {
    if (byClass) {
      return byClass;
    } else {
      return false;
    }
  }
}
export function addCSSInDom() {
  var styleTag = document.createElement("style");
  styleTag.innerHTML = cssForPlayer;
  document.getElementsByTagName("head")[0].appendChild(styleTag);
}
