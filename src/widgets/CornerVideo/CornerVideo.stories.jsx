import React from 'react';

import DevelopersCornerImage from '~/assets/images/developers-corner-photo.jpg';
import TestersCornerImage from '~/assets/images/testers-corner-photo.jpg';
import FrontEndCornerImage from '~/assets/images/frontend-corner-photo.jpg';

import { CornerVideo } from './CornerVideo';
import './corner-video-storybook.scss';
import { LoadingContext } from '~/context/LoadingContext';

const images = [DevelopersCornerImage, TestersCornerImage, FrontEndCornerImage];

export default {
  title: 'widgets/CornerVideoComponent',
  component: CornerVideo,
  args: {
    theme: 'developers',
    image: DevelopersCornerImage,
    description: 'Academy students',
    videoSrc:
      'https://sfe-2022-data.netlify.app/static/video/developers/80b0058a9428314582a3f25f3b1dfb8bc27de8a4.mp4',
  },
  argTypes: {
    theme: {
      options: ['developers', 'testers', 'front-end'],
      control: 'radio',
      mapping: {
        developers: { theme: 'developers', image: images[0] },
        testers: { theme: 'testers', image: images[1] },
        'front-end': { theme: 'front-end', image: images[2] },
      },
    },
    image: {
      table: { disable: true },
    },
    description: {
      table: { disable: true },
    },
    videoSrc: {
      table: { disable: true },
    },
  },
};

export const CornerVideoComponent = (args) => {
  const { theme, image } = args.theme;
  return (
    <LoadingContext.Provider value={{ handleLoadingStateImage: () => {} }}>
      <div theme={theme} className="corner-video__storybook-container">
        <CornerVideo {...args} image={image} />
      </div>
    </LoadingContext.Provider>
  );
};
