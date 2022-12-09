import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import ExtraWrappingSection from '~/layout/ExtraWrappingSection';
import IntroSection from '~/components/IntroSection';
import Article from '~/components/Article';
import AcademiesDescriptionSection from '~/components/AcademiesDescriptionSection';
import {
  introSectionData,
  articleSectionData,
  developersDescriptionData,
  testersDescriptionData,
  frontEndDescriptionData,
  kidsDescriptionData,
} from './data.js';
import { textSectionType, articleTypes } from './types';

export const Homepage = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <IntroSection introSectionData={introSectionData} />
      <Article articleSectionData={articleSectionData} />
      <ExtraWrappingSection theme={theme}>
        <AcademiesDescriptionSection
          developersDescriptionData={developersDescriptionData}
          testersDescriptionData={testersDescriptionData}
          frontEndDescriptionData={frontEndDescriptionData}
          kidsDescriptionData={kidsDescriptionData}
        />
      </ExtraWrappingSection>
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: string,
  introSectionData: textSectionType,
  articleSectionData: articleTypes,
  developersDescriptionData: textSectionType,
  testersDescriptionData: textSectionType,
  frontEndDescriptionData: textSectionType,
  kidsDescriptionData: textSectionType,
};
