import React from 'react';

import { CornerVideo } from './CornerVideo';
import DevelopersCornerImage from '~/assets/images/developers-corner-photo.jpg';
import TestersCornerImage from '~/assets/images/testers-corner-photo.jpg';
import FrontEndCornerImage from '~/assets/images/frontend-corner-photo.jpg';

const images = [DevelopersCornerImage, TestersCornerImage, FrontEndCornerImage];

export default {
  title: 'CornerVideo',
  component: CornerVideo,
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
      <CornerVideo {...rest} />
    </div>
  );
};

export const VideoCardComponent = Template.bind({});
