import React, { useEffect, createRef } from 'react';
import { bool, func, shape, string } from 'prop-types';
import { withMediaProps } from 'react-media-player';

import IconPause from '~/assets/icons/icon-pause.svg';
import IconPlay from '~/assets/icons/icon-play.svg';

import '../videoPlayer.scss';

export const CustomPlayPauseButton = ({ media, className }) => {
  const handlePlayPause = () => {
    media.playPause();
  };
  const playPauseRef = createRef();

  useEffect(() => {
    playPauseRef.current.focus();
  }, []);

  return (
    <button
      type="button"
      className={className}
      onClick={handlePlayPause}
      ref={playPauseRef}
    >
      {media.isPlaying ? (
        <IconPause className="pause-icon" />
      ) : (
        <IconPlay className="play-icon" />
      )}
    </button>
  );
};

export default withMediaProps(CustomPlayPauseButton);

CustomPlayPauseButton.propTypes = {
  media: shape({
    playPause: func,
    isPlaying: bool,
  }),
  className: string,
};
