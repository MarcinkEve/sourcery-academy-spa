import { PropTypes } from 'prop-types';
import React from 'react';

export const Testers = ({ theme }) => {
  return (
    <div theme={theme}>
      <h1 style={{ textAlign: 'center' }}>Sourcery for Testers</h1>
    </div>
  );
};

Testers.propTypes = {
  theme: PropTypes.string,
};
