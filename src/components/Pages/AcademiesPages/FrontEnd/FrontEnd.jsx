import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import AcademyWrapper from '~/components/Pages/AcademiesPages/AcademyWrapper';
import { ACADEMY_TYPE } from '~/constants/academyType';

import applyToAcademyData from '../applyToAcademyData.json';
import scheduleData from '../scheduleData.json';

export const FrontEnd = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applyToAcademyData={applyToAcademyData[ACADEMY_TYPE.FRONTEND]}
      />
    </PageLayout>
  );
};

FrontEnd.propTypes = {
  theme: string,
};
