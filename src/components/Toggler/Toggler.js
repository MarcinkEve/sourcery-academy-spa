import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import './toggler.scss';

export const Toggler = ({ name, value, handleChange, radioValue }) => {
  return (
    <>
      <label
        htmlFor={value}
        className={classNames('radio-toggler__label', {
          'radio-toggler__label--checked': value === radioValue,
        })}
      >
        <input
          type="radio"
          name={name}
          value={value}
          onChange={handleChange}
          className={`radio-toggler__input ${value}`}
          checked={value === radioValue}
          id={value}
        />
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
