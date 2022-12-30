import React from 'react';

import { TextSection } from './TextSection';
import { ROUTES } from '~/constants/routes';

const paragraphContentOptions = {
  text: (
    <p>
      Top-notch studies. Students join the Devbridge team as a paid employee for
      the Academy period (two months) to learn and work. Ones who finish the
      Academy successfully are invited to continue employment on full time.
    </p>
  ),
  list: (
    <ul>
      <li>Learn from the pros</li>
      <li>New approaches</li>
      <li>Team work</li>
      <li>Code reviews</li>
    </ul>
  ),
};

const headingOptions = {
  h1: <h1>This is H1 heading</h1>,
  h2: <h2>This is H2 heading</h2>,
  h3: <h3>This is H3 heading</h3>,
};

export default {
  title: 'UI/TextSection',
  component: TextSection,
  args: {
    theme: 'developers',
    headingContent: headingOptions.h2,
    paragraphContent: paragraphContentOptions.text,
    isRightAligned: false,
    isHeadingSpacingLarge: false,
    isParagraphTextBold: true,
    buttonText: 'Apply now',
    pageRoute: ROUTES.APPLICATION,
  },
  argTypes: {
    paragraphContent: {
      options: Object.keys(paragraphContentOptions),
      control: { type: 'radio' },
      mapping: paragraphContentOptions,
    },
    headingContent: {
      options: Object.keys(headingOptions),
      control: { type: 'radio' },
      mapping: headingOptions,
    },
    buttonText: {
      table: { disable: true },
    },
    pageRoute: {
      table: { disable: true },
      options: Object.keys(ROUTES),
      controls: { type: 'select' },
      mapping: ROUTES,
    },
  },
};

export const TextSections = (args) => {
  const { theme } = args;
  return (
    <div theme={theme}>
      <TextSection {...args} />
    </div>
  );
};
