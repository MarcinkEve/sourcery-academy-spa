import React from 'react';

import PropTypes from 'prop-types';

import './inputForText.scss';

const InputForText = ({ name, type, errorMessage, state, setState }) => {
  return (
    <div className="text-inputs__input">
      <label htmlFor={name} className="text-inputs__label">
        <span className="text-inputs__asterisk">*</span>
        {name}
      </label>

      <input
        placeholder={`Enter your ${name}`}
        type={type}
        name={name}
        className={
          errorMessage
            ? 'text-inputs__input-field text-inputs__error'
            : 'text-inputs__input-field'
        }
        value={state}
        onChange={(e) => setState(e.target.value)}
      ></input>
      {errorMessage && (
        <div className="text-inputs__error-message">{errorMessage}</div>
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
