import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  args: {
    label: 'Button',
  },
};

const Template = (args) => <Button {...args} />;

export const Home = Template.bind({});
Home.args = {
  theme: 'home',
};

export const Developers = Template.bind({});
Developers.args = {
  theme: 'developers',
};

export const Testers = Template.bind({});
Testers.args = {
  theme: 'testers',
};

export const FrontEnd = Template.bind({});
FrontEnd.args = {
  theme: 'front-end',
};
