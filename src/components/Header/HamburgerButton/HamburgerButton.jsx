import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { array, bool, object } from 'prop-types';

import NavigationLinksMobile from '~/components/Header/HamburgerButton/NavigationLinksMobile';

import './hamburgerButton.scss';
import breakpoints from '~/sass/variables';

export const HamburgerButton = ({ navigationLinks, logoRef }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleClose = () => {
    setIsHamburgerOpen(false);
  };

  useEffect(() => {
    const clickListener = ({ target }) => {
      if (handleClose && logoRef.current.contains(target)) {
        handleClose();
      }
    };
    document.addEventListener('mousedown', clickListener);

    return () => document.removeEventListener('mousedown', clickListener);
  }, [logoRef]);

  // ADD/REMOVE SCROLLBAR WHEN HAMBURGER MENU IS ACTIVE/INACTIVE
  useEffect(() => {
    if (isHamburgerOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isHamburgerOpen]);

  // SET FALSE STATE FOR HAMBURGER MENU WHEN WINDOW WIDTH WOULD BE CHANGED WHILE SCROLLBAR IS DISABLED (BUGFIX)
  useEffect(() => {
    const windowSizeListener = () => {
      window.innerWidth > parseInt(breakpoints.breakpointMobile) &&
        setIsHamburgerOpen(false);
    };
    window.addEventListener('resize', windowSizeListener);
    return () => document.removeEventListener('resize', windowSizeListener);
  }, []);

  return (
    <>
      <button
        className="hamburger-button"
        onClick={() => setIsHamburgerOpen((prev) => !prev)}
      >
        <span
          className={classNames('hamburger-button__lines', {
            'hamburger-button__lines--transformed': isHamburgerOpen,
          })}
        ></span>
      </button>

      {isHamburgerOpen && (
        <NavigationLinksMobile
          navigationLinks={navigationLinks}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

HamburgerButton.propTypes = {
  closeOnLogoClick: bool,
  navigationLinks: array.isRequired,
  logoRef: object,
};
