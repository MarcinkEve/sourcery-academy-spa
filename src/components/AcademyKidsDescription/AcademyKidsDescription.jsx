import React from 'react';
import { bool, oneOf, string } from 'prop-types';

import './academy-kids-description.scss';
import { ROUTES } from '../../constants/routes';
import TextSection from '../TextSection';
import ImageKidsDescription from '../../assets/images/kids-description.svg';
import ImageKidsDescriptionParticlesTop from '../../assets/particles/kids-description-particles-top.svg';
import ImageKidsDescriptionParticlesBottom from '../../assets/particles/kids-description-particles-bottom.svg';

export const AcademyKidsDescription = ({
  isRightAlligned,
  isHeadingSpacingLarge,
  headingContent,
  isParagraphTextBold,
  paragraphContent,
  buttonText,
  pageRoute,
}) => {
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
      <ImageKidsDescription className="kids-description__icon" />
    </section>
  );
};

AcademyKidsDescription.propTypes = {
  isRightAlligned: bool,
  isHeadingSpacingLarge: bool,
  headingContent: string.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: string.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
};

//Leaving this for DEMO until data will be passed
AcademyKidsDescription.defaultProps = {
  isRightAlligned: false,
  isHeadingSpacingLarge: false,
  headingContent: 'Sourcery for Kids',
  isParagraphTextBold: false,
  paragraphContent:
    'Sourcery for Kids seeks to educate kids giving them opportunity to learn and apply technological product development skills. For the entire academic year, the children will study key aspects of programming, from logical concepts and functions, through to variables, sequences, coordinates, and movement.',
  buttonText: 'Learn more',
  pageRoute: ROUTES.KIDS,
};
