export const cssForPlayer = `
.Twrapper {
  width: 70%;
  position: relative;
  display: flex;
}
#Tplayer {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
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
  background: rgb(0 0 0 / 80%);
  position: absolute;
  bottom: 0px;
  display: flex;
  padding: 5px;
  width: 100%;
  flex-wrap: nowrap;
  height: 30px;
  /* visibility: hidden; */
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
  width: 70%;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;
}
.Tplayer_buttons {
  width: 15%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: auto;
}
.Tplayer_progress {
  height: 7px;
  background: #377c00;
  width: 0%;
  transition: all 0.1s;
  position: absolute;
  border-radius: 10px;
}
.Tplayer_buffered {
  height: 7px;
  background: #6f6f6f;
  width: 0%;
  transition: all 0.1s;
  border-radius: 10px;
}

video::-webkit-media-controls {
  display: none !important;
}
.Tplayer_buttons_container {
  display: flex;
  margin: auto;
}
.Tplayer_btn_space {
  padding: 0 10px 0px 10px;
}
.Tplayer_seekable_btn {
  width: 20px;
}
.Tplayer_resolution {
  width: 15%;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;
}
.Tplayer_bar_container {
  width: 100%;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;
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
}
.Tplayer_main_play {
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.Tplayer_main_buffer {
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.Tplayer_quality_box {
  width: 150px;
  background: rgb(77, 72, 72);
  visibility: hidden;
  overflow-y: scroll;
  height: 200px;
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
`;
