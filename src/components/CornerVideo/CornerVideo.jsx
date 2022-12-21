import React, { useState } from 'react';
import { bool, string } from 'prop-types';

import PlayButton from '~/assets/icons/icon-play-button.svg';
import VideoPlayer from '~/components/VideoPlayer';

import './corner-video.scss';

export const CornerVideo = ({
  image,
  description,
  videoSrc,
  hasCloseButton,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <VideoPlayer
        videoSrc={videoSrc}
        isVideoModalOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        hasCloseButton={hasCloseButton}
      />
      <div className="corner-video">
        <img src={image} alt={description} />
        <button
          type="button"
          className="corner-video__button"
          onClick={() => {
            setIsVideoModalOpen(true);
          }}
        >
          <PlayButton className="corner-video__button-icon" />
        </button>
      </div>
    </>
  );
};

CornerVideo.propTypes = {
  image: string.isRequired,
  description: string,
  videoSrc: string.isRequired,
  hasCloseButton: bool.isRequired,
};
