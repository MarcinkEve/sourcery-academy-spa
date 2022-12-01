import React from 'react';
import { bool, element, oneOf, string } from 'prop-types';

import './intro-section.scss';
import IntroIcon from '../../assets/icons/icon-intro.svg';
import TextSection from '../TextSection';
import { ROUTES } from '../../constants/routes';

export const IntroSection = ({
  isRightAlligned,
  isHeadingSpacingLarge,
  headingContent,
  isParagraphTextBold,
  paragraphContent,
  buttonText,
  pageRoute,
}) => {
  return (
    <div className="intro-section">
      <div className="intro-section__paragraph">
        <TextSection
          isRightAlligned={isRightAlligned}
          isHeadingSpacingLarge={isHeadingSpacingLarge}
          headingContent={<h2>{headingContent}</h2>}
          isParagraphTextBold={isParagraphTextBold}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
      </div>
      <IntroIcon className="intro-section__image" />
    </div>
  );
};

IntroSection.propTypes = {
  isRightAlligned: bool,
  isHeadingSpacingLarge: bool,
  headingContent: string.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: string.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
};

IntroSection.defaultProps = {
  isRightAlligned: false,
  isHeadingSpacingLarge: true,
  headingContent: 'Sourcery Academy',
  isParagraphTextBold: false,
  paragraphContent:
    'Sourcery academy is our free of charge education program created to allow students to improve their skills and prepare for a career in the IT industry. There are three academies available. They serve as our long-term commitment to increase the number of students in Lithuania entering information technologies studies.',
  buttonText: 'View academies',
  pageRoute: ROUTES.ACADEMIES,
};
