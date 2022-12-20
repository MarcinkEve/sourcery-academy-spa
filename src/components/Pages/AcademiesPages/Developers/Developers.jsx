import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import AcademyWrapper from '~/components/Pages/AcademiesPages/AcademyWrapper';

import { developersText } from '../applicationProcessData.js';
import scheduleData from '../scheduleData.json';

export const Developers = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applicationText={developersText}
      />
    </PageLayout>
  );
};

Developers.propTypes = {
  theme: string,
};
