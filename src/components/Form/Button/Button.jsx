import React from 'react';
import { string, func, bool } from 'prop-types';

import './button.scss';

export const Button = ({ label, handleClick, disabled }) => {
  return (
    <button
      className="btn"
      type="button"
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: string.isRequired,
  handleClick: func.isRequired,
  disabled: bool,
};
