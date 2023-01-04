import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';
import TestersCornerImage from '~/assets/images/testers-corner-photo.jpg';
import { ACADEMY_TYPE } from '~/constants/academyType';
import { applyToAcademyDecorators } from '~/pages/AcademiesPages/AcademyWrapper/ApplyToAcademy/applyToAcademyDecorators';

import applyToAcademyText from '../applyToAcademyData.json';
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

  const applyToAcademyData = {
    ...applyToAcademyText[ACADEMY_TYPE.TESTERS],
    academyType: ACADEMY_TYPE.TESTERS,
    image: applyToAcademyDecorators[ACADEMY_TYPE.TESTERS].image,
    particles: applyToAcademyDecorators[ACADEMY_TYPE.TESTERS].particles,
  };

  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applicationText={applicationProcessData.testersText}
        landingSectionData={landingSectionData}
        applyToAcademyData={applyToAcademyData}
      />
    </PageLayout>
  );
};

Testers.propTypes = {
  theme: string,
};
