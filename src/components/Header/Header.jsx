import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import SvgLogo from '~/assets/icons/icon-logo.svg';
import HamburgerMenuButton from '~/components/UI/HamburgerMenuButton';
import NavigationLinks from '~/components/Header/NavigationLinks';

import './header.scss';

const dropdownElements = [
  {
    text: 'Sourcery for Developers',
    route: '/developers',
  },
  {
    text: 'Sourcery for Testers',
    route: '/testers',
  },
  {
    text: 'Sourcery for Front-End',
    route: '/frontend',
  },
  {
    text: 'Sourcery for Kids',
    route: '/kids',
  },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [stateToggler, setStateToggler] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', isScrolled);

    return () => window.removeEventListener('scroll', isScrolled);
  }, []);

  const isScrolled = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 0);
  };

  return (
    <div className={classNames('header', { header__scrolled: scrolled })}>
      <NavLink
        onClick={() => setStateToggler((prev) => !prev)}
        className="logo"
        to="/"
        aria-label="Home link"
      >
        <SvgLogo className="logo__image" />
        <span className="logo__text">Sourcery Academy</span>
      </NavLink>
      <HamburgerMenuButton
        stateToggler={stateToggler}
        dropdownElements={dropdownElements}
      />
      <NavigationLinks dropdownElements={dropdownElements} />
    </div>
  );
};
