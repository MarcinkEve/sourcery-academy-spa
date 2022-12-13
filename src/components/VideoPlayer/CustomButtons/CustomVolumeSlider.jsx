import React from 'react';
import { string, object } from 'prop-types';

import './customButtonStyles.scss';
import { withMediaProps } from 'react-media-player';

export const CustomVolumeSlider = (props) => {
  const handleChange = (e) => {
    let value = e.target.value;
    props.media.setVolume((+value).toFixed(4));
  };

  const { className, media } = props;

  return (
    <input
      type="range"
      step={0.01}
      min={0}
      max={1}
      value={media.volume}
      className={className}
      onChange={handleChange}
    ></input>
  );
};

export default withMediaProps(CustomVolumeSlider);

CustomVolumeSlider.propTypes = {
  media: object,
  className: string,
};
