import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import IntroSection from '~/components/IntroSection';
import Article from '~/components/Article';
import AcademiesDescriptionSection from '~/components/AcademiesDescriptionSection';
import {
  introSectionData,
  articleSectionData,
  developersDescriptionData,
} from './data.js';
import { textSectionType, articleTypes } from './types';

export const Homepage = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <IntroSection introSectionData={introSectionData} />
      <Article articleSectionData={articleSectionData} />
      <AcademiesDescriptionSection
        developersDescriptionData={developersDescriptionData}
      />
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: string,
  introSectionData: textSectionType,
  articleSectionData: articleTypes,
  developersDescriptionData: textSectionType,
};
