import React from 'react';
import { string } from 'prop-types';

import './successMessage.scss';
import IconCheckMark from '~/assets/icons/icon-check-mark.svg';

export const SuccessMessage = ({ title, text }) => {
  return (
    <div className="success-message-box">
      <IconCheckMark className="success-message-box__check-mark-icon" />
      <h3 className="success-message-box__title">{title}</h3>
      <span className="success-message-box__confirmation-text">{text}</span>
    </div>
  );
};

SuccessMessage.propTypes = {
  title: string,
  text: string,
};

SuccessMessage.defaultProps = {
  title: 'Thank you!',
  text: 'Your form was submitted',
};
