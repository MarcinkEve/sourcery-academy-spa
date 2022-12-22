import React from 'react';

import { Admission } from './Admission';
import { developersText, testersText, frontEndText } from './storybookText';

export default {
  title: 'Admission',
  component: Admission,
  args: {
    theme: 'Developers',
    content: developersText,
  },
  argTypes: {
    theme: {
      options: ['Developers', 'Testers', 'FrontEnd'],
      control: 'radio',
      mapping: {
        Developers: { theme: 'developers', content: developersText },
        Testers: { theme: 'testers', content: testersText },
        FrontEnd: { theme: 'front-end', content: frontEndText },
      },
    },
  },
};

export const AdmissionComponent = (args) => {
  const { theme, content } = args.theme;
  return (
    <div theme={theme}>
      <Admission content={content} />
    </div>
  );
};
