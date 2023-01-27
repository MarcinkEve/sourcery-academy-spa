import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import { MediaSection } from '~/widgets/Media/MediaSection';
import { getMedia } from '~/pages/AcademiesPages/AcademyWrapper/MediaSection/MediaProvider';
import { MEDIA_PAGE_SECTION_IDS } from '~/widgets/Media/constants';
import Error from '~/components/UI/Error';

import './media-page.scss';

export const MediaPage = ({ theme }) => {
  const { data, error } = getMedia();
  const { targetId } = useLocation().state || {};

  const getMediaByAcademy = (academy) =>
    data.filter((item) => item.academy === academy);

  const developersMedia = getMediaByAcademy('developers');
  const testersMedia = getMediaByAcademy('testers');
  const frontendMedia = getMediaByAcademy('frontend');

  useEffect(() => {
    if (targetId) {
      return document.getElementById(targetId).scrollIntoView();
    }
    return window.scrollTo(0, 80);
  }, []);

  return (
    <PageLayout theme={theme}>
      <div className="media-page-wrapper">
        {error ? (
          <Error title="Media" />
        ) : (
          <>
            <MediaSection
              title="Sourcery for Developers"
              mediaList={developersMedia}
              id={MEDIA_PAGE_SECTION_IDS.DEVELOPERS}
            />
            <MediaSection
              title="Sourcery for Testers"
              mediaList={testersMedia}
              id={MEDIA_PAGE_SECTION_IDS.TESTERS}
            />
            <MediaSection
              title="Sourcery for Front-end"
              mediaList={frontendMedia}
              id={MEDIA_PAGE_SECTION_IDS.FRONTEND}
            />
          </>
        )}
      </div>
    </PageLayout>
  );
};

MediaPage.propTypes = {
  theme: string,
};
