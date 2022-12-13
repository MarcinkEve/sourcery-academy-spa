import React from 'react';
import { string, object } from 'prop-types';

import '../videoPlayer.scss';
import { withMediaProps } from 'react-media-player';
import IconPause from '~/assets/icons/icon-pause.svg';
import IconPlay from '~/assets/icons/icon-play.svg';

export const CustomPlayPause = (props) => {
  const { className, media } = props;

  const handlePlayPause = () => {
    props.media.playPause();
  };

  return (
    <button type="button" className={className} onClick={handlePlayPause}>
      {media.isPlaying ? (
        <IconPause className="pause-icon" />
      ) : (
        <IconPlay className="play-icon" />
      )}
    </button>
  );
};

export default withMediaProps(CustomPlayPause);

CustomPlayPause.propTypes = {
  media: object,
  className: string,
};
