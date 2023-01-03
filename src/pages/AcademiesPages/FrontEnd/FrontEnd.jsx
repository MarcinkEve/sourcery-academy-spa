import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';
import { ACADEMY_TYPE } from '~/constants/academyType';
import { applyToAcademyDecorators } from '~/pages/AcademiesPages/AcademyWrapper/ApplyToAcademy/applyToAcademyDecorators';

import applyToAcademyText from '../applyToAcademyData.json';
import admissionData from '../admissionData.json';
import applicationProcessData from '../applicationProcessData.json';
import scheduleData from '../scheduleData.json';

export const FrontEnd = ({ theme }) => {
  const applyToAcademyData = {
    ...applyToAcademyText[ACADEMY_TYPE.FRONTEND],
    academyType: ACADEMY_TYPE.FRONTEND,
    image: applyToAcademyDecorators[ACADEMY_TYPE.FRONTEND].image,
    particles: applyToAcademyDecorators[ACADEMY_TYPE.FRONTEND].particles,
  };

  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applicationText={applicationProcessData.frontEndText}
        applyToAcademyData={applyToAcademyData}
        admissionSectionData={admissionData[ACADEMY_TYPE.FRONTEND]}
      />
    </PageLayout>
  );
};

FrontEnd.propTypes = {
  theme: string,
};
