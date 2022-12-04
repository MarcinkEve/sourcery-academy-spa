import { PropTypes } from 'prop-types';
import React from 'react';

import PageLayout from '~/layout/pageLayout';
import AcademiesDescriptionSection from '../../AcademiesDescriptionSection';

export const Homepage = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <h1 style={{ textAlign: 'center' }}>Homepage</h1>
      <AcademiesDescriptionSection />
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: PropTypes.string,
};
