export const cssForPlayer = `
.Twrapper {
  width: 100%;
  height: 100%;
  background: black;
  position: relative;
  display: flex;
}
#Tplayer {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  border-radius: 5px;
}
.Tplayer_configs {
  padding: 0 10px 0 10px;
  width: 30%;
}
body {
  background: #000;
  color: white;
  font-family: monospace;
}
.Tplayer_controls {
  position: absolute;
  bottom: 0px;
  display: flex;
  padding: 5px 20px;
  width: 100%;
  flex-wrap: wrap;
  background: linear-gradient(0deg, rgb(3 2 2 / 32%) 21%, rgb(0 0 0 / 23%) 56%, rgb(255 255 255 / 0%) 100%);
  box-sizing: border-box;
}
.Twrapper:hover .Tplayer_controls {
  visibility: visible;
}
.Tplayer_btn {
  background: transparent;
  border: 0px;
  display: flex;
}

.Tplayer_pause {
  display: none;
}
.Tplayer_replay {
  display: none;
}
.Tplayer_bar {
  margin-bottom: 5px;
  width: 100%;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;
  transition: all 0.3s;
  height: 100%;
  border-radius: 10px;
  box-sizing: border-box;
}
.Tplayer_bar:hover .Tplayer_bar_container {
  box-sizing: border-box;
  height: 6px;
  transition: all 0.3s;
}
// .Tplayer_buttons {
//   margin: auto;
// }
.Tplayer_progress {
  height: 100%;
  background: #fff;
  width: 0%;
  transition: all 0.1s;
  position: absolute;
  border-radius: 10px;
}
.Tplayer_buffered {
  height: 100%;
  background: #6f6f6f;
  width: 0%;
  transition: all 0.1s;
  border-radius: 10px;
}

video::-webkit-media-controls {
  display: none !important;
}

.Tplayer_btn_space {
  padding: 0 10px 0px 10px;
}
.Tplayer_seekable_btn {
  width: 20px;
}
.Tplayer_resolution {
  width: 100%;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: flex-end;
}
.Tplayer_bar_container {
  width: 100%;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  height: 2px;
  background: #414141;
}
.Tplayer_total_time {
  padding: 0 10px 0 10px;
  color: white;
  cursor: context-menu;
}
.Tplayer_current_time {
  padding: 0 10px 0 10px;
  color: white;
  cursor: context-menu;
}
.Tplayer_expand_btn {
  width: 20px;
  cursor: pointer;
}
.Tplayer_setting_btn {
  width: 20px;
  cursor: pointer;
}
.Tplayer_volume_btn {
  width: 20px;
  cursor: pointer;
}
.Tplayer_volume_btn:hover + .Tplayer_volume_changer .Tplayer_volume_bar{
  display: block;
  transition: 1s all;
}
.Tplayer_volume_changer:hover .Tplayer_volume_bar{
  display: block;
  transition: 1s all;
}
.Tplayer_main_wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
}
.Tplayer_main_btns {
  width: inherit;
  height: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.Tplayer_main_play {
  cursor: pointer;
}
.Tplayer_main_buffer {
  cursor: pointer;
}
.Tplayer_quality_box {
  width: 150px;
  background: rgb(77, 72, 72);
  visibility: hidden;
  overflow-y: scroll;
  max-height: 200px;
}
.Tplayer_quality_switcher {
  position: absolute;
  right: 5%;
  bottom: 40px;
}
.Tplayer_quality_list_styles {
  list-style: none;
  padding: 10px;
}
.Tplayer_quality_list_styles:hover {
  background: rgb(124, 118, 118);
}
.Tplayer_quality_ul {
  padding-inline-start: 0px;
}
.svg-styles{
  width: 15px;
}
:-webkit-full-screen video {
  width: 100%;
  height: 100%;
}
#Tplayer_volume:hover ~ .Tplayer_volume_bar {
  visibility: visible;
}
.Tplayer_volume_changer{
  
}
.Tplayer_volume_bar{
  display: none;
}
.err-container{
  width: 70%;
  height: 50px;
  position: absolute;
  top: 0;
  background: black;
  box-shadow: 0px 0px 10px 1px black;
  text-align: center;
  visibility: hidden;
}
.Tplayer_live{
  position: absolute;
  top: 0;
  right: 0;
  background: red;
  padding: 3px 6px 3px 6px;
  margin: 0px;
  font-weight: bold;
  visibility: hidden;
}
.Tplayer_control_section {
  width: 100%;
  display: flex;
  margin: 1% 0%;
  align-items: center;
}
.Tplayer_timer {
  display: flex;
}
`;

export const loaderCss = `.tap-loader {
  height: 32px;
  width: 32px;
}
.tap-loader span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 32px;
  width: 32px;
}
.tap-loader span::before,
.tap-loader span::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 50px;
  width: 50px;
  border: 5px solid #fff;
  border-radius: 50%;
  opacity: 0;
  -webkit-animation: tap-loader-1 1.5s cubic-bezier(0.075, 0.82, 0.165, 1)
    infinite;
  animation: tap-loader-1 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
}
@-webkit-keyframes tap-loader-1 {
  0% {
    -webkit-transform: translate3d(0, 0, 0) scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0) scale(1.5);
    opacity: 0;
  }
}
@keyframes tap-loader-1 {
  0% {
    transform: translate3d(0, 0, 0) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1.5);
    opacity: 0;
  }
}
.tap-loader span::after {
  -webkit-animation: tap-loader-2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s
    infinite;
  animation: tap-loader-2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s
    infinite;
}
@-webkit-keyframes tap-loader-2 {
  0% {
    -webkit-transform: translate3d(0, 0, 0) scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0) scale(1);
    opacity: 0;
  }
}
@keyframes tap-loader-2 {
  0% {
    transform: translate3d(0, 0, 0) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0;
  }
}

.Tplayer_quality_box::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: transparent;
}

.Tplayer_quality_box::-webkit-scrollbar {
  width: 5px;
  background-color: transparent;
}

.Tplayer_quality_box::-webkit-scrollbar-thumb {
  background-color: rgb(0 0 0 / 40%);
  border: 1px solid #555;
}

`;
