import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';

import PlayButton from '~/assets/icons/icon-play-button.svg';
import VideoPlayer from '~/widgets/VideoPlayer';
import { useLoadingContext } from '~/context/LoadingContext';

import './corner-video.scss';

export const CornerVideo = ({ image, description, videoSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const { handleLoadingStateImage } = useLoadingContext();

  useEffect(() => {
    handleLoadingStateImage(isLoadingImage);
  }, [isLoadingImage]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'visible';
  }, [isModalOpen]);

  return (
    <>
      <VideoPlayer
        videoSrc={videoSrc}
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="corner-video">
        <img
          src={image}
          alt={description || ''}
          className="corner-video__image"
          onLoad={() => setIsLoadingImage(false)}
        />
        <button
          type="button"
          className="corner-video__button"
          onClick={() => {
            setIsModalOpen(true);
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
};
