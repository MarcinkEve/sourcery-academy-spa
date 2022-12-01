import { PropTypes } from 'prop-types';
import React from 'react';
import PageLayout from '~/layout/pageLayout';

export const Testers = ({ theme }) => {
  return (
    <PageLayout>
      <div theme={theme}>
        <h1 style={{ textAlign: 'center' }}>Sourcery for Testers</h1>
      </div>
    </PageLayout>
  );
};

Testers.propTypes = {
  theme: PropTypes.string,
};
