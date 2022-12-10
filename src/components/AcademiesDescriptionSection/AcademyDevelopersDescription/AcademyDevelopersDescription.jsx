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
    isRightAlligned,
    isHeadingSpacingLarge,
    headingContent,
    isParagraphTextBold,
    paragraphContent,
    buttonText,
    pageRoute,
  } = developersDescriptionData;
  return (
    <section className="developers-description">
      <div className="developers-description__content">
        <ImageDevelopersDescriptionParticlesTop className="developers-description__top-particles" />
        <TextSection
          isRightAlligned={isRightAlligned}
          isHeadingSpacingLarge={isHeadingSpacingLarge}
          headingContent={<h3>{headingContent}</h3>}
          isParagraphTextBold={isParagraphTextBold}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
        <ImageDevelopersDescriptionParticlesBottom className="developers-description__bottom-particles" />
      </div>
      <div className="developers-icons">
        <ImageDevelopersDescription className="developers-icons__image" />
        <LineDevelopersDescription className="developers-icons__line" />
      </div>
    </section>
  );
};

AcademyDevelopersDescription.propTypes = {
  developersDescriptionData: textSectionType.isRequired,
};
