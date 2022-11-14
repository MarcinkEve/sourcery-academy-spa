import { PropTypes } from 'prop-types';
import React from 'react';

export const Homepage = ({ theme }) => {
  return (
    <div theme={theme}>
      <h1 style={{ textAlign: 'center' }}>Homepage</h1>
    </div>
  );
};

Homepage.propTypes = {
  theme: PropTypes.string,
};
