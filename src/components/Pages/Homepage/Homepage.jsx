import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import AcademiesDescriptionSection from '~/components/AcademiesDescriptionSection';

export const Homepage = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <h1 style={{ textAlign: 'center' }}>Homepage</h1>
      <AcademiesDescriptionSection />
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: string,
};
