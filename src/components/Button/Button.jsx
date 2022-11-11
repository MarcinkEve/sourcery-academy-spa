import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export const Button = ({ label, onClick, theme }) => {
  return (
    <button className="btn" type="button" onClick={onClick} theme={theme}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf([
    'home',
    'developers',
    'testers',
    'front-end',
    'application',
  ]),
};
