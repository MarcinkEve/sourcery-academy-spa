import React from 'react';

import { VideoPlayer } from './VideoPlayer';

export default {
  title: 'VideoPlayer',
  component: VideoPlayer,
  args: {
    theme: 'Violet',
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

export const Video = (args) => {
  const { theme, ...rest } = args;

  return (
    <div theme={theme}>
      <VideoPlayer {...rest} />
    </div>
  );
};
