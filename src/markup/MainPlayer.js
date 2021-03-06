import {
  playSVG,
  pauseSVG,
  replay,
  rewind,
  forward,
  playMain,
  expand
} from "./Images";

export const MainPlayer = `<div class="Twrapper">
<video id="Tplayer"></video>
<div style="width: 0%;display: none;" id="Tplayer_adverts">
   <img src="https://mailbakery.s3.amazonaws.com/wp-content/uploads/2015/06/26160320/neiman_marcus.gif"
      style="width: 100%;" />
</div>
<div class="Tplayer_main_wrapper">
   <div class="Tplayer_main_btns">
      <div class="err-container">
         <p class="err-text">This video can not be played</p>
      </div>
      <div class="Tplayer_main_play" style="display: none">
         ${playMain.default}
      </div>
      <div class="Tplayer_main_buffer">
         <div class="tap-loader center"><span></span></div>
      </div>
   </div>
   <div class="Tplayer_quality_switcher">
      <div class="Tplayer_quality_box">
         <ul class="Tplayer_quality_ul">
            <li class="Tplayer_quality_list_styles" onclick="switchQualityToAuto(this)">Auto <span
               id="Tplayer_current_auto_quality"></span></li>
         </ul>
      </div>
   </div>
   <div class="Tplayer_live">
      <div class="Tplayer_live_logo">LIVE</div>
   </div>
   <div class="Tplayer_controls">
      <div class="Tplayer_bar">
         <div class="Tplayer_bar_container">
            <div class="Tplayer_progress"></div>
            <div class="Tplayer_buffered"></div>
         </div>
      </div>
      <div class="Tplayer_control_section">
      <div class="Tplayer_buttons">
         <div class="Tplayer_buttons_container">
            <div class="Tplayer_btn_space" style="margin: auto">
               <button class="Tplayer_btn Tplayer_play">
               ${playSVG.default}
               </button>
               <button class="Tplayer_btn Tplayer_pause">
               ${pauseSVG.default}
               </button>
               <button class="Tplayer_btn Tplayer_replay">
               ${replay.default}
               </button>
            </div>
         </div>
      </div>
         <div style="display: flex">
            <div class="Tplayer_timer">
               <div class="Tplayer_current_time">0:00</div>
            </div>
            <div class="Tplayer_timer">
             /  <div class="Tplayer_total_time">0:00</div>
            </div>
         </div>
         <div class="Tplayer_resolution">
            <div class="Tplayer_btn_space">
               <button class="Tplayer_btn">
                  <img src="images/volume.svg" class="Tplayer_volume_btn" id="Tplayer_volume" />
                  <div class="Tplayer_volume_changer">
                     <div class="Tplayer_volume_bar">
                        <input id="slider" orient='270deg' type='range' min='0' value='100' max='100' step='1' />
                     </div>
                  </div>
               </button>
            </div>
            <div class="Tplayer_btn_space" id="Tplayer_settings">
               <button class="Tplayer_btn ">
               <img src="images/cog.svg" class="Tplayer_setting_btn" />
               </button>
            </div>
            <div class="Tplayer_btn_space">
               <button class="Tplayer_btn " id="Tplayer_fullScr">
               ${expand.default}
               </button>
            </div>
         </div>
      </div>
   </div>
</div>
</div>`;
