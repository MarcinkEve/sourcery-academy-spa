import { PropTypes } from 'prop-types';
import React from 'react';
import PageLayout from '~/layout/pageLayout';

export const FrontEnd = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <h1 style={{ textAlign: 'center' }}>Sourcery for Front-End</h1>
    </PageLayout>
  );
};

FrontEnd.propTypes = {
  theme: PropTypes.string,
};
