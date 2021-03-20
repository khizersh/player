export function secondsToHms(e) {
  var h = Math.floor(e / 3600)
      .toString()
      .padStart(2, "0"),
    m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, "0"),
    s = Math.floor(e % 60)
      .toString()
      .padStart(2, "0");
  if (h == "00") {
    return m + ":" + s;
  } else {
    return h + ":" + m + ":" + s;
  }
}
export function checkFileFormat(url) {
  var ext = url.split(".");
  ext = ext[ext.length - 1];
  return ext;
}
