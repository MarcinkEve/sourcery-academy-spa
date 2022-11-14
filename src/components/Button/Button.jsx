import React from 'react';
import { string, func } from 'prop-types';

import './button.scss';

export const Button = ({ label, handleClick }) => {
  return (
    <button className="btn" type="button" onClick={handleClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: string.isRequired,
  handleClick: func.isRequired,
};
