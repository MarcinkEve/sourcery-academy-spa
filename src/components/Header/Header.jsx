import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import SvgLogo from '~/assets/icons/icon-logo.svg';
import HamburgerButton from '~/components/Header/HamburgerButton';
import NavigationLinks from '~/components/Header/NavigationLinks';
import { ROUTES } from '~/constants/routes';

import './header.scss';

const navigationLinks = [
  {
    route: ROUTES.HOME,
    title: 'About us',
  },
  {
    dropdownElements: [
      {
        text: 'Sourcery for Developers',
        route: ROUTES.DEVELOPERS,
      },
      {
        text: 'Sourcery for Testers',
        route: ROUTES.TESTERS,
      },
      {
        text: 'Sourcery for Front-End',
        route: ROUTES.FRONTEND,
      },
      {
        text: 'Sourcery for Kids',
        route: ROUTES.KIDS,
      },
    ],
    title: 'Academies',
  },
  {
    route: ROUTES.APPLICATION,
    title: 'Register',
  },
  {
    route: ROUTES.MEDIA,
    title: 'Media',
  },
  {
    route: ROUTES.QUESTIONS,
    title: 'Questions',
  },
];

export const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleClose = () => {
    setIsHamburgerOpen(false);
  };

  const [scrolled, setScrolled] = useState(false);

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
        onClick={handleClose}
        className="logo"
        to="/"
        aria-label="Home link"
      >
        <SvgLogo className="logo__image" />
        <span className="logo__text">Sourcery Academy</span>
      </NavLink>
      <HamburgerButton
        navigationLinks={navigationLinks}
        handleClose={handleClose}
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
      />
      <NavigationLinks navigationLinks={navigationLinks} />
    </div>
  );
};
