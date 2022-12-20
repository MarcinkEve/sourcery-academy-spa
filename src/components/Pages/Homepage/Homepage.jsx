import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import ExtraWrappingSection from '~/layout/ExtraWrappingSection';
import IntroSection from '~/components/IntroSection';
import Article from '~/components/Article';
import AcademiesDescriptionSection from '~/components/AcademiesDescriptionSection';
import { TestimonialSection } from '~/components/TestimonialSection/Homepage/TestimonialSection';
import { MediaSectionHomepage } from '~/components/MediaSection/MediaSectionHomepage/MediaSectionHomepage';
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
        <TestimonialSection />
        <MediaSectionHomepage />
      </ExtraWrappingSection>
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: string,
};
