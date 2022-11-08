import React from 'react';
import PropTypes from 'prop-types';

import './socialLink.scss';

export const SocialLink = ({ socialLink, backgroundColor }) => {
  return (
    <a
      href={socialLink.link}
      target="_blank"
      rel="noreferrer"
      title={socialLink.title}
      className="social-link"
      style={{ backgroundColor }}
    >
      {socialLink.icon}
    </a>
    // <a href={link.b} target="_blank" className="social-link">
    //   <img src={icon} />
    // </a>
  );
};

SocialLink.propTypes = {
  socialLink: PropTypes.object,
  backgroundColor: PropTypes.string,
};
SocialLink.defaultProps = {
  backgroundColor: null,
};
