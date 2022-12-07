import React from 'react';
import { shape, string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import IntroSection from '../../IntroSection';
import Article from '../../Article';
import { introSectionData, articleSectionData } from './data.js';
import { textSectionType, articleTypes } from './types';

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
  introSectionData: textSectionType,
  articleSectionData: articleTypes,
};
