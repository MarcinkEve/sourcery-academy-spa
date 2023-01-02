import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';
import FrontEndCornerImage from '~/assets/images/frontend-corner-photo.jpg';

import applicationProcessData from '../applicationProcessData.json';
import scheduleData from '../scheduleData.json';
import academyLandingSectionData from '../academyLandingSectionData.json';

export const FrontEnd = ({ theme }) => {
  const landingSectionData = {
    ...academyLandingSectionData.frontEnd,
    image: {
      src: FrontEndCornerImage,
      alt: 'FrontEnd academy graduators',
    },
  };

  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applicationText={applicationProcessData.frontEndText}
        landingSectionData={landingSectionData}
      />
    </PageLayout>
  );
};

FrontEnd.propTypes = {
  theme: string,
};
