import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { ROUTES } from '~/constants/routes';
import Particles from '~/assets/decorators/particles/particles-media.svg';
import Line from '~/assets/decorators/lines/line-media-academies.svg';
import Error from '~/components/UI/Error';
import { MediaSection } from '~/widgets/Media/MediaSection';
import { IMAGE_LIMIT, MEDIA_PAGE_SECTION_IDS } from '~/widgets/Media/constants';

import { getMedia } from './MediaProvider';
import './media-section-academies.scss';

export const MediaSectionAcademies = () => {
  const { data, error } = getMedia();
  const nav = useNavigate();
  const currentAcademy = useLocation().pathname.slice(1);

  const handleButtonClick =
    data.length > IMAGE_LIMIT
      ? () =>
          nav(ROUTES.MEDIA, {
            state: {
              targetId: MEDIA_PAGE_SECTION_IDS[currentAcademy.toUpperCase()],
            },
          })
      : null;

  return (
    <section className="media-section-academies">
      <Particles className="media-section-academies__particles" />
      {error ? (
        <Error title="Media" />
      ) : (
        <>
          <Line className="media-section-academies__line" />
          <MediaSection
            title="Media"
            mediaList={data.slice(0, IMAGE_LIMIT)}
            handleButtonClick={handleButtonClick}
          />
        </>
      )}
    </section>
  );
};
