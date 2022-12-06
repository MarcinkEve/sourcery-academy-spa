import React from 'react';
import { string, boolean } from 'prop-types';

import './video.scss';
import { Media, Player, controls } from 'react-media-player';
import CustomPlayPause from './CustomPlayPause';
import CustomPlayPauseOnScreen from './CustomPlayPauseOnScreen';
import CustomFullscreen from './CustomFullscreen';
import CustomVolume from './CustomVolume';
import Settings from '../assets/icons/icon-settings.svg';

const { CurrentTime, SeekBar, Volume } = controls;

export const Video = ({ videoSrc, isModalOpen, onClose }) => {
  if (!isModalOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <Media>
        <div
          className="media"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="media__player">
            <CustomPlayPauseOnScreen className="media__player-overlay-icon" />
            <Player src={videoSrc} />
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

Video.propTypes = {
  videoSrc: string,
  isModalOpen: boolean,
  onClose: boolean,
};

Video.defaultProps = {
  videoSrc:
    'https://sfe-2022-data.netlify.app/static/video/testers/7cd88093664cd782e4868a6706f2787da2eb7dc9.mp4',
};
