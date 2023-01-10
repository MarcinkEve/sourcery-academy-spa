import React, { useState } from 'react';
import classNames from 'classnames';

import './hamburgerMenuButton.scss';

export const HamburgerMenuButton = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <button
      // tabIndex="0"
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
  );
};
