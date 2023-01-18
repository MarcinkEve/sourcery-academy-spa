import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { string, func, bool, oneOf } from 'prop-types';

import ErrorMessage from '~/components/UI/ErrorMessage';
import { EmailDuplicateContext } from '~/pages/ApplicationPage/ApplicationPage';

import './inputField.scss';
import { handleValidation } from './validationOnBlur';

export const InputField = ({
  name,
  label,
  type,
  placeholder,
  getValue,
  isRequired = true,
}) => {
  const [inputValue, setInputValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [validInput, setValidInput] = useState(null);
  const isEmailDuplicate = useContext(EmailDuplicateContext);

  useEffect(() => {
    handleValidation(inputValue, type, setErrorMessage, setValidInput);
  }, [inputValue]);

  useEffect(() => {
    if (isEmailDuplicate && type === 'email') {
      setValidInput(false);
      setErrorMessage('This email has already been registered');
    }
  }, [isEmailDuplicate]);

  //Send valid input string
  useEffect(() => {
    if (validInput && getValue) return getValue(validInput);
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
        className={classNames('input__field', {
          input__error: errorMessage,
        })}
        autoComplete={'disabledForMVP'}
        onBlur={(e) => {
          setInputValue(e.target.value);
        }}
        aria-invalid={errorMessage}
        aria-required={isRequired}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

InputField.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  type: oneOf(['text', 'email']).isRequired,
  placeholder: string.isRequired,
  getValue: func,
  isRequired: bool,
};
