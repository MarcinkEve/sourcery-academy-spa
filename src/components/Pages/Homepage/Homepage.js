import { PropTypes } from 'prop-types';
import React from 'react';

import PageLayout from '~/layout/pageLayout';
import AcademyDescription from '../../AcademyDescription';

export const Homepage = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <h1 style={{ textAlign: 'center' }}>Homepage</h1>
      <AcademyDescription />
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: PropTypes.string,
};
