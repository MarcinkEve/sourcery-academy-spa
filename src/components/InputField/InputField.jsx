import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { string, func, bool } from 'prop-types';

import ErrorMessage from '~/components/ErrorMessage';

import { handleValidation } from './validationOnBlur';
import './inputField.scss';

export const InputField = ({ name, label, type, placeholder, getValue, isRequired = true }) => {
  const [inputValue, setInputValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [validInput, setValidInput] = useState(null);

  useEffect(() => {
    handleValidation(inputValue, type, setErrorMessage, setValidInput);
  }, [inputValue]);

  //Send valid input string
  useEffect(() => {
    if (validInput && getValue) return getValue(validInput);
    return;
  }, [validInput]);

  return (
    <div className="input">
      <label
        htmlFor={name}
        className={classNames('input__label', {
          'input__label--required': isRequired,
        })}
      >
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
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

InputField.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired,
  getValue: func,
  isRequired: bool,
};
