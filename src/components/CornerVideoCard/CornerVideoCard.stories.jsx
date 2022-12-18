import React from 'react';

import { CornerVideoCard } from './CornerVideoCard';
import DevelopersCornerImage from '~/assets/images/developers-description.jpg';
import TestersCornerImage from '~/assets/images/developers-description.jpg';
import FrontEndCornerImage from '~/assets/images/developers-description.jpg';

const images = [DevelopersCornerImage, TestersCornerImage, FrontEndCornerImage];

export default {
  title: 'CornerVideoCard',
  component: CornerVideoCard,
  args: {
    theme: 'developers',
    image: DevelopersCornerImage,
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
    image: {
      options: images,
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

export const Red = Template.bind({});
Red.args = {
  theme: 'front-end',
  image: FrontEndCornerImage,
};

export const Green = Template.bind({});
Green.args = {
  theme: 'testers',
  image: TestersCornerImage,
};

export const Blue = Template.bind({});
Blue.args = {
  theme: 'developers',
  image: DevelopersCornerImage,
};
