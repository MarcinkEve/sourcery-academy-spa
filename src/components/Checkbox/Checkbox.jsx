import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Checkbox.scss';

const Checkbox = ({ checkboxText }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label onChange={() => setIsChecked(!isChecked)}>
      <div className="checkbox">
        <div className="checkbox__checkmark">
          <input
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            type="checkbox"
            name="checked_privacy"
          ></input>
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
