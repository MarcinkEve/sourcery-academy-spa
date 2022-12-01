import { PropTypes } from 'prop-types';
import React from 'react';
import PageLayout from '~/layout/pageLayout';

export const Developers = ({ theme }) => {
  return (
    <PageLayout>
      <div theme={theme}>
        <h1 style={{ textAlign: 'center' }}>Sourcery for Developers</h1>
      </div>
    </PageLayout>
  );
};

Developers.propTypes = {
  theme: PropTypes.string,
};
