import React from 'react';
import { func, shape, string } from 'prop-types';
import { withMediaProps } from 'react-media-player';

import IconFullscreen from '~/assets/icons/icon-fullscreen.svg';

import '../videoPlayer.scss';

export const CustomFullscreenButton = ({
  media,
  className,
  changeTabIndex,
}) => {
  const handleFullscreen = () => {
    media.fullscreen();
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleFullscreen}
      onKeyDown={(e) => e.key === ('Enter' || 'Space') && changeTabIndex(0)}
    >
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
  changeTabIndex: func,
};
