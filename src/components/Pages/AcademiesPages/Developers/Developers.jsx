import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import AcademyWrapper from '~/components/Pages/AcademiesPages/AcademyWrapper';
import { ACADEMY_TYPE } from '~/constants/academyType';

import applyToAcademyData from '../applyToAcademyData.json';
import scheduleData from '../scheduleData.json';

export const Developers = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applyToAcademyData={applyToAcademyData[ACADEMY_TYPE.DEVELOPERS]}
      />
    </PageLayout>
  );
};

Developers.propTypes = {
  theme: string,
};
