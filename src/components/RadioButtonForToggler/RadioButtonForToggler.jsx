import React from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';

import './radio-button-for-toggler.scss';

export const RadioButtonForToggler = ({
  name,
  value,
  handleChange,
  radioValue,
}) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
        className={'radio-toggler__input'}
        checked={value === radioValue}
        id={value}
      />
      <label
        htmlFor={value}
        className={classNames('radio-toggler__label', {
          'radio-toggler__label--checked': value === radioValue,
        })}
      >
        {value}
      </label>
    </>
  );
};

RadioButtonForToggler.propTypes = {
  name: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
  radioValue: string.isRequired,
};
