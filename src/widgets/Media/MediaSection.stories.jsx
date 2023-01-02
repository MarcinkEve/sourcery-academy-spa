import React from 'react';

import { MediaSection } from './MediaSection';
import { mediaLists } from './storybookData';

const titleForTheme = (theme) =>
  `${theme === 'Home' ? `${theme} page` : `Sourcery for ${theme}`}`;

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
          mediaList: mediaLists.home,
        },
        developers: {
          theme: 'developers',
          title: titleForTheme('Developers'),
          mediaList: mediaLists.developers,
        },
        testers: {
          theme: 'testers',
          title: titleForTheme('Testers'),
          mediaList: mediaLists.testers,
        },
        'front-end': {
          theme: 'front-end',
          title: titleForTheme('Front-End'),
          mediaList: mediaLists.frontEnd,
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
