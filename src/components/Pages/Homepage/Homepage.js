import React from 'react';
import { bool, oneOf, shape, string } from 'prop-types';

import { ROUTES } from '../../../constants/routes';
import IntroSection from '../../IntroSection';
import Article from '../../Article';
import { introSectionData, articleSectionData } from './data.js';

export const Homepage = ({ theme }) => {
  return (
    <div theme={theme}>
      <IntroSection introSectionData={introSectionData} />
      <Article articleSectionData={articleSectionData} />
    </div>
  );
};

Homepage.propTypes = {
  theme: string,
  introSectionData: shape({
    isRightAlligned: bool,
    isHeadingSpacingLarge: bool,
    headingContent: string.isRequired,
    isParagraphTextBold: bool,
    paragraphContent: string.isRequired,
    buttonText: string,
    pageRoute: oneOf([...Object.values(ROUTES)]),
  }),

  articleSectionData: shape({
    articleTitle: string.isRequired,
    articleContent: string.isRequired,
  }),
};
