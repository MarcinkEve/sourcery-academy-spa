import { any } from 'prop-types';
import React, { Component } from 'react';
import { withMediaProps } from 'react-media-player';
import './video.scss';

class CustomVolumeControl extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }
  // _handleVolumeControl = () => {
  //   this.props.media.volume();
  // };
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
  media: any,
  className: any,
  style: any,
};
