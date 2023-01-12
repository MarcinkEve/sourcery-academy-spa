import React, { useEffect, useContext } from 'react';
import { string } from 'prop-types';

import ExtraWrappingSection from '~/layouts/ExtraWrappingSection';
import PageLayout from '~/layouts/pageLayout';
import IntroSection from '~/pages/Homepage/IntroSection';
import Article from '~/pages/Homepage/ArticleSection';
import AcademiesDescriptionSection from '~/pages/Homepage/AcademiesDescriptionSection';
import TestimonialSection from '~/pages/Homepage/TestimonialSection';
import { MediaSectionHomepage } from '~/pages/Homepage/MediaSection/MediaSectionHomepage';
import { LoadingSpinner } from '~/components/UI/LoadingSpinner/LoadingSpinner';
import { getTestimonials } from '~/widgets/Testimonial/TestimonialProvider';

import {
  introSectionData,
  articleSectionData,
  developersDescriptionData,
  testersDescriptionData,
  frontEndDescriptionData,
  kidsDescriptionData,
} from './data.js';

export const Homepage = ({ theme }) => {
  const { isLoading } = getTestimonials();
  useEffect(() => window.scrollTo(0, 0), []);

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
      )
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: string,
};
