import { any } from 'prop-types';
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
  render() {
    const { className, style, media } = this.props;
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      >
        {media.isPlaying ? (
          <IconPause className="pause-icon" />
        ) : (
          <IconPlay className="play-icon" />
        )}
      </button>
    );
  }
}
export default withMediaProps(CustomPlayPause);

CustomPlayPause.propTypes = {
  media: any,
  className: any,
  style: any,
};
