import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
  const [stateToggler, setStateToggler] = useState(false);

  return (
    <div className="header">
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
