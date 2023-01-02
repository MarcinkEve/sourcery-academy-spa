import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';

import applicationProcessData from '../applicationProcessData.json';
import scheduleData from '../scheduleData.json';

export const Testers = ({ theme }) => {
  return (
    <div>
      <PageLayout theme={theme}>
        <AcademyWrapper
          schedule={scheduleData}
          applicationText={applicationProcessData.testersText}
        />
      </PageLayout>
    </div>
  );
};

Testers.propTypes = {
  theme: string,
};
