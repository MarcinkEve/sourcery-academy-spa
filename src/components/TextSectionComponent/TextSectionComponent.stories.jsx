import React from 'react';

import { TextSectionComponent } from './TextSectionComponent';
import { ROUTES } from '../../constants/routes';

const text = (
  <p>
    Top-notch studies for the future Test Engineers. Students join the Devbridge
    team as a paid employee for the Academy period (two months) to learn and
    work. Ones who finish the Academy successfully are invited to continue
    employment on full time.
  </p>
);

const list = (
  <ul>
    <li>Semantic HTML code</li>
    <li>Advanced CSS (Scss)</li>
    <li>Agile methodology, build tools and task runners</li>
  </ul>
);

const paragraphContent = [text, list];

export default {
  title: 'TextSectionComponent',
  component: TextSectionComponent,
  args: {
    isRightAlligned: false,
    isHeadingSpacingLarge: false,
    headingContent: <h2>Sourcery for Testers</h2>,
    isParagraphTextBold: true,
    paragraphContent: paragraphContent[0],
    buttonText: 'Apply now',
    pageRoute: ROUTES.APPLICATION,
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
const Template = (args) => <TextSectionComponent {...args} />;

export const Home = Template.bind({});
Home.decorators = provideTheme('home');

export const Developers = Template.bind({});
Developers.decorators = provideTheme('developers');

export const Testers = Template.bind({});
Testers.decorators = provideTheme('testers');

export const FrontEnd = Template.bind({});
FrontEnd.decorators = provideTheme('front-end');
