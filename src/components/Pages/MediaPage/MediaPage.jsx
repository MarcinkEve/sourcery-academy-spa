import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import MediaSection from '~/components/MediaSection';
import { getMedia } from '~/components/MediaSection/MediaProvider';
import { MediaError } from '~/components/MediaSection/MediaError';

import './media-page.scss';

export const MediaPage = ({ theme }) => {
  const { data, error } = getMedia();
  const { targetId } = useLocation().state || {};

  const filterMedia = (academy) =>
    data.filter((item) => item.academy === academy);

  const developersMedia = filterMedia('developers');
  const testersMedia = filterMedia('testers');
  const frontendMedia = filterMedia('frontend');

  useEffect(() => {
    if (targetId) {
      return document.getElementById(targetId).scrollIntoView();
    }
    return window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout theme={theme}>
      {error ? (
        <MediaError />
      ) : (
        <div className="media-page-wrapper">
          <MediaSection
            title="Sourcery for Developers"
            mediaList={developersMedia}
            id="developersMedia"
          />
          <MediaSection
            title="Sourcery for Testers"
            mediaList={testersMedia}
            id="testersMedia"
          />
          <MediaSection
            title="Sourcery for Front-end"
            mediaList={frontendMedia}
            id="frontendMedia"
          />
        </div>
      )}
    </PageLayout>
  );
};

MediaPage.propTypes = {
  theme: string,
};
