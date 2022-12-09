import React from 'react';
import { bool, oneOf, string } from 'prop-types';

import './academy-testers-description.scss';
import { ROUTES } from '~/constants/routes';
import TextSection from '~/components/TextSection';
import ImageTestersDescriptionParticlesTop from '~/assets/particles/testers-description-particles-top.svg';
import ImageTestersDescriptionParticlesBottom from '~/assets/particles/testers-description-particles-bottom.svg';
import ImageTestersDescription from '~/assets/images/testers-description.svg';
import LineTestersDescription from '~/assets/lines/testers-description-line.svg';
import { textSectionType } from '~/components/Pages/Homepage/types';

export const AcademyTestersDescription = ({ testersDescriptionData }) => {
  const {
    isRightAlligned,
    isHeadingSpacingLarge,
    headingContent,
    isParagraphTextBold,
    paragraphContent,
    buttonText,
    pageRoute,
  } = testersDescriptionData;
  return (
    <section className="testers-description">
      <div className="testers-icons">
        <ImageTestersDescription className="testers-icons__image" />
        <LineTestersDescription className="testers-icons__line" />
      </div>
      <div className="testers-description__content">
        <ImageTestersDescriptionParticlesTop className="testers-description__top-particles" />
        <TextSection
          isRightAlligned={isRightAlligned}
          isHeadingSpacingLarge={isHeadingSpacingLarge}
          headingContent={<h3>{headingContent}</h3>}
          isParagraphTextBold={isParagraphTextBold}
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
