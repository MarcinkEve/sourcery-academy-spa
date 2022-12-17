import React, { useEffect, useState } from 'react';
import { string, func } from 'prop-types';

import './inputField.scss';
import ErrorMessage from '~/components/ErrorMessage';
import { nameYupSchema, emailYupSchema } from './validationOnBlur';

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

  //Validating input
  useEffect(() => {
    if (inputValue !== null) {
      const validateValue = async () => {
        //validating name or email
        const typeOfInput = type === 'text' ? nameYupSchema : emailYupSchema;
        try {
          const yupValidation = await typeOfInput.validate(inputValue);
          setErrorMessage(null);
          setValidInput(yupValidation);
        } catch (err) {
          setErrorMessage(err.message);
          setValidInput(null);
        }
      };
      validateValue();
    }
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
