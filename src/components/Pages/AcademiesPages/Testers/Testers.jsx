import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import AcademyWrapper from '~/components/Pages/AcademiesPages/AcademyWrapper';

import { testersText } from '../applicationProcessData.js';
import scheduleData from '../scheduleData.json';

export const Testers = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper schedule={scheduleData} applicationText={testersText} />
    </PageLayout>
  );
};

Testers.propTypes = {
  theme: string,
};
