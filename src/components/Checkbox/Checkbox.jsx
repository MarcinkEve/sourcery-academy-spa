import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './checkbox.scss';

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
  checkboxText: PropTypes.string,
};

export default Checkbox;
