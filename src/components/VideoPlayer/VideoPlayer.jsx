import React, { useEffect, useState } from 'react';
import { string, bool, func } from 'prop-types';
import { Media, Player, controls } from 'react-media-player';

import CustomPlayPauseButton from './CustomButtons/CustomPlayPauseButton';
import CustomFullscreenButton from './CustomButtons/CustomFullscreenButton';
import CustomVolumeMuteButton from './CustomButtons/CustomVolumeMuteButton';
import CustomVolumeSliderButton from './CustomButtons/CustomVolumeSliderButton';
import './videoPlayer.scss';

const { CurrentTime, SeekBar } = controls;

export const VideoPlayer = ({
  videoSrc,
  isModalOpen,
  onClose,
  hasAutoPlay,
}) => {
  const [tabIndexToggler, setTabIndexToggler] = useState(-1);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      e.key === 'Escape' && onClose();
    });

    return () => document.removeEventListener('keydown', onClose);
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        setTabIndexToggler(0);
      } else {
        setTabIndexToggler(-1);
      }
    });

    return () =>
      document.removeEventListener('fullscreenchange', setTabIndexToggler);
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
          <button
            onClick={onClose}
            className="media__close-button"
            title="Close video"
          >
            &times;
          </button>
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
};
