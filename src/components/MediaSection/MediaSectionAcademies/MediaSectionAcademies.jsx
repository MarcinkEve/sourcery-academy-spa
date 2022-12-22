import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '~/constants/routes';
import Particles from '~/assets/particles/particles-media.svg';
import Line from '~/assets/lines/line-media-academies.svg';
import Error from '~/components/Error';

import { getMedia } from '../MediaProvider';
import { MediaSection } from '../MediaSection';
import './media-section-academies.scss';

export const MediaSectionAcademies = () => {
  const { data, error } = getMedia();
  const nav = useNavigate();
  const handleButtonClick =
    data.length > 6
      ? () =>
          nav(ROUTES.MEDIA, {
            state: { targetId: `${location.pathname.slice(1)}Media` },
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
            mediaList={data.slice(0, 6)}
            handleButtonClick={handleButtonClick}
          />
        </>
      )}
    </section>
  );
};
