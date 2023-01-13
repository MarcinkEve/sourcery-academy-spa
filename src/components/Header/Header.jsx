import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import SvgLogo from '~/assets/icons/icon-logo.svg';
import HamburgerButton from '~/components/Header/HamburgerButton';
import NavigationLinks from '~/components/Header/NavigationLinks';

import './header.scss';

const navigationLinks = [
  {
    route: '/',
    title: 'About us',
  },
  {
    dropdownElements: [
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
    ],
    title: 'Academies',
  },
  {
    route: '/applicationform',
    title: 'Register',
  },
  {
    route: '/media',
    title: 'Media',
  },
  {
    route: '/questions',
    title: 'Questions',
  },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [closeOnLogoClick, setCloseOnLogoClick] = useState(false);

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
        onClick={() => setCloseOnLogoClick((prev) => !prev)}
        className="logo"
        to="/"
        aria-label="Home link"
      >
        <SvgLogo className="logo__image" />
        <span className="logo__text">Sourcery Academy</span>
      </NavLink>
      <HamburgerButton
        closeOnLogoClick={closeOnLogoClick}
        navigationLinks={navigationLinks}
      />
      <NavigationLinks navigationLinks={navigationLinks} />
    </div>
  );
};
