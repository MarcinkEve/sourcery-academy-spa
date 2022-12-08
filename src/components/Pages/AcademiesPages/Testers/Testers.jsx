import { PropTypes } from 'prop-types';
import React from 'react';

import PageLayout from '~/layout/pageLayout';
import AcademyWrapper from '~/components/Pages/AcademiesPages/AcademyWrapper';

import scheduleData from '../scheduleData.json';

export const Testers = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper schedule={scheduleData} />
    </PageLayout>
  );
};

Testers.propTypes = {
  theme: PropTypes.string,
};
