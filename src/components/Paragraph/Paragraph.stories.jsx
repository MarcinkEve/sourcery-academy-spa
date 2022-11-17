import React from 'react';

import { Paragraph } from './Paragraph';
import { PARAGRAPH_PROPS } from '../../components/Paragraph/Paragraph';
const content =
  'Top-notch studies for the future Test Engineers. Students join the Devbridge team as a paid employee for the Academy period (two months) to learn and work. Ones who finish the Academy successfully are invited to continue employment on full time.';

export default {
  title: 'Paragraph',
  component: Paragraph,
  args: {
    isMainHeading: true,
    headerContent: 'Set your inner tester free with Sourcery for Testers!',
    isBoldParagraph: true,
    paragraphContent: content,
    hasButton: true,
    buttonContent: PARAGRAPH_PROPS.BUTTON_LABEL.APPLY,
    pageRoute: PARAGRAPH_PROPS.PAGE_ROUTE.DEVELOPERS,
    align: PARAGRAPH_PROPS.ALIGN.LEFT,
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
const Template = (args) => <Paragraph {...args} />;

export const Home = Template.bind({});
Home.decorators = provideTheme('home');

export const Developers = Template.bind({});
Developers.decorators = provideTheme('developers');

export const Testers = Template.bind({});
Testers.decorators = provideTheme('testers');

export const FrontEnd = Template.bind({});
FrontEnd.decorators = provideTheme('front-end');
