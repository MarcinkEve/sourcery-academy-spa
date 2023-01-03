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

export const Testers = ({ theme }) => {
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
        applyToAcademyData={applyToAcademyData}
        admissionSectionData={admissionData[ACADEMY_TYPE.TESTERS]}
      />
    </PageLayout>
  );
};

Testers.propTypes = {
  theme: string,
};
