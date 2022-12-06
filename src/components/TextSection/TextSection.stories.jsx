import React from 'react';

import { TextSection } from './TextSection';
import { ROUTES } from '../../constants/routes';

const paragraphContentOptions = {
  text: (
    <p>
      Top-notch studies for the future Test Engineers. Students join the
      Devbridge team as a paid employee for the Academy period (two months) to
      learn and work. Ones who finish the Academy successfully are invited to
      continue employment on full time.
    </p>
  ),
  list: (
    <ul>
      <li>Semantic HTML code</li>
      <li>Advanced CSS (Scss)</li>
      <li>Agile methodology, build tools and task runners</li>
    </ul>
  ),
};

const headingOptions = {
  h1: <h1>Sourcery Academy for Developers</h1>,
  h2: <h2>Sourcery for Testers</h2>,
  h3: <h3>Introduction</h3>,
};

export default {
  title: 'TextSection',
  component: TextSection,
  args: {
    isRightAlligned: false,
    isHeadingSpacingLarge: false,
    headingContent: headingOptions.h2,
    isParagraphTextBold: true,
    paragraphContent: paragraphContentOptions.text,
    buttonText: 'Apply now',
    pageRoute: ROUTES.APPLICATION,
  },
  argTypes: {
    paragraphContent: {
      options: Object.keys(paragraphContentOptions),
      control: { type: 'select' },
      mapping: paragraphContentOptions,
    },
    headingContent: {
      options: Object.keys(headingOptions),
      controls: { type: 'select' },
      mapping: headingOptions,
    },
    pageRoute: {
      options: Object.keys(ROUTES),
      controls: { type: 'select' },
      mapping: ROUTES,
    },
  },
};
const provideTheme = (theme) => {
  return [
    (Story) => (
      <div theme={theme}>
        <Story />
      </div>
    ),
  ];
};
const Template = (args) => <TextSection {...args} />;

export const Home = Template.bind({});
Home.decorators = provideTheme('home');

export const Developers = Template.bind({});
Developers.decorators = provideTheme('developers');

export const Testers = Template.bind({});
Testers.decorators = provideTheme('testers');

export const FrontEnd = Template.bind({});
FrontEnd.decorators = provideTheme('front-end');
