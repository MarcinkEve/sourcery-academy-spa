import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ label, onClick, theme }) => {
  return (
    <button className="btn" onClick={onClick} theme={theme}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.string,
};

Button.defaultProps = {
  onClick: null,
};
