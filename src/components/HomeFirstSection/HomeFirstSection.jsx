import React from 'react';
import Article from '../Article';

import IntroSection from '../IntroSection';

import './home-first-section.scss';

export const HomeFirstSection = () => {
  return (
    <section className="home-first-section">
      <IntroSection />
      <Article />
    </section>
  );
};

// HomeFirstSection.propTypes = {
// };
