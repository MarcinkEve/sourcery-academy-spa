import React from 'react';
import { string } from 'prop-types';

import './corner-video-card.scss';
import PlayButton from '~/assets/icons/icon-play-button.svg';

export const CornerVideoCard = ({ Image, academyType }) => {
  const play = () => {
    // console.log('play');
  };

  // useEffect(() => {
  //   console.log(Image);
  // }, [Image]);

  return (
    <div className="video-card">
      <img src={Image} alt={academyType} />
      {/* <Image className="video-card__image" /> */}
      <button type="button" className="video-card__button">
        <PlayButton onClick={play} className="video-card__button-icon" />
      </button>
    </div>
  );
};

CornerVideoCard.propTypes = {
  Image: string,
  academyType: string,
};
