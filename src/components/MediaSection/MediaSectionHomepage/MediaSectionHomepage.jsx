import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '~/constants/routes';
import Particles from '~/assets/particles/particles-media.svg';
import Line from '~/assets/lines/line-media-homepage.svg';
import Error from '~/components/Error';

import { getMedia } from '../MediaProvider';
import { MediaSection } from '../MediaSection';
import './media-section-homepage.scss';

export const MediaSectionHomepage = () => {
  const { data, error } = getMedia();
  const nav = useNavigate();

  return (
    <section className="media-section-homepage">
      <Particles className="media-section-homepage__particles" />
      {error ? (
        <Error title="Media" />
      ) : (
        <>
          <Line className="media-section-homepage__line" />
          <MediaSection
            title="Media"
            mediaList={data}
            handleButtonClick={() => nav(ROUTES.MEDIA)}
          />
        </>
      )}
    </section>
  );
};
