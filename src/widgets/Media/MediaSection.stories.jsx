import React from 'react';

import { MediaSection } from './MediaSection';

const titleForTheme = (theme) =>
  `${theme === 'Home' ? `${theme} page` : `Sourcery for ${theme}`}`;

const mediaList = [
  {
    academy: 'developers',
    type: 'image',
    thumbnail:
      'https://sfe-2022-data.netlify.app/static/images/developers/thumbnails/P1190684-2.jpg',
    src:
      'https://sfe-2022-data.netlify.app/static/images/developers/P1190684-2.jpg',
    alt: '',
  },
  {
    academy: 'testers',
    type: 'image',
    thumbnail:
      'https://sfe-2022-data.netlify.app/static/images/testers/thumbnails/48670590916_a5d218a46c_o.jpg',
    src:
      'https://sfe-2022-data.netlify.app/static/images/testers/48670590916_a5d218a46c_o.jpg',
    alt: '',
  },
  {
    academy: 'frontend',
    type: 'video',
    thumbnail:
      'https://sfe-2022-data.netlify.app/static/video/frontend/thumbnails/49397671398_59fa405f03_o-3.jpg',
    src:
      'https://sfe-2022-data.netlify.app/static/video/frontend/cb72a22297be0376bb14f23b598b8c77cc42c476.mp4',
    alt: '',
  },
];

export default {
  title: 'widgets/MediaSectionComponent',
  component: MediaSection,
  args: {
    theme: 'home',
  },
  argTypes: {
    theme: {
      options: ['home', 'developers', 'testers', 'front-end'],
      control: 'radio',
      mapping: {
        home: {
          theme: 'home',
          title: titleForTheme('Home'),
          mediaList,
        },
        developers: {
          theme: 'developers',
          title: titleForTheme('Developers'),
          mediaList,
        },
        testers: {
          theme: 'testers',
          title: titleForTheme('Testers'),
          mediaList,
        },
        'front-end': {
          theme: 'front-end',
          title: titleForTheme('Front-End'),
          mediaList,
        },
      },
    },
    mediaList: {
      table: {
        disable: true,
      },
    },
    handleButtonClick: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
  },
};

export const MediaSectionComponent = (args) => {
  const { theme, title, mediaList } = args.theme;
  return (
    <div theme={theme}>
      <MediaSection {...args} title={title} mediaList={mediaList} />
    </div>
  );
};
