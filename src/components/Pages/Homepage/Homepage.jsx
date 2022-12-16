import React from 'react';
import { useNavigate } from 'react-router-dom';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import IntroSection from '~/components/IntroSection';
import Article from '~/components/Article';
import { introSectionData, articleSectionData, mediaData } from './data.js';
import MediaSection from '~/components/MediaSection';
import { ROUTES } from '~/constants/routes';

export const Homepage = ({ theme }) => {
  const nav = useNavigate();

  return (
    <PageLayout theme={theme}>
      <IntroSection introSectionData={introSectionData} />
      <Article articleSectionData={articleSectionData} />
      <MediaSection
        title="Media"
        media={mediaData}
        handleClick={() => nav(ROUTES.MEDIA)}
      />
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: string,
};
