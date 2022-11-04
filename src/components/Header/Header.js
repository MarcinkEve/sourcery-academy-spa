import React from 'react';
import SvgLogo from '~/assets/svg/sourcery-header-logo.svg';
import SvgArrow from '~/assets/svg/header-arrow-down.svg';
import classNames from 'classnames/bind';
import styles from './header.scss';

import { Link } from 'react-router-dom';

const cn = classNames.bind(styles);

export function Header() {
  return (
    <header className={cn('header')}>
      <div className={cn('logo')}>
        <SvgLogo className={cn('logo__image')}></SvgLogo>
        <h1 className={cn('logo__text')}>Sourcery Academy</h1>
      </div>
      <ul className={cn('navlinks reset-list-style')}>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li className={cn('navlinks__academies')}>
          <h2>Academies</h2>
          <SvgArrow></SvgArrow>
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
    </header>
  );
}
