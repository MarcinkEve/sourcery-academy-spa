import React, { useEffect } from 'react';
import { string, bool, func } from 'prop-types';

import './videoPlayer.scss';
import { Media, Player, controls } from 'react-media-player';
import CustomPlayPause from './CustomButtons/CustomPlayPause';
import CustomFullscreen from './CustomButtons/CustomFullscreen';
import CustomVolumeMute from './CustomButtons/CustomVolumeMute';
import CustomVolumeSlider from './CustomButtons/CustomVolumeSlider';
import { CustomSettings } from './CustomButtons/CustomSettings';

const { CurrentTime, SeekBar } = controls;

export const VideoPlayer = ({
  videoSrc,
  isModalOpen,
  onClose,
  hasAutoPlay,
}) => {
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      e.key === 'Escape' && onClose();
    });
  }, []);

  if (!isModalOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <Media tabIndex={1}>
        <div
          className="media"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <button
            onClick={onClose}
            className="media__close-button"
            aria-label="Close video modal"
          >
            &times;
          </button>
          <Player
            className="media__player"
            src={videoSrc}
            controls
            autoPlay={hasAutoPlay}
            tabIndex={-1}
          />
          <div className="controls">
            <CustomPlayPause className="controls__play-pause" />
            <CurrentTime className="controls__current-time" />
            <SeekBar className="controls__seek-bar" />
            <CustomVolumeMute className="controls__volume-mute" />
            <CustomVolumeSlider className="controls__volume-bar" />
            <CustomSettings
              aria-label="This button doesn't work"
              className="controls__settings"
            />
            <CustomFullscreen className="controls__fullscreen" />
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
