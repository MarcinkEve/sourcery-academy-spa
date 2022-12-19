import React, { useState } from 'react';
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
    document.activeElement.blur();
  };

  const openLightboxWithKeyboard = ({ code }, number) => {
    if (code === 'Enter') {
      openLightboxOnSlide(number);
    }
  };

  return (
    <>
      <div className="gallery">
        {media.map(({ type, src, thumbnail, alt }, index) => (
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
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        exitFullscreenOnClose={true}
        loadOnlyCurrentSource={true}
        sources={media.map(({ type, src }) => {
          if (type === 'video') {
            return (
              <div onMouseDown={(e) => e.stopPropagation()}>
                <VideoPlayer
                  videoSrc={src}
                  isModalOpen={true}
                  onClose={() => document.activeElement.blur()}
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
  media: mediaType.isRequired,
};
