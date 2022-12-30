import React, { useEffect, useState } from 'react';
import { string, bool, func } from 'prop-types';
import { Media, Player, controls } from 'react-media-player';

import CustomFullscreenButton from './CustomButtons/CustomFullscreenButton';
import CustomPlayPauseButton from './CustomButtons/CustomPlayPauseButton';
import CustomVolumeMuteButton from './CustomButtons/CustomVolumeMuteButton';
import CustomVolumeSliderButton from './CustomButtons/CustomVolumeSliderButton';
import './videoPlayer.scss';

const { CurrentTime, SeekBar } = controls;

export const VideoPlayer = ({
  videoSrc,
  isModalOpen,
  onClose,
  hasAutoPlay,
  hasCloseButton,
}) => {
  const [tabIndexToggler, setTabIndexToggler] = useState(-1);

  useEffect(() => {
    const escapeListener = (e) => {
      e.key === 'Escape' && onClose();
    };
    document.addEventListener('keydown', escapeListener);

    return () => document.removeEventListener('keydown', escapeListener);
  }, []);

  useEffect(() => {
    const fullscreenListener = () => {
      if (document.fullscreenElement) {
        setTabIndexToggler(0);
      } else {
        setTabIndexToggler(-1);
      }
    };
    document.addEventListener('fullscreenchange', fullscreenListener);

    return () =>
      document.removeEventListener('fullscreenchange', fullscreenListener);
  }, []);

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
          {hasCloseButton && (
            <button
              onClick={onClose}
              className="media__close-button"
              title="Close video"
            >
              &times;
            </button>
          )}
          <Player
            className="media__player"
            src={videoSrc}
            controls
            autoPlay={hasAutoPlay}
            tabIndex={tabIndexToggler}
          />
          <div className="controls">
            <CustomPlayPauseButton className="controls__play-pause" />
            <CurrentTime className="controls__current-time" />
            <SeekBar className="controls__seek-bar" />
            <CustomVolumeMuteButton className="controls__volume-mute" />
            <CustomVolumeSliderButton className="controls__volume-bar" />
            <CustomFullscreenButton className="controls__fullscreen" />
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
  hasCloseButton: bool.isRequired,
};

VideoPlayer.defaultProps = {
  hasCloseButton: true,
};
