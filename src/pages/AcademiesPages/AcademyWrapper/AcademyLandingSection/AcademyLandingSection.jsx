import React from 'react';
import { shape, string } from 'prop-types';

import { ROUTES } from '~/constants/routes';
import TextSection from '~/components/UI/TextSection';
import CornerVideo from '~/widgets/CornerVideo';
import CornerLine from '~/assets/decorators/lines/landing-section-corner-line.svg';
import ParagraphLine from '~/assets/decorators/lines/landing-section-paragraph-line.svg';

import './academy-landing-section.scss';

export const AcademyLandingSection = ({ data }) => {
  const {
    title,
    text,
    videoSrc,
    image: { src, alt },
  } = data;

  return (
    <section className="academy-landing-section">
      <div className="academy-landing-section__paragraph">
        <TextSection
          headingContent={<h1>{title}</h1>}
          paragraphContent={<p>{text}</p>}
          buttonText={'Register'}
          pageRoute={ROUTES.APPLICATION}
        />
        <ParagraphLine className="academy-landing-section__paragraph-line" />
      </div>
      <div className="academy-landing-section__corner">
        <CornerLine className="academy-landing-section__corner-line" />
        <CornerVideo
          image={src}
          description={alt}
          videoSrc={videoSrc}
          className="academy-landing-section__corner-video"
        />
      </div>
    </section>
  );
};

AcademyLandingSection.propTypes = {
  data: shape({
    title: string.isRequired,
    text: string.isRequired,
    videoSrc: string.isRequired,
    image: shape({
      src: string.isRequired,
      alt: string.isRequired,
    }),
  }),
};
