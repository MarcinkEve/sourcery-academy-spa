import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import FsLightbox from 'fslightbox-react';

import { mediaType } from './types';
import PlayIcon from '~/assets/icons/icon-play-button.svg';

import VideoPlayer from '~/components/VideoPlayer';

import './gallery.scss';

export const Gallery = ({ media }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number + 1,
    });
  };

  const openLightboxWithKeyboard = (e, number) => {
    const keyCodeEnter = 13;
    const keyCodeSpace = 32;

    if (e.keyCode === keyCodeEnter || e.keyCode === keyCodeSpace) {
      openLightboxOnSlide(number);
    }
  };

  return (
    <>
      <div className="gallery">
        {media.map((item, index) => (
          <div
            className={classnames('gallery__item', {
              'gallery__item--video': item.type === 'video',
            })}
            key={item.src}
            onClick={() => openLightboxOnSlide(index)}
            onKeyDown={(e) => openLightboxWithKeyboard(e, index)}
            tabIndex={0}
            title="Click on an image to open an expanded view"
          >
            <img
              className="gallery__thumbnail"
              src={item.thumbnail}
              alt={item.alt || ''}
            />
            {item.type === 'video' && (
              <PlayIcon className="gallery__play-icon" />
            )}
          </div>
        ))}
      </div>

      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        exitFullscreenOnClose={true}
        loadOnlyCurrentSource={true}
        sources={media.map((item) => {
          // gallery with video in integrated player
          // return item.src;

          // gallery with video in custom player
          if (item.type === 'video') {
            return (
              <div onMouseDown={(e) => e.stopPropagation()}>
                <VideoPlayer
                  videoSrc={item.src}
                  isModalOpen={true}
                  onClose={() => {}}
                />
              </div>
            );
          }

          return item.src;
        })}
      />
    </>
  );
};

Gallery.propTypes = {
  media: mediaType.isRequired,
};
