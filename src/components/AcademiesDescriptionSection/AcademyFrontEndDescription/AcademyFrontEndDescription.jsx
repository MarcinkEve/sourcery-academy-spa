import React from 'react';
import { shape } from 'prop-types';

import './academy-frontend-description.scss';
import TextSection from '~/components/TextSection';
import ImageFrontEndDescription from '~/assets/images/frontend-description.svg';
import ImageFrontEndDescriptionParticlesTop from '~/assets/particles/frontend-description-particles-top.svg';
import ImageFrontEndDescriptionParticlesBottom from '~/assets/particles/frontend-description-particles-bottom.svg';
import { textSectionType } from '~/components/TextSection/types';

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