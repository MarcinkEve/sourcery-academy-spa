import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import IntroSection from '~/components/IntroSection';
import Article from '~/components/Article';
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
};
