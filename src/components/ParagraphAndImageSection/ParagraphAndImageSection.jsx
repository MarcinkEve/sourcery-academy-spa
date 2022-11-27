import React from 'react';

import './paragraph-and-image-section.scss';
import IntroIcon from '../../assets/icons/icon-intro.svg';

export const ParagraphAndImageSection = () => {
  return (
    <div className="paragraph-and-image-section">
      <div className="paragraph-and-image-section__paragraph">
        PARAGRAPH Sourcery academy is our free of charge education program
        created to allow students to improve their skills and prepare for a
        career in the IT industry. There are three academies available. They
        serve as our long- term commitment to increase the number of students in
        Lithuania entering information technologies studies.
      </div>
      <IntroIcon className="paragraph-and-image-section__image" />
    </div>
  );
};

// IntroSection.propTypes = {
// };
