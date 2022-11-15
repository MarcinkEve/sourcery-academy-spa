import React from 'react';

import { string, func } from 'prop-types';

import './inputField.scss';

export const InputField = ({
  name,
  type,
  placeholder,
  errorMessage,
  getValue,
}) => {
  const changeHandler = (e) => {
    getValue(e.target.value);
  };

  return (
    <div className="input">
      <label htmlFor={name} className="input__label">
        <span className="input__label--text">{name}</span>
      </label>

      <input
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        className={
          errorMessage
            ? 'input__input-field input__error'
            : 'input__input-field'
        }
        onChange={changeHandler}
      ></input>
      {errorMessage && (
        <div className="input__error-message">{errorMessage}</div>
      )}
    </div>
  );
};

InputField.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  placeholder: string,
  getValue: func,
  errorMessage: string,
};
