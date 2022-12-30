import React from 'react';
import { shape } from 'prop-types';

import LineTestersDescription from '~/assets/decorators/lines/testers-description-line.svg';
import ImageTestersDescriptionParticlesBottom from '~/assets/decorators/particles/testers-description-particles-bottom.svg';
import ImageTestersDescriptionParticlesTop from '~/assets/decorators/particles/testers-description-particles-top.svg';
import ImageTestersDescription from '~/assets/images/testers-description.svg';
import TextSection from '~/components/UI/TextSection';
import { textSectionType } from '~/components/UI/TextSection/types';

import './academy-testers-description.scss';

export const AcademyTestersDescription = ({ testersDescriptionData }) => {
  const {
    headingContent,
    paragraphContent,
    buttonText,
    pageRoute,
  } = testersDescriptionData;
  return (
    <section className="testers-description">
      <div className="testers-description__icons">
        <ImageTestersDescription className="testers-description__icons-image" />
        <LineTestersDescription className="testers-description__icons-line" />
      </div>
      <div className="testers-description__content">
        <ImageTestersDescriptionParticlesTop className="testers-description__top-particles" />
        <TextSection
          isRightAligned
          headingContent={<h3>{headingContent}</h3>}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
        <ImageTestersDescriptionParticlesBottom className="testers-description__bottom-particles" />
      </div>
    </section>
  );
};

AcademyTestersDescription.propTypes = {
  testersDescriptionData: shape(textSectionType).isRequired,
};
