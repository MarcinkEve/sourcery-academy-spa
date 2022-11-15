import React from 'react';

import './successScreen.scss';
import IconCheckMark from '../../assets/icons/icon-check-mark.svg';
import IconSuccessImage from '../../assets/icons/icon-success-image.svg';
import IconParticles from '../../assets/icons/icon-particles.svg';

export const SuccessScreen = () => {
  return (
    <div className="success-container">
      <IconParticles className="success-container__particles-icon" />
      <h1 className="success-container__header">
        Sourcery Academy Application
      </h1>
      <div className="success-container__content">
        <div className="success-container__left">
          <div className="success-container__message-box">
            <IconCheckMark className="success-container__check-mark" />
            <h2>Thank you!</h2>
            <span className="success-container__confirmation-text">
              Your form was submitted
            </span>
          </div>
        </div>
        <div className="success-container__right">
          <IconSuccessImage className="success-container__right-image" />
        </div>
      </div>
    </div>
  );
};
