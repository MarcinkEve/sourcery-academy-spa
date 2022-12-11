import React from 'react';

import './academy-developers-description.scss';
import TextSection from '~/components/TextSection';
import ImageDevelopersDescriptionParticlesTop from '~/assets/particles/developers-description-particles-top.svg';
import ImageDevelopersDescriptionParticlesBottom from '~/assets/particles/developers-description-particles-bottom.svg';
import ImageDevelopersDescription from '~/assets/images/developers-description.svg';
import LineDevelopersDescription from '~/assets/lines/developers-description-line.svg';
import { textSectionType } from '~/components/AcademiesDescriptionSection/types';

export const AcademyDevelopersDescription = ({ developersDescriptionData }) => {
  const {
    headingContent,
    paragraphContent,
    buttonText,
    pageRoute,
  } = developersDescriptionData;
  return (
    <section className="developers-description">
      <div className="developers-description__content">
        <ImageDevelopersDescriptionParticlesTop className="developers-description__top-particles" />
        <TextSection
          isRightAligned={false}
          isHeadingSpacingLarge={false}
          headingContent={<h3>{headingContent}</h3>}
          isParagraphTextBold={false}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
        <ImageDevelopersDescriptionParticlesBottom className="developers-description__bottom-particles" />
      </div>
      <div className="developers-description__icons">
        <ImageDevelopersDescription className="developers-description__icons-image" />
        <LineDevelopersDescription className="developers-description__icons-line" />
      </div>
    </section>
  );
};

AcademyDevelopersDescription.propTypes = {
  developersDescriptionData: textSectionType.isRequired,
};
