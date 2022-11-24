import React from 'react';

import { Admission } from './Admission';

export default {
  title: 'Admission',
  component: Admission,
};

const provideTheme = (theme) => {
  return [
    (Story) => (
      <div theme={theme}>
        <Story />
      </div>
    ),
  ];
};

const Template = (args) => <Admission {...args} />;

export const Developers = Template.bind({});
Developers.decorators = provideTheme('developers');

export const Testers = Template.bind({});
Testers.decorators = provideTheme('testers');

export const FrontEnd = Template.bind({});
FrontEnd.decorators = provideTheme('front-end');
