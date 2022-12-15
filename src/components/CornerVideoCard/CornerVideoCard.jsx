import React from 'react';
// import { useLocation } from 'react-router-dom';
import { func } from 'prop-types';

import './corner-video-card.scss';
import PlayButton from '~/assets/icons/icon-play-button.svg';

export const CornerVideoCard = ({ Image }) => {
  const play = () => {
    // console.log('play');
  };

  return (
    <div className="video-card">
      <Image className="video-card__image" />
      <button type="button" className="video-card__button">
        <PlayButton onClick={play} className="video-card__button-icon" />
      </button>
    </div>
  );
};

CornerVideoCard.propTypes = {
  Image: func,
};
