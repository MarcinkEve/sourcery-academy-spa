import React from 'react';
import { string } from 'prop-types';

import { ApplicationProcessSection } from '~/components/ApplicationProcessSection/ApplicationProcessSection';
import PageLayout from '~/layout/pageLayout';
import AcademyWrapper from '~/components/Pages/AcademiesPages/AcademyWrapper';

import { frontEndText } from '../applicationProcessData';
import scheduleData from '../scheduleData.json';

export const FrontEnd = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <ApplicationProcessSection text={frontEndText} />
      <AcademyWrapper schedule={scheduleData} />
    </PageLayout>
  );
};

FrontEnd.propTypes = {
  theme: string,
};
