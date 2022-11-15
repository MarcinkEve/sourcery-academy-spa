import React from 'react';
import PropTypes from 'prop-types';

export const Toggler = ({ index, name, value, handleChange, radioValue }) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
        className={`radio-toggler__input ${value}`}
        checked={value === radioValue}
        id={value}
      />
      <label
        htmlFor={value}
        className={
          value === radioValue
            ? 'radio-toggler__label' + index
            : 'radio-toggler__label'
        }
      >
        {value}
      </label>
    </>
  );
};

Toggler.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  radioValue: PropTypes.string.isRequired,
};
