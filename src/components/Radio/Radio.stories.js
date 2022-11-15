import React from 'react';

import { Radio } from './Radio';
import { Toggleris } from './Toggleris';

export default {
  title: 'Radio component',
  component: Radio,
  subcomponents: { Toggleris },
  argTypes: {
    control: { type: 'radio' },
  },
};

const Template = (args) => (
  <Radio>
    <Toggleris {...args} />
  </Radio>
);

// export const Radio = Template.bind({});
// Radio.args = {
//   value: 'Full-stack',
//   name: 'academies',
//   index: 0,
//   handleChange: () => {},
//   radioValue: 'radovalue',
// };
