window["__onGCastApiAvailable"] = function (isAvailable) {
  if (isAvailable) {
    initializeCastApi();
  }
};
initializeCastApi = function () {
  cast.framework.CastContext.getInstance().setOptions({
    receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
    autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
  });

  var player = new cast.framework.RemotePlayer();
  var playerController = new cast.framework.RemotePlayerController(player);
  playerController.addEventListener("currentTimeChanged", function (e) {
    console.log(e);
  });
  playerController.addEventListener(
    cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED,
    function (e) {
      console.log(e);
    }
  );
};
castNow = function () {
  var mediaInfo = new chrome.cast.media.MediaInfo(
    "https://vodss.tapmad.com/vods/CokeFest/Day1/AbdullahSong01DiamondDynamite/master.m3u8",
    "video/m3u8"
  );
  var request = new chrome.cast.media.LoadRequest(mediaInfo);
  var castSession = cast.framework.CastContext.getInstance().getCurrentSession();

  castSession.loadMedia(request).then(
    function () {
      console.log("Load succeed");
    },
    function (errorCode) {
      console.log("Error code: " + errorCode);
    }
  );
};
