import React from 'react';
import { func, shape, string } from 'prop-types';
import { withMediaProps } from 'react-media-player';

import IconFullscreen from '~/assets/icons/icon-fullscreen.svg';

import '../videoPlayer.scss';

export const CustomFullscreenButton = ({ media, className }) => {
  const handleFullscreen = () => {
    media.fullscreen();
  };

  return (
    <button type="button" className={className} onClick={handleFullscreen}>
      <IconFullscreen className="fullscreen-icon" />
    </button>
  );
};

export default withMediaProps(CustomFullscreenButton);

CustomFullscreenButton.propTypes = {
  className: string,
  media: shape({
    fullscreen: func,
  }),
};
