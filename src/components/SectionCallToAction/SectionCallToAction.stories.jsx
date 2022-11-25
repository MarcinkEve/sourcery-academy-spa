import React from 'react';

import { SectionCallToAction } from './SectionCallToAction';
import { ROUTES } from '../../constants/routes';
const content = (
  <p>
    Top-notch studies for the future Test Engineers. Students join the Devbridge
    team as a paid employee for the Academy period (two months) to learn and
    work. Ones who finish the Academy successfully are invited to continue
    employment on full time.
  </p>
);

export default {
  title: 'SectionCallToAction',
  component: SectionCallToAction,
  args: {
    isRightAlligned: true,
    headingType: 'h2',
    headerText: 'Set your inner tester free with Sourcery for Testers!',
    isParagraphTextBold: true,
    paragraphContent: content,
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
const Template = (args) => <SectionCallToAction {...args} />;

export const Home = Template.bind({});
Home.decorators = provideTheme('home');

export const Developers = Template.bind({});
Developers.decorators = provideTheme('developers');

export const Testers = Template.bind({});
Testers.decorators = provideTheme('testers');

export const FrontEnd = Template.bind({});
FrontEnd.decorators = provideTheme('front-end');
