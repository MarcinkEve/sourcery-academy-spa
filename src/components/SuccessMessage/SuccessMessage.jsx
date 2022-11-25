import React from 'react';

import './successMessage.scss';
import IconCheckMark from '../../assets/icons/icon-check-mark.svg';

export const SuccessMessage = () => {
  return (
    <div className="success-message-box">
      <IconCheckMark className="success-message-box__check-mark-icon" />
      <h2>Thank you!</h2>
      <span className="success-message-box__confirmation-text">
        Your form was submitted
      </span>
    </div>
  );
};
