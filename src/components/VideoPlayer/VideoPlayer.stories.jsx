import React from 'react';

import { VideoPlayer } from './VideoPlayer';

export default {
  title: 'VideoPlayer',
  component: VideoPlayer,
  args: {
    theme: 'Violet',
    openVideoModal: true,
    videoSrc:
      'https://sfe-2022-data.netlify.app/static/video/testers/7cd88093664cd782e4868a6706f2787da2eb7dc9.mp4',
  },
  argTypes: {
    theme: {
      options: ['Violet', 'Blue', 'Green', 'Red'],
      control: 'radio',
      mapping: {
        Violet: 'home',
        Blue: 'developers',
        Green: 'testers',
        Red: 'front-end',
      },
    },
  },
};

export const Video = (args) => {
  const { theme, ...rest } = args;

  return (
    <div theme={theme}>
      <VideoPlayer {...rest} />
    </div>
  );
};
