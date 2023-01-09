import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';
import FrontEndCornerImage from '~/assets/images/frontend-corner-photo.jpg';
import { ACADEMY_TYPE } from '~/constants/academyType';
import { applyToAcademyDecorators } from '~/pages/AcademiesPages/AcademyWrapper/ApplyToAcademy/applyToAcademyDecorators';

import applyToAcademyText from '../applyToAcademyData.json';
import admissionData from '../admissionData.json';
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

  const applyToAcademyData = {
    ...applyToAcademyText[ACADEMY_TYPE.FRONTEND],
    academyType: ACADEMY_TYPE.FRONTEND,
    image: applyToAcademyDecorators[ACADEMY_TYPE.FRONTEND].image,
    particles: applyToAcademyDecorators[ACADEMY_TYPE.FRONTEND].particles,
  };

  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData[ACADEMY_TYPE.FRONTEND]}
        applicationText={applicationProcessData.frontEndText}
        landingSectionData={landingSectionData}
        applyToAcademyData={applyToAcademyData}
        admissionSectionData={admissionData[ACADEMY_TYPE.FRONTEND]}
      />
    </PageLayout>
  );
};

FrontEnd.propTypes = {
  theme: string,
};
