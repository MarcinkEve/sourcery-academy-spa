import React from 'react';

import './academy-kids-description.scss';
import TextSection from '~/components/TextSection';
import ImageKidsDescriptionParticlesTop from '~/assets/particles/kids-description-particles-top.svg';
import ImageKidsDescriptionParticlesBottom from '~/assets/particles/kids-description-particles-bottom.svg';
import ImageKidsDescription from '~/assets/images/kids-description.svg';
import LineKidsDescription from '~/assets/lines/kids-description-line.svg';
import { textSectionType } from '~/components/AcademiesDescriptionSection/types';

export const AcademyKidsDescription = ({ kidsDescriptionData }) => {
  const {
    isRightAlligned,
    isHeadingSpacingLarge,
    headingContent,
    isParagraphTextBold,
    paragraphContent,
    buttonText,
    pageRoute,
  } = kidsDescriptionData;
  return (
    <section className="kids-description">
      <div className="kids-description__content">
        <ImageKidsDescriptionParticlesTop className="kids-description__top-particles" />
        <TextSection
          isRightAlligned={isRightAlligned}
          isHeadingSpacingLarge={isHeadingSpacingLarge}
          headingContent={<h3>{headingContent}</h3>}
          isParagraphTextBold={isParagraphTextBold}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
        <ImageKidsDescriptionParticlesBottom className="kids-description__bottom-particles" />
      </div>
      <div className="kids-academy-icons">
        <ImageKidsDescription className="kids-academy-icons__image" />
        <LineKidsDescription className="kids-academy-icons__line" />
      </div>
    </section>
  );
};

AcademyKidsDescription.propTypes = {
  kidsDescriptionData: textSectionType.isRequired,
};
