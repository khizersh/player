/*  @Param childElem to get the child reference
    @Param parentElem to get the parent reference
*/

export function getCurrentElement(element) {
  var elementById = document.getElementById(element);
  var elementByClassName = document.getElementsByClassName(element)[0];
  if (!elementById) {
  } else {
    return elementById;
  }
  if (!elementByClassName) {
    return false;
  } else {
    return elementByClassName;
  }
}
export function getElemByClass(elem) {
  return document.getElementsByClassName(elem)[0];
}
export function addElementAnyWhereInDom(elem, parent) {
  var elementFound = getCurrentElement(parent);
  if (elementFound) {
    elementFound.innerHTML = elem.outerHTML;
  }
}

export function addEventsInElements(elem, eventName, cb) {
  elem.addEventListener(eventName, cb);
}
