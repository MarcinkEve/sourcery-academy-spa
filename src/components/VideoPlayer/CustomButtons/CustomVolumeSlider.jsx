import React, { Component } from 'react';
import { string, object } from 'prop-types';

import './customButtonStyles.scss';
import { withMediaProps } from 'react-media-player';

class CustomVolumeSlider extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying;
  }
  _handleChange = (_ref3) => {
    var value = _ref3.target.value;
    this.props.media.setVolume((+value).toFixed(4));
  };
  render() {
    const { className, style } = this.props;
    return (
      <input
        type="range"
        step={0.01}
        min={0}
        max={1}
        value={this.value}
        defaultValue={1}
        className={className}
        style={style}
        onChange={this._handleChange}
      ></input>
    );
  }
}
export default withMediaProps(CustomVolumeSlider);

CustomVolumeSlider.propTypes = {
  media: object,
  className: string,
  style: string,
};
