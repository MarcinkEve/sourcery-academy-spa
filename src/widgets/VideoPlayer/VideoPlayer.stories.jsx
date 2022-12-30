import React from 'react';

import { VideoPlayer } from './VideoPlayer';

export default {
  title: 'widgets/VideoPlayer',
  component: VideoPlayer,
  args: {
    theme: 'developers',
    isModalOpen: true,
    hasAutoPlay: false,
    hasCloseButton: true,
    videoSrc:
      'https://sfe-2022-data.netlify.app/static/video/testers/7cd88093664cd782e4868a6706f2787da2eb7dc9.mp4',
  },
  argTypes: {
    onClose: {
      table: {
        disable: true,
      },
    },
  },
};

export const Video = (args) => (
  <div theme={args.theme}>
    <VideoPlayer {...args} />
  </div>
);
