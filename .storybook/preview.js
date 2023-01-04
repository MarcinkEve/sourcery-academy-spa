import '../src/sass/global.scss';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';

addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));

export const argTypes = {
  theme: {
    options: ['developers', 'testers', 'front-end'],
    control: 'radio',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
