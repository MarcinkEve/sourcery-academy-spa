import { string, object } from 'prop-types';
import React, { Component } from 'react';

import '../videoPlayer.scss';
import { withMediaProps } from 'react-media-player';

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }
  _handlePlayPause = () => {
    this.props.media.playPause();
  };
  _handleFullscreen = () => {
    this.props.media.fullscreen();
  };
  render() {
    const { className, style } = this.props;
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
        onDoubleClick={this._handleFullscreen}
      ></button>
    );
  }
}
export default withMediaProps(CustomPlayPause);

CustomPlayPause.propTypes = {
  media: object,
  className: string,
  style: string,
};
