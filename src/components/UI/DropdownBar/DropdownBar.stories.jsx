import React from 'react';

import { DropdownBar } from './DropdownBar';
import './dropdown-bar-storybook.scss';

export default {
  title: 'UI/DropdownBarComponent',
  component: DropdownBar,
  args: {
    theme: 'home',
    buttonText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    contentText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus quis diam accumsan pharetra. Sed accumsan sit amet nisl at tincidunt. Quisque efficitur tristique lorem nec dictum. Suspendisse posuere, purus ac fermentum venenatis, urna nibh viverra metus, vel tincidunt augue lacus vel lectus.',
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export const DropdownBarComponent = (args) => (
  <div theme={args.theme} className="dropdown-bar__storybook-container">
    <DropdownBar {...args} />
    <DropdownBar {...args} />
  </div>
);
