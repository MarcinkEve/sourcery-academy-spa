import { PropTypes } from 'prop-types';
import React from 'react';
import PageLayout from '~/layout/pageLayout';

export const Homepage = ({ theme }) => {
  return (
    <PageLayout>
      <div theme={theme}>
        <h1 style={{ textAlign: 'center' }}>Homepage</h1>
      </div>
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: PropTypes.string,
};
