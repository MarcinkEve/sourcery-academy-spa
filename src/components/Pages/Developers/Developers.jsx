import { PropTypes } from 'prop-types';
import React from 'react';
import PageLayout from '~/layout/pageLayout';

export const Developers = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <h1 style={{ textAlign: 'center' }}>Sourcery for Developers</h1>
    </PageLayout>
  );
};

Developers.propTypes = {
  theme: PropTypes.string,
};
