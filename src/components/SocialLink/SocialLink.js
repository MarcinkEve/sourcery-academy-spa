import React from 'react';
import PropTypes from 'prop-types';

import './socialLink.scss';

export const SocialLink = ({
  socialLink,
  link,
  title,
  icon,
  backgroundColor,
}) => {
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
  title: PropTypes.string,
  link: PropTypes.string,
  // icon: PropTypes.string,
  icon: PropTypes.func,
  // icon: PropTypes.shape({
  //   type: PropTypes.oneOf(['img', 'svg']),
  // }),
};

SocialLink.defaultProps = {
  backgroundColor: null,
};
