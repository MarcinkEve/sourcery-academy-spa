import React from 'react';
import { bool, oneOf, string } from 'prop-types';

import './academy-frontend-description.scss';
import { ROUTES } from '../../constants/routes';
import TextSection from '../TextSection';
import IconFrontEndDescription from '../../assets/icons/icon-frontend-description.svg';
import IconFrontEndDescriptionParticlesTop from '../../assets/icons/icon-frontend-description-particles-top.svg';
import IconFrontEndDescriptionParticlesBottom from '../../assets/icons/icon-frontend-description-particles-bottom.svg';

export const AcademyFrontEndDescription = ({
  isRightAlligned,
  isHeadingSpacingLarge,
  headingContent,
  isParagraphTextBold,
  paragraphContent,
  buttonText,
  pageRoute,
}) => {
  return (
    <section className="frontend-description">
      <IconFrontEndDescription className="frontend-description__icon" />
      <div className="frontend-description__content">
        <IconFrontEndDescriptionParticlesTop className="frontend-description__top-particles" />
        <TextSection
          isRightAlligned={isRightAlligned}
          isHeadingSpacingLarge={isHeadingSpacingLarge}
          headingContent={<h3>{headingContent}</h3>}
          isParagraphTextBold={isParagraphTextBold}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
        <IconFrontEndDescriptionParticlesBottom className="frontend-description__bottom-particles" />
      </div>
    </section>
  );
};

AcademyFrontEndDescription.propTypes = {
  isRightAlligned: bool,
  isHeadingSpacingLarge: bool,
  headingContent: string.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: string.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
};

AcademyFrontEndDescription.defaultProps = {
  isRightAlligned: true,
  isHeadingSpacingLarge: false,
  headingContent: 'Sourcery for Front-End',
  isParagraphTextBold: false,
  paragraphContent:
    'Start your career in software development with the intense program at Sourcery for Front-End Developers. Complete the admission and enter our free of charge two-month academy this autumn in Vilnius to learn from our top specialists.',
  buttonText: 'Learn more',
  pageRoute: ROUTES.FRONTEND,
};
