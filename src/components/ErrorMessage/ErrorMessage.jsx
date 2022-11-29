import React from 'react';
import { string } from 'prop-types';

import './errorMessage.scss';

export const ErrorMessage = ({ message }) => {
  return <div className="error-message">{message}</div>;
};

ErrorMessage.propTypes = {
  message: string.isRequired,
};
