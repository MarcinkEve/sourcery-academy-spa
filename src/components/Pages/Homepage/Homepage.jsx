import React from 'react';
import { bool, oneOf, shape, string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import { ROUTES } from '../../../constants/routes';
import IntroSection from '../../IntroSection';
import Article from '../../Article';
import { introSectionData, articleSectionData } from './data.js';

export const Homepage = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <IntroSection introSectionData={introSectionData} />
      <Article articleSectionData={articleSectionData} />
    </PageLayout>
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
