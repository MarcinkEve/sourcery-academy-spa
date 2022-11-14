import { PropTypes } from 'prop-types';
import React from 'react';

export const FrontEnd = ({ theme }) => {
  return (
    <div theme={theme}>
      <h1 style={{ textAlign: 'center' }}>Sourcery for Front-End</h1>
    </div>
  );
};

FrontEnd.propTypes = {
  theme: PropTypes.string,
};
