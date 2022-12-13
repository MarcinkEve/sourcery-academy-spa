import React, { useState } from 'react';
import { string, func } from 'prop-types';

import './checkbox.scss';
import ErrorMessage from '~/components/ErrorMessage';

export const Checkbox = ({
  checkboxText,
  getCheckboxValue,
  errorMessage,
  name,
}) => {
  const [isChecked, setIsChecked] = useState();

  const clickHandler = (event) => {
    setIsChecked(event.target.checked);
    getCheckboxValue(event.target.checked);
  };
  const enterHandler = (event) => {
    if (event.key === 'Enter') setIsChecked(!isChecked);
  };

  return (
    <>
      <label>
        <div className="checkbox">
          <div>
            <input
              className="checkbox__default-checkmark"
              checked={isChecked}
              onChange={clickHandler}
              onKeyDown={enterHandler}
              type="checkbox"
              name={name}
            />
            <div
              className={`checkbox__custom-checkmark${
                isChecked ? '--checked' : ''
              }`}
            ></div>
          </div>
          <p className="checkbox__text">{checkboxText}</p>
        </div>
      </label>
      {isChecked === false && errorMessage && (
        <ErrorMessage message={errorMessage} />
      )}
    </>
  );
};

Checkbox.propTypes = {
  checkboxText: string.isRequired,
  getCheckboxValue: func,
  name: string.isRequired,
  errorMessage: string,
};
