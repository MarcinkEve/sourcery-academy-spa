import React from 'react';
import { func, string } from 'prop-types';

import PlayButton from '~/assets/icons/icon-play-button.svg';

import './corner-video.scss';

export const CornerVideo = ({ image, description, setOpenVideoModal }) => {
  return (
    <div className="corner-video">
      <img src={image} alt={description} />
      <button
        type="button"
        className="corner-video__button"
        onClick={() => {
          setOpenVideoModal(true);
        }}
      >
        <PlayButton className="corner-video__button-icon" />
      </button>
    </div>
  );
};

CornerVideo.propTypes = {
  image: string.isRequired,
  description: string.isRequired,
  setOpenVideoModal: func.isRequired,
};
