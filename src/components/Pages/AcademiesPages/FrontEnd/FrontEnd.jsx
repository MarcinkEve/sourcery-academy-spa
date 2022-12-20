import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import AcademyWrapper from '~/components/Pages/AcademiesPages/AcademyWrapper';

import { frontEndText } from '../applicationProcessData';
import scheduleData from '../scheduleData.json';

export const FrontEnd = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper schedule={scheduleData} applicationText={frontEndText} />
    </PageLayout>
  );
};

FrontEnd.propTypes = {
  theme: string,
};
