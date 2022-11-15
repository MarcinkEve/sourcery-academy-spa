import React, { useState } from 'react';
import { string, func, bool } from 'prop-types';

import './checkbox.scss';

export const Checkbox = ({ checkboxText, getCheckboxValue, error }) => {
  const [isChecked, setIsChecked] = useState(false);

  const clickHandler = () => {
    setIsChecked(!isChecked);
    getCheckboxValue(isChecked);
  };

  return (
    <label onChange={() => setIsChecked(!isChecked)}>
      <div className="checkbox" tabIndex="0">
        <div className="checkbox__checkmark--container">
          <input
            className="checkmark--default"
            checked={isChecked}
            onChange={clickHandler}
            type="checkbox"
            name="check_privacy"
          ></input>
          <div
            className={
              isChecked ? 'checkmark--custom checked' : 'checkmark--custom'
            }
          ></div>
        </div>

        <p className={error ? 'checkbox__text error' : 'checkbox__text'}>
          {checkboxText}
        </p>
      </div>
    </label>
  );
};

Checkbox.propTypes = {
  checkboxText: string.isRequired,
  getCheckboxValue: func,
  error: bool,
};
