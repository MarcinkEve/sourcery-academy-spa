import { object, string } from 'prop-types';
import React, { Component } from 'react';
import { withMediaProps } from 'react-media-player';
import IconFullscreen from '../../assets/icons/icon-fullscreen.svg';
import './videoPlayer.scss';

class CustomFullscreen extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }
  _handleFullscreen = () => {
    this.props.media.fullscreen();
  };
  render() {
    const { className, style, media } = this.props;
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
