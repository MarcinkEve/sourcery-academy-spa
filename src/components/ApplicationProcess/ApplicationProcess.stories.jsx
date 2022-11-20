import React from 'react';

import { ApplicationProcess } from './ApplicationProcess';

export default {
  title: 'Application Process',
  component: ApplicationProcess,
};

const Template = (args) => <ApplicationProcess {...args} />;

export const ProcessWithDefaultData = Template.bind({});
