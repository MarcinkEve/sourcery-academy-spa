import React, { useEffect, useState } from 'react';
import { string, func } from 'prop-types';

import './inputField.scss';
import ErrorMessage from '~/components/ErrorMessage';
import { validationHandler } from './validationOnBlur';

export const InputField = ({
  name,
  label,
  type,
  placeholder,
  getValidatedValue,
}) => {
  const [inputValue, setInputValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [validInput, setValidInput] = useState(null);

  useEffect(() => {
    validationHandler(inputValue, type, setErrorMessage, setValidInput);
  }, [inputValue]);

  //Send valid input string
  useEffect(() => {
    if (validInput && getValidatedValue) return getValidatedValue(validInput);
    return;
  }, [validInput]);

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
        onBlur={(e) => {
          setInputValue(e.target.value);
        }}
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
  getValidatedValue: func,
};
