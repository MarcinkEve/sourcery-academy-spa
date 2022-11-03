import React from 'react';
import { FiFacebook } from 'react-icons/fi';

import './facebook.scss';

export const Facebook = () => {
  return (
    <a
      href="https://www.facebook.com/devbridge/"
      target="_blank"
      rel="noreferrer"
      aria-label="facebook social link"
      className="social-link"
    >
      <FiFacebook />
    </a>
  );
};
