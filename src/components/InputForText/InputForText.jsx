import React from 'react';

import { string, func } from 'prop-types';

import './inputForText.scss';

const InputForText = ({ name, type, errorMessage, getValue }) => {
  const changeHandler = (e) => {
    getValue(e.target.value);
  };

  // changing text to figma design regardless of props text from the parent component
  const nameForLabel = name[0].toUpperCase() + name.slice(1, name.length);
  const nameForPlaceholder = name.toLowerCase();

  return (
    <div className="text-input">
      <label htmlFor={name} className="text-input__label">
        <span className="text-input__asterisk">*</span>
        <span>{nameForLabel}</span>
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

InputForText.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  getValue: func,
  errorMessage: string,
};

export default InputForText;
