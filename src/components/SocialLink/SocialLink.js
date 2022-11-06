import React from 'react';
import PropTypes from 'prop-types';

import './socialLink.scss';

export const SocialLink = ({ socialLink }) => {
  return (
    <a
      href={socialLink.link}
      target="_blank"
      rel="noreferrer"
      title={socialLink.title}
      className="social-link"
    >
      {socialLink.icon}
    </a>
  );
};

SocialLink.propTypes = {
  socialLink: PropTypes.object,
};
