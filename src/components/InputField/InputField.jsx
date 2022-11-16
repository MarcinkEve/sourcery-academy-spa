import React from 'react';

import { string, func } from 'prop-types';

import './inputField.scss';

export const InputField = ({
  name,
  label,
  type,
  placeholder,
  errorMessage,
  getValue,
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
        onChange={(e) => {
          getValue(e.target.value);
        }}
      ></input>
      {errorMessage && (
        <div className="input__error-message">{errorMessage}</div>
      )}
    </div>
  );
};

InputField.propTypes = {
  name: string,
  label: string,
  type: string,
  placeholder: string,
  getValue: func,
  errorMessage: string,
};
