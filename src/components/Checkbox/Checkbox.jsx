import React, { useState } from 'react';
import { string, func } from 'prop-types';

import './checkbox.scss';
import ErrorMessage from '../ErrorMessage';

export const Checkbox = ({ checkboxText, getCheckboxValue, errorMessage }) => {
  const [isChecked, setIsChecked] = useState(false);

  const clickHandler = (event) => {
    setIsChecked(event.target.checked);
    getCheckboxValue(event.target.checked);
  };

  return (
    <label>
      <div className="checkbox">
        <div>
          <input
            className="checkmark--default"
            checked={isChecked}
            onChange={clickHandler}
            type="checkbox"
            name="check_privacy"
          />
          <div
            className={`checkmark--custom ${isChecked ? 'checked' : ''}`}
          ></div>
        </div>
        <p className="checkbox__text">{checkboxText}</p>
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </label>
  );
};

Checkbox.propTypes = {
  checkboxText: string.isRequired,
  getCheckboxValue: func.isRequired,
  errorMessage: string,
};
