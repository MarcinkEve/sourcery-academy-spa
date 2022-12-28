import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';

import applicationProcessData from '../applicationProcessData.json';
import scheduleData from '../scheduleData.json';

export const FrontEnd = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applicationText={applicationProcessData.frontEndText}
      />
    </PageLayout>
  );
};

FrontEnd.propTypes = {
  theme: string,
};
