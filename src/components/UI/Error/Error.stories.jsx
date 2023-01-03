import React from 'react';

import { Error } from './Error';

const titleWithThemeVariable = (theme) =>
  `Error for ${
    theme === 'developers'
      ? 'Developers'
      : theme === 'testers'
      ? 'Testers'
      : theme === 'front-end'
      ? 'Front-end'
      : ''
  } component`;

export default {
  component: Error,
  title: 'UI/ErrorMessage',
  args: {
    theme: 'developers',
    message: 'This error may indicate that the component is not running...',
  },
  argTypes: {
    theme: {
      options: ['developers', 'testers', 'front-end'],
      control: 'radio',
      mapping: {
        developers: {
          theme: 'developers',
          title: titleWithThemeVariable('developers'),
        },
        testers: {
          theme: 'testers',
          title: titleWithThemeVariable('testers'),
        },
        'front-end': {
          theme: 'front-end',
          title: titleWithThemeVariable('front-end'),
        },
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    message: {
      table: {
        disable: true,
      },
    },
  },
};

export const ErrorMessage = (args) => {
  const { theme, title } = args.theme;
  return (
    <div theme={theme}>
      <Error {...args} title={title} />
    </div>
  );
};
