import React, { useState } from 'react';
import classnames from 'classnames';
import FsLightbox from 'fslightbox-react';

import VideoPlayer from '~/components/VideoPlayer';
import PlayIcon from '~/assets/icons/icon-play-button.svg';

import './gallery.scss';
import { mediaListType } from './types';

export const Gallery = ({ mediaList }) => {
  const [lightboxController, setLightboxController] = useState({
    isOpened: false,
    slide: 1,
  });

  const openLightboxOnSlide = (index) => {
    setLightboxController({
      isOpened: !lightboxController.isOpened,
      slide: index + 1,
    });
    document.activeElement.blur();
  };

  const openLightboxWithKeyboard = ({ code }, index) => {
    if (code === 'Enter') {
      openLightboxOnSlide(index);
    }
  };

  return (
    <>
      <div className="gallery">
        {mediaList.map(({ type, src, thumbnail, alt }, index) => (
          <div
            className={classnames('gallery__item', {
              'gallery__item--video': type === 'video',
            })}
            key={src}
            onClick={() => openLightboxOnSlide(index)}
            onKeyDown={(e) => openLightboxWithKeyboard(e, index)}
            tabIndex={0}
            title="Click a thumbnail to open an expanded view"
          >
            <img
              className="gallery__thumbnail"
              src={thumbnail}
              alt={alt || ''}
            />
            {type === 'video' && <PlayIcon className="gallery__play-icon" />}
          </div>
        ))}
      </div>

      <FsLightbox
        toggler={lightboxController.isOpened}
        slide={lightboxController.slide}
        exitFullscreenOnClose={true}
        loadOnlyCurrentSource={true}
        sources={mediaList.map(({ type, src }) => {
          if (type === 'video') {
            return (
              <div onMouseDown={(e) => e.stopPropagation()}>
                <VideoPlayer
                  videoSrc={src}
                  isModalOpen={true}
                  onClose={() => {}}
                  hasCloseButton={false}
                />
              </div>
            );
          }

          return src;
        })}
      />
    </>
  );
};

Gallery.propTypes = {
  mediaList: mediaListType.isRequired,
};
