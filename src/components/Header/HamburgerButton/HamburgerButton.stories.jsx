import React from 'react';

import { HamburgerMenuButton } from './HamburgerMenuButton';
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

export default {
  title: 'UI',
  component: HamburgerMenuButton,
  args: {
    dropdownElements: dropdownElements,
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

export const hamburgerButton = (args) => (
  <div>
    <HamburgerMenuButton {...args} />
  </div>
);
