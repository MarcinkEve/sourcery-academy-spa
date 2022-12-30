import React from 'react';
import { useNavigate } from 'react-router-dom';

import Particles from '~/assets/decorators/particles/particles-media.svg';
import Line from '~/assets/decorators/lines/line-media-homepage.svg';
import { ROUTES } from '~/constants/routes';
import Error from '~/components/UI/Error';

import { getMedia } from '~/pages/AcademiesPages/AcademyWrapper/MediaSection/MediaProvider';
import { MediaSection } from '~/widgets/Media/MediaSection';
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
