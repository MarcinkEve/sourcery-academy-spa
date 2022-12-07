import React from 'react';
import { string } from 'prop-types';

import './applicationForm.scss';
import IconSuccessImage from '../../../assets/icons/icon-success-image.svg';
import IconParticles from '../../../assets/icons/icon-particles.svg';
import { SuccessMessage } from '../../SuccessMessage/SuccessMessage';

export const ApplicationForm = ({ title, theme }) => {
  return (
    <div theme={theme} className="form-layout">
      <h1 className="form-layout__container-header">{title}</h1>
      <div className="form-layout__content-container">
        <div className="form-layout__content">
          <SuccessMessage />
        </div>
        <div className="form-layout__image-section">
          <IconParticles className="form-layout__particles-icon" />
          <IconSuccessImage className="form-layout__image" />
        </div>
      </div>
    </div>
  );
};

ApplicationForm.propTypes = {
  title: string,
  theme: string,
};

ApplicationForm.defaultProps = {
  title: 'Sourcery Academy Application',
};
