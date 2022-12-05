import React, { useState } from 'react';
import { string } from 'prop-types';

import './application-page.scss';
import IconSuccessImage from '../../../assets/icons/icon-success-image.svg';
import IconParticles from '../../../assets/icons/icon-particles.svg';
import ApplicationForm from '../../ApplicationForm';
import { SuccessMessage } from '../../SuccessMessage/SuccessMessage';
import PageLayout from '~/layout/pageLayout';

import { data as applicationPageData } from './mockData';

export const ApplicationPage = ({ title, theme }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <PageLayout theme={theme}>
      <div className="form-layout">
        <h1 className="form-layout__container-header">{title}</h1>
        <div className="form-layout__content-container">
          <div className="form-layout__content">
            {isSubmitted ? (
              <SuccessMessage />
            ) : (
              <ApplicationForm
                data={applicationPageData}
                setIsSubmitted={setIsSubmitted}
              />
            )}
          </div>
          <div className="form-layout__image-section">
            <IconParticles className="form-layout__particles-icon" />
            <IconSuccessImage className="form-layout__image" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

ApplicationPage.propTypes = {
  title: string,
  theme: string,
};

ApplicationPage.defaultProps = {
  title: 'Sourcery Academy Application',
};
