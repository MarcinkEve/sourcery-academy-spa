import React from 'react';
import Article from '../Article';
import { bool, oneOf, string } from 'prop-types';

import { ROUTES } from '../../constants/routes';
import IntroSection from '../IntroSection';

export const HomeFirstSection = ({
  isRightAlligned,
  isHeadingSpacingLarge,
  headingContent,
  isParagraphTextBold,
  paragraphContent,
  buttonText,
  pageRoute,
  articleTitle,
  articleContent,
}) => {
  return (
    <section className="home-first-section">
      <IntroSection
        isRightAlligned={isRightAlligned}
        isHeadingSpacingLarge={isHeadingSpacingLarge}
        headingContent={headingContent}
        isParagraphTextBold={isParagraphTextBold}
        paragraphContent={paragraphContent}
        buttonText={buttonText}
        pageRoute={pageRoute}
      />
      <Article articleTitle={articleTitle} articleContent={articleContent} />
    </section>
  );
};

HomeFirstSection.propTypes = {
  isRightAlligned: bool,
  isHeadingSpacingLarge: bool,
  headingContent: string.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: string.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
  articleTitle: string.isRequired,
  articleContent: string.isRequired,
};

HomeFirstSection.defaultProps = {
  isRightAlligned: false,
  isHeadingSpacingLarge: false,
  headingContent: 'Sourcery Academy',
  isParagraphTextBold: false,
  paragraphContent:
    'Sourcery academy is our free of charge education program created to allow students to improve their skills and prepare for a career in the IT industry. There are three academies available. They serve as our long-term commitment to increase the number of students in Lithuania entering information technologies studies.',
  buttonText: 'View academies',
  pageRoute: ROUTES.ACADEMIES,
  articleTitle: 'Academies',
  articleContent:
    'There are four disciplines available: for developers, testers, front-end developers and kids. Academies are taking place in Devbridge Lithuanian offices. Students, who are willing to join developers, testers or Front-End academies, need to pass the test, prove their best to get an invitation to enroll. This rule doesn’t apply to the kids (7 to 12 years old) academy, the admission is limited only by available number of entries.',
};
