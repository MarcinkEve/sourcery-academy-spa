import React from 'react';

import { string, func } from 'prop-types';

import './inputField.scss';
import ErrorMessage from '../ErrorMessage';

export const InputField = ({
  name,
  label,
  type,
  placeholder,
  errorMessage,
  getValue,
  getOnBlurValue,
}) => {
  return (
    <div className="input">
      <label htmlFor={name} className="input__label">
        {label}
      </label>

      <input
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        className={errorMessage ? 'input__field input__error' : 'input__field'}
        onChange={getValue}
        onBlur={getOnBlurValue}
      ></input>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

InputField.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired,
  getValue: func,
  getOnBlurValue: func,
  errorMessage: string,
};
