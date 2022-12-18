import React, { useEffect } from 'react';
import { func, string } from 'prop-types';

import './corner-video-card.scss';
import PlayButton from '~/assets/icons/icon-play-button.svg';

export const CornerVideoCard = ({ Image, academyType, setIsModalOpen }) => {
  const handleKeyDown = (event) => {
    if (event.code === 'Space') {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="video-card">
      <img src={Image} alt={academyType} />
      <button type="button" className="video-card__button">
        <PlayButton
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="video-card__button-icon"
        />
      </button>
    </div>
  );
};

CornerVideoCard.propTypes = {
  Image: string,
  academyType: string,
  setIsModalOpen: func,
};
