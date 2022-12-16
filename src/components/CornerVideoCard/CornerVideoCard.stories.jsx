import React from 'react';

import { CornerVideoCard } from './CornerVideoCard';

import DevelopersCornerImage from '~/assets/images/developers-corner-photo.jpg';
import TestersCornerImage from '~/assets/images/testers-corner-photo.jpg';
import FrontEndCornerImage from '~/assets/images/frontend-corner-photo.jpg';

const Images = [DevelopersCornerImage, TestersCornerImage, FrontEndCornerImage];

const themes = [
  { theme: 'developers', Image: DevelopersCornerImage },
  { theme: 'testers', Image: TestersCornerImage },
  { theme: 'front-end', Image: FrontEndCornerImage },
];

export default {
  title: 'CornerVideoCard',
  component: CornerVideoCard,
  args: {
    theme: 'developers',
    Image: themes,
    mapping: {
      developers: 'developers',
      testers: 'testers',
      'front-end': 'front-end',
    },
  },
  argTypes: {
    theme: {
      options: ['developers', 'testers', 'front-end'],
      control: 'radio',
      mapping: {
        developers: 'developers',
        testers: 'testers',
        'front-end': 'front-end',
      },
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

export const Red = Template.bind({});
Red.args = {
  theme: 'front-end',
  Image: DevelopersCornerImage,
};

export const Green = Template.bind({});
Green.args = {
  theme: 'testers',
  Image: TestersCornerImage,
};

export const Blue = Template.bind({});
Blue.args = {
  theme: 'developers',
  Image: FrontEndCornerImage,
};
