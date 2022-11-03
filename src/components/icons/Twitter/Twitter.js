import React from 'react';
import { FiTwitter } from 'react-icons/fi';

import './twitter.scss';

export const Twitter = () => {
  return (
    <a
      href="https://twitter.com/devbridge"
      target="_blank"
      rel="noreferrer"
      aria-label="twitter social link"
      className="social-link"
    >
      <FiTwitter />
    </a>
  );
};
