import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';

import applicationProcessData from '../applicationProcessData.json';
import scheduleData from '../scheduleData.json';

export const Developers = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applicationText={applicationProcessData.developersText}
      />
    </PageLayout>
  );
};

Developers.propTypes = {
  theme: string,
};
