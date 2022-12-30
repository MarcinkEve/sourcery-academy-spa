import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';
import { ACADEMY_TYPE } from '~/constants/academyType';

import applyToAcademyData from '../applyToAcademyData.json';
import applicationProcessData from '../applicationProcessData.json';
import scheduleData from '../scheduleData.json';

export const FrontEnd = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applicationText={applicationProcessData.frontEndText}
        applyToAcademyData={applyToAcademyData[ACADEMY_TYPE.FRONTEND]}
      />
    </PageLayout>
  );
};

FrontEnd.propTypes = {
  theme: string,
};
