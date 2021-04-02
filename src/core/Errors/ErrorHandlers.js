import Hls from "hls.js";

export default class ErrorHandlers {
  constructor() {
    this.detail = "";
  }
  catchNetworkErrors(detail) {
    this.detail = detail;
    if (this.detail == Hls.ErrorDetails.MANIFEST_LOAD_ERROR) {
      return "Can not load video data";
    } else if (this.detail == Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT) {
      return "Network timeout while loading video data";
    } else if (this.detail == Hls.ErrorDetails.MANIFEST_PARSING_ERROR) {
      return "Video data might be corrupted";
    } else if (this.detail == Hls.ErrorDetails.LEVEL_EMPTY_ERROR) {
      return "No more chunks are found at this quality level";
    } else if (this.detail == Hls.ErrorDetails.LEVEL_LOAD_ERROR) {
      return "Can not load video due to internet connection";
    } else if (this.detail == Hls.ErrorDetails.FRAG_LOAD_ERROR) {
      return "Interrupted internet connection. Can not download video data.";
    } else {
      return "Unknown Error";
    }
  }
}
