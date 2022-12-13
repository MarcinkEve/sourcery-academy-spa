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
  const [isChecked, setIsChecked] = useState(false);

  const clickHandler = (event) => {
    setIsChecked(event.target.checked);
    getCheckboxValue(event.target.checked);
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
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};

Checkbox.propTypes = {
  checkboxText: string.isRequired,
  getCheckboxValue: func.isRequired,
  name: string.isRequired,
  errorMessage: string,
};
