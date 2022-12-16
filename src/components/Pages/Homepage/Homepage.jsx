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

export const Homepage = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <IntroSection introSectionData={introSectionData} />
      <Article articleSectionData={articleSectionData} />
      <ExtraWrappingSection>
        <AcademiesDescriptionSection
          developersDescriptionData={developersDescriptionData}
          testersDescriptionData={testersDescriptionData}
          frontEndDescriptionData={frontEndDescriptionData}
          kidsDescriptionData={kidsDescriptionData}
        />
        {/*@TODO: DELETE --> as a placeholder until "Testimonials" section is added: */}
        <h2
          style={{
            textAlign: 'right',
            opacity: '0.5',
            margin: '0',
            height: '200px',
          }}
        >
          Testimonials
        </h2>
      </ExtraWrappingSection>
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: string,
};
