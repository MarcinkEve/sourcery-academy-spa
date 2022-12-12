import React from 'react';
import { object, string } from 'prop-types';

import '../videoPlayer.scss';
import { withMediaProps } from 'react-media-player';
import IconFullscreen from '~/assets/icons/icon-fullscreen.svg';

export const CustomFullscreen = (props) => {
  const handleFullscreen = () => {
    props.media.fullscreen();
  };
  const { className } = props;
  return (
    <button type="button" className={className} onClick={handleFullscreen}>
      <IconFullscreen className="fullscreen-icon" />
    </button>
  );
};

export default withMediaProps(CustomFullscreen);

CustomFullscreen.propTypes = {
  media: object,
  className: string,
};
