import React, { useState } from 'react';
import { string } from 'prop-types';

import './applicationForm.scss';
import VideoPlayer from '../../VideoPlayer';
import IconSuccessImage from '../../../assets/icons/icon-success-image.svg';
import IconParticles from '../../../assets/icons/icon-particles.svg';
import { SuccessMessage } from '../../SuccessMessage/SuccessMessage';

export const ApplicationForm = ({ title, theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div theme={theme} className="form-layout">
      <h1 className="form-layout__container-header">{title}</h1>
      <div className="form-layout__content-container">
        <div
          className="form-layout__content"
          onClick={() => setIsModalOpen(true)}
        >
          <SuccessMessage />
        </div>
        <div className="form-layout__image-section">
          <IconParticles className="form-layout__particles-icon" />
          <IconSuccessImage className="form-layout__image" />
        </div>
      </div>
      <VideoPlayer
        videoSrc={
          'https://sfe-2022-data.netlify.app/static/video/testers/7cd88093664cd782e4868a6706f2787da2eb7dc9.mp4'
        }
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
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
