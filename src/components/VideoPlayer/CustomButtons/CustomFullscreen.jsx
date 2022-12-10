import React, { Component } from 'react';
import { object, string } from 'prop-types';

import '../videoPlayer.scss';
import { withMediaProps } from 'react-media-player';
import IconFullscreen from '~/assets/icons/icon-fullscreen.svg';

class CustomFullscreen extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }
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
        onClick={this._handleFullscreen}
      >
        <IconFullscreen className="fullscreen-icon" />
      </button>
    );
  }
}
export default withMediaProps(CustomFullscreen);

CustomFullscreen.propTypes = {
  media: object,
  className: string,
  style: string,
};
