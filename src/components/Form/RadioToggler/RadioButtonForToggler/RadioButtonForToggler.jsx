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
    <div className={'radio-toggler-item'}>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
        className={'radio-toggler-item__input'}
        checked={value === radioValue}
        id={value}
      />
      <label
        htmlFor={value}
        className={classNames('radio-toggler-item__label', {
          'radio-toggler-item__label--checked': value === radioValue,
        })}
        title={value}
        aria-label={value}
      >
        <span className={'radio-toggler-item__input-label'} aria-hidden="true">
          {value}
        </span>
      </label>
    </div>
  );
};

RadioButtonForToggler.propTypes = {
  name: string.isRequired,
  value: string.isRequired,
  handleChange: func.isRequired,
  radioValue: string.isRequired,
};
