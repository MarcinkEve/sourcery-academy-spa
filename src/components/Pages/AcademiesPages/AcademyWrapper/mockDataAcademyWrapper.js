import React from 'react';

import ApplyToAcademyDevelopersImage from '~/assets/images/image-applyToAcademy-developers.svg';
import ApplyToAcademyFrontendImage from '~/assets/images/image-applyToAcademy-frontend.svg';
import ApplyToAcademyTestersImage from '~/assets/images/image-applyToAcademy-testers.svg';

export const applyToAcademyData = {
  developers: {
    title: 'Apply to academy',
    paragraphTxt:
      'Entrance test results define a priority list of candidates. We accept 20 candidates with highest marks into academy.',
    image: ApplyToAcademyDevelopersImage,
  },
  frontend: {
    title: 'Apply to academy',
    paragraphTxt:
      'Start your career in software development with the intense program at Sourcery for Front-End Developers.',
    image: ApplyToAcademyFrontendImage,
  },
  testers: {
    title: 'Apply to academy',
    paragraphTxt:
      'Set your inner tester free and apply to empower yourself with the top-notch studies for the future Test Engineers!',
    image: ApplyToAcademyTestersImage,
  },
};
