import React, { useState } from 'react';

import { ROUTES } from '~/constants';

import { HamburgerButton } from './HamburgerButton';

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

export default {
  title: 'UI',
  component: HamburgerButton,
  args: {
    navigationLinks: navigationLinks,
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    stateToggler: {
      table: {
        disable: true,
      },
    },
  },
};

export const hamburgerButton = (args) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleClose = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <div>
      <HamburgerButton
        {...args}
        handleClose={handleClose}
        isHamburgerOpen={isHamburgerOpen}
        setIsHamburgerOpen={setIsHamburgerOpen}
      />
    </div>
  );
};
