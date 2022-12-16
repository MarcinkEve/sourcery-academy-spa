import React from 'react';

import { Gallery as GalleryComponent } from './Gallery';
import media from './data.json';
import './gallery-stories.scss';

export default {
  title: 'Gallery',
  component: GalleryComponent,
  args: {
    theme: 'Violet',
    media: media.slice(0, 13),
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

export const Gallery = (args) => {
  const { theme, ...rest } = args;
  return (
    <div theme={theme} className="story-wrapper">
      <GalleryComponent {...rest} />
    </div>
  );
};
