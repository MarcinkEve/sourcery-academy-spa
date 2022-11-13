import React from 'react';

import { string, func } from 'prop-types';

import './inputForText.scss';

const InputForText = ({ name, type, errorMessage, state, setState }) => {
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
        value={state}
        onChange={(e) => setState(e.target.value)}
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
  state: string.isRequired,
  setState: func.isRequired,
  errorMessage: string,
};

export default InputForText;
