import React from 'react';
import PropTypes from 'prop-types';

import './toggleris.scss';

export const Toggleris = ({ index, name, value, handleChange, radioValue }) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
        className={`radio-toggleris__inputas ${value.toLowerCase()}`}
        checked={radioValue === value}
        id={value}
      />
      <label
        htmlFor={value}
        className={
          value === radioValue
            ? 'radio-toggleris__labelis' + index
            : 'radio-toggleris__labelis'
        }
      >
        {value}
      </label>
    </>
  );
};

Toggleris.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  radioValue: PropTypes.string.isRequired,
};
