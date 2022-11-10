import React from 'react';
import PropTypes from 'prop-types';

import './socialLink.scss';

export const SocialLink = ({ title, link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      title={title}
      className="social-link"
    >
      {icon}
    </a>
  );
};

SocialLink.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
