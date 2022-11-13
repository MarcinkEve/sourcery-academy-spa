import React from 'react';

import PropTypes from 'prop-types';

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
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default InputForText;
