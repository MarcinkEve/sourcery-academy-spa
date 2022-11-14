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
        <span className="logo__text">Sourcery Academy</span>
      </div>
      <ul className="navlinks">
        <li>
          <Link to="/" className="navlinks__link">
            About us
          </Link>
        </li>
        <li className="navlinks__academies">
          <button className="navlinks__academies-menu">
            Academies
            <SvgArrow className="navlinks__academies-arrow" />
          </button>
        </li>
        <li>
          <Link className="navlinks__link">Media</Link>
        </li>
        <li>
          <Link className="navlinks__link" to="/applicationform">
            Register
          </Link>
        </li>
        <li>
          <Link className="navlinks__link">Questions</Link>
        </li>
      </ul>
    </div>
  );
};
