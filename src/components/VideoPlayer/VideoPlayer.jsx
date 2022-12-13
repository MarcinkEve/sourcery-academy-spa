import React, { useEffect, useState } from 'react';
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
  const [changeTabIndex, setChangeTabIndex] = useState(-1);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      e.key === 'Escape' && onClose();
    });
  }, []);

  if (!isModalOpen) return null;

  const tabIndexHandler = (data) => {
    setChangeTabIndex(data);
  };
  return (
    <div className="overlay" onClick={onClose}>
      <Media>
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
            tabIndex={changeTabIndex}
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
            <CustomFullscreen
              className="controls__fullscreen"
              changeTabIndex={tabIndexHandler}
            />
          </div>
        </div>
      </Media>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoSrc: string.isRequired,
  hasAutoPlay: bool,
  isModalOpen: bool.isRequired,
  onClose: func.isRequired,
};
