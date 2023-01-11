import React, { useState } from 'react';
import classNames from 'classnames';
import { array } from 'prop-types';

import NavigationLinksMobile from '~/components/UI/HamburgerMenuButton/NavigationLinksMobile';

import './hamburgerMenuButton.scss';

export const HamburgerMenuButton = ({ dropdownElements }) => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleClose = () => {
    setIsHamburgerMenuOpen(false);
  };

  return (
    <>
      <button
        className="hamburger-menu"
        onClick={() => setIsHamburgerMenuOpen((prev) => !prev)}
        onKeyDown={(e) =>
          e.key === 'Enter' && setIsHamburgerMenuOpen((prev) => !prev)
        }
      >
        <span
          className={classNames(
            'hamburger-menu__lines',
            isHamburgerMenuOpen && 'hamburger-menu__lines--transform'
          )}
        ></span>
      </button>
      {/* <NavigationLinksMobile /> */}
      {isHamburgerMenuOpen && (
        <NavigationLinksMobile
          dropdownElements={dropdownElements}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

HamburgerMenuButton.propTypes = {
  dropdownElements: array.isRequired,
};
