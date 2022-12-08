import React from 'react';
import { string, bool, func } from 'prop-types';

import './videoPlayer.scss';
import { Media, Player, controls } from 'react-media-player';
import CustomPlayPause from './CustomButtons/CustomPlayPause';
import CustomPlayPauseOnScreen from './CustomButtons/CustomPlayPauseOnScreen';
import CustomFullscreen from './CustomButtons/CustomFullscreen';
import CustomVolume from './CustomButtons/CustomVolume';
import Settings from '../../assets/icons/icon-settings.svg';

const { CurrentTime, SeekBar, Volume } = controls;

export const VideoPlayer = ({
  videoSrc,
  isModalOpen,
  onClose,
  hasAutoPlay,
}) => {
  if (!isModalOpen) return null;

  return (
    <div className="media__overlay" onClick={onClose}>
      <Media>
        <div
          className="media"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button onClick={onClose} className="media__close-button">
            &times;
          </button>
          <div className="media__player">
            <CustomPlayPauseOnScreen className="media__player-overlay-icon" />
            <Player
              className="player"
              src={videoSrc}
              controls
              autoPlay={hasAutoPlay}
            />
          </div>
          <div className="media__controls">
            <CustomPlayPause className="media__controls-play-pause" />
            <CurrentTime className="media__controls-current-time" />
            <SeekBar className="media__controls-seek-bar" />
            <div className="media__controls-volume">
              <CustomVolume className="media__controls-volume-mute" />
              <Volume className="media__controls-volume-bar" />
            </div>
            <button className="media__controls-settings">
              <Settings className="media__controls-settings-icon" />
            </button>
            <CustomFullscreen className="media__controls-fullscreen" />
          </div>
        </div>
      </Media>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoSrc: string,
  hasAutoPlay: bool,
  isModalOpen: bool,
  onClose: func,
};
// TEMP -------------------------------------------------------------------------------------------------------------
VideoPlayer.defaultProps = {
  isModalOpen: false,
  hasAutoPlay: false,
  onClose: false,
  videoSrc:
    'https://sfe-2022-data.netlify.app/static/video/testers/7cd88093664cd782e4868a6706f2787da2eb7dc9.mp4',
};
