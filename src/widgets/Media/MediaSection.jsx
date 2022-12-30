import React from 'react';
import { func, string } from 'prop-types';

import Button from '~/components/Form/Button';
import Gallery from '~/widgets/Media/Gallery';
import { mediaListType } from '~/widgets/Media/Gallery/types';

import './media-section.scss';

export const MediaSection = ({ title, mediaList, handleButtonClick, id }) => {
  return (
    <div className="media-section" id={id}>
      <h2 className="media-section__title">{title}</h2>
      <Gallery mediaList={mediaList} />
      {handleButtonClick && (
        <Button label="View more" handleClick={handleButtonClick} />
      )}
    </div>
  );
};

MediaSection.propTypes = {
  title: string.isRequired,
  mediaList: mediaListType.isRequired,
  handleButtonClick: func,
  id: string,
};
