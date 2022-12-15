import { oneOf } from 'prop-types';
import React from 'react';

import { Gallery as GalleryComponent } from './Gallery';
import media from './data.json';

export default {
  title: 'Gallery',
  component: GalleryComponent,
  args: {
    theme: 'Violet',
    media: media,
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
    <div theme={theme} style={{ maxWidth: '1200px', marginInline: 'auto' }}>
      <GalleryComponent {...rest} />
    </div>
  );
};
