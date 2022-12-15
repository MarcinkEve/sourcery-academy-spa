import React from 'react';

import { CornerVideoCard } from './CornerVideoCard';

import DevelopersCornerImage from '~/assets/images/developers-description.svg';
import TestersCornerImage from '~/assets/images/testers-description.svg';
import FrontEndCornerImage from '~/assets/images/frontend-description.svg';

const Images = [DevelopersCornerImage, TestersCornerImage, FrontEndCornerImage];

const themes = [
  { theme: 'developers', Image: DevelopersCornerImage },
  { theme: 'testers', Image: TestersCornerImage },
  { theme: 'front-end', Image: FrontEndCornerImage },
];

export default {
  title: 'CornerVideoCard',
  component: CornerVideoCard,
  args: themes[0],
  argTypes: {
    theme: {
      options: ['developers', 'testers', 'front-end'],
      control: 'radio',
    },
  },
};

const Template = (args) => {
  const { theme, ...rest } = args;
  return (
    <div theme={theme}>
      <CornerVideoCard {...rest} />
    </div>
  );
};

export const VideoCardComponent = Template.bind({});

// export const Red = Template.bind({});
// Red.args = {
//   theme: 'front-end',
//   Image: DevelopersCornerImage,
// };

// export const Green = Template.bind({});
// Green.args = {
//   theme: 'testers',
//   Image: TestersCornerImage,
// };

// export const Blue = Template.bind({});
// Blue.args = {
//   theme: 'developers',
//   Image: FrontEndCornerImage,
// };
