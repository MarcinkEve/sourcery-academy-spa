import React, { useState } from 'react';
import { string, func } from 'prop-types';

import './checkboxSc.scss';

const Checkbox = ({ checkboxText, getCheckboxValue }) => {
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

        <p className="checkbox__text">{checkboxText}</p>
      </div>
    </label>
  );
};

Checkbox.propTypes = {
  checkboxText: string.isRequired,
  getCheckboxValue: func,
};

export default Checkbox;
