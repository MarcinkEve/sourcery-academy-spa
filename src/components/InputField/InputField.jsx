import React, { useEffect, useState } from 'react';

import { string, func } from 'prop-types';

import './inputField.scss';
import ErrorMessage from '~/components/ErrorMessage';

import useValidation from '~/hooks/useValidation/';

export const InputField = ({
  name,
  label,
  type,
  placeholder,
  getValidatedValue,
}) => {
  const [input, setInput] = useState();

  //Only validating name and email for now
  const [validInput, errorAfterValidation] = useValidation(
    `${type === 'text' ? 'name' : 'email'}`,
    input,
    label
  );
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
        className={
          errorAfterValidation ? 'input__field input__error' : 'input__field'
        }
        onBlur={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      {errorAfterValidation && <ErrorMessage message={errorAfterValidation} />}
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
