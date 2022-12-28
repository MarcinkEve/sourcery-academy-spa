import React from 'react';
import { shape } from 'prop-types';

import ImageKidsDescriptionParticlesBottom from '~/assets/decorators/particles/kids-description-particles-bottom.svg';
import ImageKidsDescriptionParticlesTop from '~/assets/decorators/particles/kids-description-particles-top.svg';
import LineKidsDescription from '~/assets/decorators/lines/kids-description-line.svg';
import ImageKidsDescription from '~/assets/images/kids-description.svg';
import TextSection from '~/components/UI/TextSection';
import { textSectionType } from '~/components/UI/TextSection/types';

import './academy-kids-description.scss';

export const AcademyKidsDescription = ({ kidsDescriptionData }) => {
  const {
    headingContent,
    paragraphContent,
    buttonText,
    pageRoute,
  } = kidsDescriptionData;
  return (
    <section className="kids-description">
      <div className="kids-description__content">
        <ImageKidsDescriptionParticlesTop className="kids-description__top-particles" />
        <TextSection
          headingContent={<h3>{headingContent}</h3>}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
        <ImageKidsDescriptionParticlesBottom className="kids-description__bottom-particles" />
      </div>
      <div className="kids-description__icons">
        <ImageKidsDescription className="kids-description__icons-image" />
        <LineKidsDescription className="kids-description__icons-line" />
      </div>
    </section>
  );
};

AcademyKidsDescription.propTypes = {
  kidsDescriptionData: shape(textSectionType).isRequired,
};
