import React, { useState } from 'react';
import { string } from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({ checkboxText }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label onChange={() => setIsChecked(!isChecked)}>
      <div className="checkbox" tabIndex="0">
        <div className="checkbox__checkmark--container">
          <input
            className="checkmark--default"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
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
};

export default Checkbox;
