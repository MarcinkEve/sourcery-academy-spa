import React, { useState } from 'react';

import PropTypes from 'prop-types';

import './inputsForText.scss';

const InputsForText = ({ name, type, errorMessage }) => {
  const [enteredValue, setEnteredValue] = useState();

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
        value={enteredValue}
        onChange={(e) => setEnteredValue(e.target.value)}
      ></input>
      {errorMessage && (
        <div className="text-inputs__error-message">{errorMessage}</div>
      )}
    </div>
  );
};

InputsForText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default InputsForText;
