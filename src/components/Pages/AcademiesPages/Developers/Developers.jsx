import React from 'react';
import { string } from 'prop-types';

import { ApplicationProcessSection } from '~/components/ApplicationProcessSection/ApplicationProcessSection';
import PageLayout from '~/layout/pageLayout';
import AcademyWrapper from '~/components/Pages/AcademiesPages/AcademyWrapper';

import { developersText } from '../applicationProcessData.js';
import scheduleData from '../scheduleData.json';

export const Developers = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <ApplicationProcessSection text={developersText} />
      <AcademyWrapper schedule={scheduleData} />
    </PageLayout>
  );
};

Developers.propTypes = {
  theme: string,
};
