import { PropTypes } from 'prop-types';
import React from 'react';

export const Developers = ({ theme }) => {
  return (
    <div theme={theme}>
      <h1 style={{ textAlign: 'center' }}>Sourcery for Developers</h1>
    </div>
  );
};

Developers.propTypes = {
  theme: PropTypes.string,
};
