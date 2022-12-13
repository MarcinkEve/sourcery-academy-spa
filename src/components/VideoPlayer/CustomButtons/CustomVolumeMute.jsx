import React from 'react';
import { string, object } from 'prop-types';

import './customButtonStyles.scss';
import { withMediaProps } from 'react-media-player';
import IconVolume from '~/assets/icons/icon-volume.svg';
import IconVolumeOff from '~/assets/icons/icon-volume-off.svg';

export const CustomVolumeMute = (props) => {
  const { className, media } = props;

  const handleVolume = () => {
    props.media.muteUnmute();
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

export default withMediaProps(CustomVolumeMute);

CustomVolumeMute.propTypes = {
  media: object,
  className: string,
};
