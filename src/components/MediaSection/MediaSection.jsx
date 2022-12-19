import React from 'react';
import { func, string } from 'prop-types';

import Gallery from '~/components/Gallery';
import Button from '~/components/Button';
import { mediaListType } from '~/components/Gallery/types';

import './media-section.scss';

export const MediaSection = ({ title, mediaList, handleClick }) => {
  return (
    <section className="media-section">
      <h2 className="media-section__title">{title}</h2>
      <Gallery mediaList={mediaList} />
      {handleClick && <Button label="View more" handleClick={handleClick} />}
    </section>
  );
};

MediaSection.propTypes = {
  title: string.isRequired,
  mediaList: mediaListType.isRequired,
  handleClick: func,
};
