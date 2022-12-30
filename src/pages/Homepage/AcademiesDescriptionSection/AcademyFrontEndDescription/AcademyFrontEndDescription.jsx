import React from 'react';
import { shape } from 'prop-types';

import ImageFrontEndDescriptionParticlesBottom from '~/assets/decorators/particles/frontend-description-particles-bottom.svg';
import ImageFrontEndDescriptionParticlesTop from '~/assets/decorators/particles/frontend-description-particles-top.svg';
import ImageFrontEndDescription from '~/assets/images/frontend-description.svg';
import TextSection from '~/components/UI/TextSection';
import { textSectionType } from '~/components/UI/TextSection/types';

import './academy-frontend-description.scss';

export const AcademyFrontEndDescription = ({ frontEndDescriptionData }) => {
  const {
    headingContent,
    paragraphContent,
    buttonText,
    pageRoute,
  } = frontEndDescriptionData;
  return (
    <section className="frontend-description">
      <ImageFrontEndDescription className="frontend-description__icon" />
      <div className="frontend-description__content">
        <ImageFrontEndDescriptionParticlesTop className="frontend-description__top-particles" />
        <TextSection
          isRightAligned
          headingContent={<h3>{headingContent}</h3>}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
        <ImageFrontEndDescriptionParticlesBottom className="frontend-description__bottom-particles" />
      </div>
    </section>
  );
};

AcademyFrontEndDescription.propTypes = {
  frontEndDescriptionData: shape(textSectionType).isRequired,
};
