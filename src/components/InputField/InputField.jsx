import React, { useState, useEffect } from 'react';

import { string, func } from 'prop-types';

import './inputField.scss';

export const InputField = ({ name, type, errorMessage, getValue }) => {
  const [nameForLabel, setNameForLabel] = useState('');
  const [nameForPlaceholder, setNameForPlaceholder] = useState('');

  const changeHandler = (e) => {
    getValue(e.target.value);
  };

  // changing text to figma design regardless of props text from the parent component
  useEffect(() => {
    if (name) {
      setNameForLabel(name[0].toUpperCase() + name.slice(1, name.length));
      setNameForPlaceholder(name.toLowerCase());
    }
  }, [name]);

  return (
    <div className="text-input">
      <label htmlFor={name} className="text-input__label">
        <span className="text-input__label--asterisk">*</span>
        <span className="text-input__label--text">{nameForLabel}</span>
      </label>

      <input
        placeholder={`Enter your ${nameForPlaceholder}`}
        type={type}
        name={name}
        className={
          errorMessage
            ? 'text-input__input-field text-input__error'
            : 'text-input__input-field'
        }
        onChange={changeHandler}
      ></input>
      {errorMessage && (
        <div className="text-input__error-message">{errorMessage}</div>
      )}
    </div>
  );
};

InputField.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  getValue: func,
  errorMessage: string,
};
