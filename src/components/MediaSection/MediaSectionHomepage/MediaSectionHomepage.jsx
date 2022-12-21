import React from 'react';
import { useNavigate } from 'react-router-dom';

import { mediaData } from '~/components/Pages/Homepage/data';
import { ROUTES } from '~/constants/routes';
import Particles from '~/assets/particles/particles-media.svg';
import Line from '~/assets/lines/line-media-homepage.svg';

import { MediaSection } from '../MediaSection';
import './media-section-homepage.scss';

export const MediaSectionHomepage = () => {
  const nav = useNavigate();

  return (
    <section className="media-section-homepage">
      <Particles className="media-section-homepage__particles" />
      <Line className="media-section-homepage__line" />
      <MediaSection
        title="Media"
        mediaList={mediaData}
        handleClick={() => nav(ROUTES.MEDIA)}
      />
    </section>
  );
};
