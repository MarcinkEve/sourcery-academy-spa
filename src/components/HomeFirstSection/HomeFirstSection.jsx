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
