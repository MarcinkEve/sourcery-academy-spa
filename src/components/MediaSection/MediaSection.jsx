import React from 'react';
import { func, string } from 'prop-types';

import Gallery from '~/components/Gallery';
import Button from '~/components/Button';
import './media-section.scss';
import { mediaType } from '~/components/Gallery/types';

export const MediaSection = ({ title, media, handleClick }) => {
  return (
    <section className="media">
      <h2>{title}</h2>
      <Gallery media={media} />
      {handleClick && (
        <Button
          label="View more"
          handleClick={handleClick}
          className="media__button"
        />
      )}
    </section>
  );
};

MediaSection.propTypes = {
  title: string.isRequired,
  media: mediaType.isRequired,
  handleClick: func,
};
