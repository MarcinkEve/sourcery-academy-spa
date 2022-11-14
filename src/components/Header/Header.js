import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import SvgArrow from '~/assets/icons/icon-arrow-down.svg';
import SvgLogo from '~/assets/icons/icon-logo.svg';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <SvgLogo className="logo__image" />
        <h1 className="logo__text">Sourcery Academy</h1>
      </div>
      <ul className="navlinks">
        <li>
          <Link to="/">About us</Link>
        </li>
        <li className="navlinks__academies">
          <button>
            Academies
            <SvgArrow />
          </button>
        </li>
        <li>
          <Link>Media</Link>
        </li>
        <li>
          <Link to="/applicationform">Register</Link>
        </li>
        <li>
          <Link>Questions</Link>
        </li>
      </ul>
    </div>
  );
};
