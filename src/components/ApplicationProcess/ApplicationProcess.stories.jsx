import React from 'react';

import { ApplicationProcess } from './ApplicationProcess';
import { storybookData } from './storybookData';

export default {
  title: 'Application Process',
  component: ApplicationProcess,
  args: {
    stepsDataArray: storybookData,
  },
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

const Template = (args) => <ApplicationProcess {...args} />;

export const ProcessDevelopers = Template.bind({});
ProcessDevelopers.decorators = provideTheme('developers');

export const ProcessTesters = Template.bind({});
ProcessTesters.decorators = provideTheme('testers');

export const ProcessFrontend = Template.bind({});
ProcessFrontend.decorators = provideTheme('front-end');
