import { any, string } from 'prop-types';
import React, { Component } from 'react';
import { withMediaProps } from 'react-media-player';
import IconPause from '../assets/icons/icon-pause.svg';
import IconPlay from '../assets/icons/icon-play.svg';
import './video.scss';

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
    const { className, style, media } = this.props;
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
        onDoubleClick={this._handleFullscreen}
      >
        {!media.isPlaying && <IconPause className="pause-icon" />}
      </button>
    );
  }
}
export default withMediaProps(CustomPlayPause);

CustomPlayPause.propTypes = {
  media: string,
  className: string,
  style: string,
};
