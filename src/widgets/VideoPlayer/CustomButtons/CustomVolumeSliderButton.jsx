import React from 'react';
import { func, number, shape, string } from 'prop-types';
import { withMediaProps } from 'react-media-player';

import './customButtonStyles.scss';

export const CustomVolumeSliderButton = ({ media, className }) => {
  const handleChange = (e) => {
    let value = e.target.value;
    media.setVolume(+value);
  };

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

export default withMediaProps(CustomVolumeSliderButton);

CustomVolumeSliderButton.propTypes = {
  media: shape({
    setVolume: func,
    volume: number,
  }),
  className: string,
};
