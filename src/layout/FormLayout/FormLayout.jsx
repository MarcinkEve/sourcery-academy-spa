import React from 'react';
import { string } from 'prop-types';

import './formLayout.scss';
import IconSuccessImage from '../../assets/icons/icon-success-image.svg';
import IconParticles from '../../assets/icons/icon-particles.svg';
import { SuccessMessage } from '../../components/SuccessMessage/SuccessMessage';

export const FormLayout = ({ title }) => {
  return (
    <div className="form-layout">
      <h1 className="form-layout__container-header">{title}</h1>
      <div className="form-layout__content-container">
        <div className="form-layout__form-and-success">
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

FormLayout.propTypes = {
  title: string,
};

FormLayout.defaultProps = {
  title: 'Sourcery Academy Application',
};
