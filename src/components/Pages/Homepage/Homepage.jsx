import React from 'react';
import { useNavigate } from 'react-router-dom';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import ExtraWrappingSection from '~/layout/ExtraWrappingSection';
import IntroSection from '~/components/IntroSection';
import Article from '~/components/Article';
import AcademiesDescriptionSection from '~/components/AcademiesDescriptionSection';
import { TestimonialSection } from '~/components/TestimonialSection/Homepage/TestimonialSection';
import MediaSection from '~/components/MediaSection';
import {
  introSectionData,
  articleSectionData,
  developersDescriptionData,
  testersDescriptionData,
  frontEndDescriptionData,
  kidsDescriptionData,
  mediaData,
} from './data.js';
import { ROUTES } from '~/constants/routes';

export const Homepage = ({ theme }) => {
  const nav = useNavigate();

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
        <MediaSection
          title="Media"
          mediaList={mediaData}
          handleClick={() => nav(ROUTES.MEDIA)}
        />
      </ExtraWrappingSection>
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: string,
};
