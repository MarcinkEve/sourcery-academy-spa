import React, { useEffect, useState } from 'react';
import { string, bool, func } from 'prop-types';
import { Media, Player, controls } from 'react-media-player';

import CustomPlayPauseButton from './CustomButtons/CustomPlayPauseButton';
import CustomFullscreenButton from './CustomButtons/CustomFullscreenButton';
import CustomVolumeMuteButton from './CustomButtons/CustomVolumeMuteButton';
import CustomVolumeSliderButton from './CustomButtons/CustomVolumeSliderButton';
import { CustomSettingsButton } from './CustomButtons/CustomSettingsButton';
import './videoPlayer.scss';

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
            <CustomPlayPauseButton className="controls__play-pause" />
            <CurrentTime className="controls__current-time" />
            <SeekBar className="controls__seek-bar" />
            <CustomVolumeMuteButton className="controls__volume-mute" />
            <CustomVolumeSliderButton className="controls__volume-bar" />
            <CustomSettingsButton
              aria-label="This button doesn't work"
              className="controls__settings"
            />
            <CustomFullscreenButton
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
