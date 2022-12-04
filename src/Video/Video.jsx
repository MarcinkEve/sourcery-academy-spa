import React from 'react';
import { Media, Player, controls } from 'react-media-player';
import './video.scss';
import CustomPlayPause from './CustomPlayPause';
import CustomPlayPauseOnScreen from './CustomPlayPauseOnScreen';
import CustomFullscreen from './CustomFullscreen';
import CustomVolume from './CustomVolume';
import Settings from '../assets/icons/icon-settings.svg';

const { CurrentTime, SeekBar, Volume } = controls;

export const Video = () => {
  return (
    <Media>
      <div className="media">
        <div className="media-player">
          <CustomPlayPauseOnScreen className="play-screen" />
          <Player
            src="https://sfe-2022-data.netlify.app/static/video/testers/7cd88093664cd782e4868a6706f2787da2eb7dc9.mp4"
            autoPlay={true}
          />
        </div>
        <div className="media-controls">
          <CustomPlayPause className="play-btn" />
          <CurrentTime className="time-btn" />
          <SeekBar className="seek-btn" />
          <div className="volume-controls">
            <CustomVolume className="vol" />
            <Volume className="volume-btn" />
          </div>
          <button className="settings-btn">
            <Settings className="settings-icon" />
          </button>
          <CustomFullscreen className="full-screen-btn" />
        </div>
      </div>
    </Media>
  );
};
