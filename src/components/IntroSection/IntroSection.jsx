import React from 'react';
import { Article } from '../Article/Article';

import ParagraphAndImageSection from '../ParagraphAndImageSection';

import './intro-section.scss';

export const IntroSection = () => {
  return (
    <section className="intro-section">
      <ParagraphAndImageSection />
      <Article />
    </section>
  );
};

// IntroSection.propTypes = {
// };
