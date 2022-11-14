import React from 'react';
import { string, func } from 'prop-types';

import './button.scss';

export const Button = ({ label, onClick, theme }) => {
  return (
    <button className="btn" type="button" onClick={onClick} theme={theme}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: string.isRequired,
  onClick: func,
  theme: string,
};
