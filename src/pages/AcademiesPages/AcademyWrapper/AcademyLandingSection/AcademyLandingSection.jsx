import React from 'react';
import { object } from 'prop-types';
import { ROUTES } from '~/constants/routes';

import TextSection from '~/components/UI/TextSection';
import CornerVideo from '~/widgets/CornerVideo';
import CornerLine from '~/assets/decorators/lines/landing-section-corner-line.svg';
import ParagraphLine from '~/assets/decorators/lines/landing-section-paragraph-line.svg';

import './academy-landing-section.scss';

export const AcademyLandingSection = ({ data }) => {
  return (
    <section className="academy-landing-section">
      <div className="academy-landing-section__paragraph">
        <TextSection
          headingContent={<h1>{data.title}</h1>}
          paragraphContent={<p>{data.text}</p>}
          buttonText={'Register'}
          pageRoute={ROUTES.APPLICATION}
        />
        <ParagraphLine className="academy-landing-section__paragraph-line" />
      </div>
      <div className="academy-landing-section__corner">
        <CornerLine className="academy-landing-section__corner-line" />
        <CornerVideo
          image={data.image.src}
          description={data.image.alt}
          videoSrc={data.videoSrc}
          className="academy-landing-section__corner-video"
        />
      </div>
    </section>
  );
};

AcademyLandingSection.propTypes = {
  data: object.isRequired,
};
