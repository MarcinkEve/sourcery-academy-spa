import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';
import { ACADEMY_TYPE } from '~/constants/academyType';

import applyToAcademyData from '../applyToAcademyData.json';
import applicationProcessData from '../applicationProcessData.json';
import scheduleData from '../scheduleData.json';

export const Testers = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applicationText={applicationProcessData.testersText}
        applyToAcademyData={applyToAcademyData[ACADEMY_TYPE.TESTERS]}
      />
    </PageLayout>
  );
};

Testers.propTypes = {
  theme: string,
};
