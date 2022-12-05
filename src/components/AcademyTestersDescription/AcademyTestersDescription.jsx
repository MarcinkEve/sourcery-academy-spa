import React from 'react';
import { bool, oneOf, string } from 'prop-types';

import './academy-testers-description.scss';
import { ROUTES } from '../../constants/routes';
import TextSection from '../TextSection';
import ImageTestersDescriptionParticlesTop from '../../assets/particles/testers-description-particles-top.svg';
import ImageTestersDescriptionParticlesBottom from '../../assets/particles/testers-description-particles-bottom.svg';
import ImageTestersDescription from '../../assets/images/testers-description.svg';

export const AcademyTestersDescription = ({
  isRightAlligned,
  isHeadingSpacingLarge,
  headingContent,
  isParagraphTextBold,
  paragraphContent,
  buttonText,
  pageRoute,
}) => {
  return (
    <section className="testers-description">
      <ImageTestersDescription className="testers-description__icon" />
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
  isRightAlligned: bool,
  isHeadingSpacingLarge: bool,
  headingContent: string.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: string.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
};

//Leaving this for DEMO until data will be passed
AcademyTestersDescription.defaultProps = {
  isRightAlligned: true,
  isHeadingSpacingLarge: false,
  headingContent: 'Sourcery for Testers',
  isParagraphTextBold: false,
  paragraphContent:
    'Top-notch studies for the future Test Engineers. Students join the Devbridge team as a paid employee for the Academy period (two months) to learn and work. Ones who finish the Academy successfully are invited to continue employment on full time.',
  buttonText: 'Learn more',
  pageRoute: ROUTES.TESTERS,
};
