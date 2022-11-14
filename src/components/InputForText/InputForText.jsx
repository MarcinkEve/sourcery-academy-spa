import React from 'react';

import { string, func } from 'prop-types';

import './inputForText.scss';

const InputForText = ({ name, type, errorMessage, getValue }) => {
  const changeHandler = (e) => {
    getValue(e.target.value);
  };

  return (
    <div className="text-input">
      <label htmlFor={name} className="text-input__label">
        <span className="text-input__asterisk">*</span>
        {name}
      </label>

      <input
        placeholder={`Enter your ${name}`}
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
