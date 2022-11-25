import React from 'react';

import { HeaderDropdown } from './HeaderDropdown';

export default {
  title: 'HeaderDropdown',
  component: HeaderDropdown,
};

const Template = (args) => <HeaderDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
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
};
