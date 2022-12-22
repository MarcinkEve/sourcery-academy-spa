import React from 'react';

import { Admission } from './Admission';
import { developersText, testersText, frontEndText } from './storybookText';

export default {
  title: 'Admission',
  component: Admission,
  args: {
    theme: 'developers',
    content: developersText,
  },
  argTypes: {
    theme: {
      options: ['developers', 'testers', 'front-end'],
      control: 'radio',
      mapping: {
        developers: { theme: 'developers', content: developersText },
        testers: { theme: 'testers', content: testersText },
        'front-end': { theme: 'front-end', content: frontEndText },
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
