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
    } else if (this.detail == Hls.ErrorDetails.FRAG_LOAD_TIMEOUT) {
      return "Failed to load video data, because of network connection.";
    } else if (this.detail == Hls.ErrorDetails.KEY_LOAD_TIMEOUT) {
      return "Failed to load video data, because of network connection.";
    } else if (
      this.detail == Hls.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR
    ) {
      return "The media file doesn't contain content";
    } else if (this.detail == Hls.ErrorDetails.FRAG_DECRYPT_ERROR) {
      return "Can not decrypt video data. The video is corrupted";
    } else if (this.detail == Hls.ErrorDetails.FRAG_PARSING_ERROR) {
      return "Can not parse video data. The video is corrupted";
    } else if (
      this.detail == Hls.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR
    ) {
      return "Incompatible video codec";
    } else if (this.detail == Hls.ErrorDetails.BUFFER_NUDGE_ON_STALL) {
      return "Can not load video data";
    } else if (this.detail == Hls.ErrorDetails.INTERNAL_EXCEPTION) {
      return "Oops something crashed...";
    } else {
      return "Unknown Error";
    }
  }
}
