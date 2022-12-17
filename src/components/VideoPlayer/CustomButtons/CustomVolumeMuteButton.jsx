import React from 'react';
import { bool, func, shape, string } from 'prop-types';
import { withMediaProps } from 'react-media-player';

import IconVolume from '~/assets/icons/icon-volume.svg';
import IconVolumeOff from '~/assets/icons/icon-volume-off.svg';

import './customButtonStyles.scss';

export const CustomVolumeMuteButton = ({ media, className }) => {
  const handleVolume = () => {
    media.muteUnmute();
  };

  return (
    <button type="button" className={className} onClick={handleVolume}>
      {media.isMuted ? (
        <IconVolumeOff className="volume-off-icon" />
      ) : (
        <IconVolume className="volume-icon" />
      )}
    </button>
  );
};

export default withMediaProps(CustomVolumeMuteButton);

CustomVolumeMuteButton.propTypes = {
  media: shape({
    muteUnmute: func,
    isMuted: bool,
  }),
  className: string,
};
