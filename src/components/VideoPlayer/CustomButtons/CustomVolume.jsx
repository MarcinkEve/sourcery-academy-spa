import { string, object } from 'prop-types';
import React, { Component } from 'react';

import '../videoPlayer.scss';
import { withMediaProps } from 'react-media-player';
import IconVolume from '~/assets/icons/icon-volume.svg';
import IconVolumeOff from '~/assets/icons/icon-volume-off.svg';

class CustomVolume extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isMuted !== media.isMuted;
  }
  _handleVolume = () => {
    this.props.media.muteUnmute();
  };
  render() {
    const { className, style, media } = this.props;
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handleVolume}
      >
        {media.isMuted ? (
          <IconVolumeOff className="volume-off-icon" />
        ) : (
          <IconVolume className="volume-icon" />
        )}
      </button>
    );
  }
}
export default withMediaProps(CustomVolume);

CustomVolume.propTypes = {
  media: object,
  className: string,
  style: string,
};
