import { PropTypes } from 'prop-types';
import React from 'react';

export const ApplicationForm = ({ theme }) => {
  return (
    <div theme={theme}>
      <h1 style={{ textAlign: 'center' }}>Application Form</h1>
    </div>
  );
};

ApplicationForm.propTypes = {
  theme: PropTypes.string,
};
