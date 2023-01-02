import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';
import TestersCornerImage from '~/assets/images/testers-corner-photo.jpg';

import applicationProcessData from '../applicationProcessData.json';
import scheduleData from '../scheduleData.json';
import academyLandingSectionData from '../academyLandingSectionData.json';

export const Testers = ({ theme }) => {
  const landingSectionData = {
    ...academyLandingSectionData.testers,
    image: {
      src: TestersCornerImage,
      alt: 'Testers academy students',
    },
  };

  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applicationText={applicationProcessData.testersText}
        landingSectionData={landingSectionData}
      />
    </PageLayout>
  );
};

Testers.propTypes = {
  theme: string,
};
