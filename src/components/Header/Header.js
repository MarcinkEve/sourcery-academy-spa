import React from 'react';
import SvgLogo from '~/assets/svg/sourcery-header-logo.svg';
import SvgArrow from '~/assets/svg/dropdown-arrow-down.svg';
import './header.scss';

import { Link } from 'react-router-dom';

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

        {/* added tabIndex property for academies and arrow to be focusable 
        by using Tab. */}
        <li className="navlinks__academies" tabIndex={0}>
          <h2>Academies</h2>
          <SvgArrow />
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
        {/* 
        For now I'm leaving academy links commented not to mess up header layout 

        <li>
          <Link to="/developers">Sourcery for Developers</Link>
        </li>
        <li>
          <Link to="/testers">Sourcery for Testers</Link>
        </li>
        <li>
          <Link to="/frontend">Sourcery for Front-End</Link>
        </li>
        <li>
          <Link to="/kids">Sourcery for Kids</Link>
        </li> */}
      </ul>
    </div>
  );
};
