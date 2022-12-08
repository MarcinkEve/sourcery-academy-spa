import React from 'react';

import { VideoPlayer } from './VideoPlayer';

export default {
  title: 'Video Player',
  component: VideoPlayer,
  parameters: {
    layout: 'centered',
  },
};

const setTheme = (theme) => {
  return [
    (Story) => (
      <div theme={theme}>
        <Story />
      </div>
    ),
  ];
};

const Template = (args) => <VideoPlayer {...args} />;

export const VideoModal = Template.bind({});
VideoModal.decorators = setTheme('front-end');
VideoModal.args = {
  isModalOpen: true,
  hasAutoPlay: false,
  // onClose: false,
  videoSrc:
    'https://sfe-2022-data.netlify.app/static/video/testers/7cd88093664cd782e4868a6706f2787da2eb7dc9.mp4',
};
