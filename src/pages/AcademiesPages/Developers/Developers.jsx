import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';
import DevelopersCornerImage from '~/assets/images/developers-corner-photo.jpg';

import applicationProcessData from '../applicationProcessData.json';
import scheduleData from '../scheduleData.json';
import academyLandingSectionData from '../academyLandingSectionData.json';

export const Developers = ({ theme }) => {
  const landingSectionData = {
    ...academyLandingSectionData.developers,
    image: {
      src: DevelopersCornerImage,
      alt: 'Developers academy graduators',
    },
  };

  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applicationText={applicationProcessData.developersText}
        landingSectionData={landingSectionData}
      />
    </PageLayout>
  );
};

Developers.propTypes = {
  theme: string,
};
