import { string, object } from 'prop-types';
import React, { Component } from 'react';

import '../videoPlayer.scss';
import { withMediaProps } from 'react-media-player';

class CustomVolumeControl extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }
  _handleChange = () => {
    this.props.media._ref3();
  };
  _handleMouseUp = () => {
    this.props.media.volume();
  };
  render() {
    const { className, style, media } = this.props;
    return (
      <input
        type="range"
        className={className}
        style={style}
        onMouseUp={this._handleMouseUp}
        onChange={this._handleChange}
      />
    );
  }
}
export default withMediaProps(CustomVolumeControl);

CustomVolumeControl.propTypes = {
  media: object,
  className: string,
  style: string,
};
