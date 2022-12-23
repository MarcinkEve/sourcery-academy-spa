import React from 'react';

import { HeaderDropdown } from './HeaderDropdown';

export default {
  title: 'HeaderDropdown',
  component: HeaderDropdown,
  args: {
    data: [
      {
        text: 'Sourcery for Developers',
        route: '',
      },
      {
        text: 'Sourcery for Testers',
        route: '',
      },
      {
        text: 'Sourcery for Front-End',
        route: '',
      },
      {
        text: 'Sourcery for Kids',
        route: '',
      },
    ],
  },
  argTypes: {
    theme: {
      table: { disable: true },
    },
    onClickOutside: {
      table: { disable: true },
    },
  },
};

export const DropDown = (args) => <HeaderDropdown {...args} />;
