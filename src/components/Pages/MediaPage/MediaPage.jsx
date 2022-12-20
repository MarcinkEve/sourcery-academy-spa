import React, { useEffect } from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import MediaSection from '~/components/MediaSection';

import './media-page.scss';
import mediaData from './data.json';

const filterMedia = (academy) =>
  mediaData.filter((item) => item.academy === academy);

const mediaDevelopers = filterMedia('developers');
const mediaTesters = filterMedia('testers');
const mediaFrontend = filterMedia('frontend');

export const MediaPage = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout theme={theme}>
      <div className="media-page-wrapper">
        <MediaSection
          title="Sourcery for Developers"
          mediaList={mediaDevelopers}
        />
        <MediaSection title="Sourcery for Testers" mediaList={mediaTesters} />
        <MediaSection
          title="Sourcery for Front-end"
          mediaList={mediaFrontend}
        />
      </div>
    </PageLayout>
  );
};

MediaPage.propTypes = {
  theme: string,
};
