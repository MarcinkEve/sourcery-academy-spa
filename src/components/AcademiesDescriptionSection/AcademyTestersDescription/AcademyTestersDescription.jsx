import React from 'react';

import './academy-testers-description.scss';
import TextSection from '~/components/TextSection';
import ImageTestersDescriptionParticlesTop from '~/assets/particles/testers-description-particles-top.svg';
import ImageTestersDescriptionParticlesBottom from '~/assets/particles/testers-description-particles-bottom.svg';
import ImageTestersDescription from '~/assets/images/testers-description.svg';
import LineTestersDescription from '~/assets/lines/testers-description-line.svg';
import { textSectionType } from '~/components/AcademiesDescriptionSection/types';

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
  testersDescriptionData: textSectionType.isRequired,
};
