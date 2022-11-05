import React from 'react';
import PropTypes from 'prop-types';

import './socialLink.scss';

export const SocialLink = ({ element }) => {
  return (
    <>
      <a
        href={element.link}
        target="_blank"
        rel="noreferrer"
        aria-label={element.title + ' social link'}
        className="social-link"
      >
        {element.icon}
      </a>
    </>
  );
};

SocialLink.propTypes = {
  element: PropTypes.object,
};
