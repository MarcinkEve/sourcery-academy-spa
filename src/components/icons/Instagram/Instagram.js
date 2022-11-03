import React from 'react';
import { BsInstagram } from 'react-icons/bs';

import './instagram.scss';

export const Instagram = () => {
  return (
    <a
      href="https://www.instagram.com/devbridge"
      target="_blank"
      rel="noreferrer"
      aria-label="instagram social link"
      className="social-link"
    >
      <BsInstagram />
    </a>
  );
};
