import React from 'react';

import TopParticles from '~/assets/particles/particles-testimonial-top.svg';
import BottomParticles from '~/assets/particles/particles-testimonial-academies-bottom.svg';
import TestimonialWrapper from '~/components/TestimonialWrapper';
import { data } from '~/components/TestimonialWrapper/TestimonialCard/data';
import './testimonial-section.scss';

export const TestimonialSection = () => {
  return (
    <section className="testimonial-academies-section">
      <TopParticles className="testimonial-academies-section__top-particles" />
      <div className="testimonial-academies-section__wrapper">
        <TestimonialWrapper data={data.slice(0, 4)} title="Testimonials" />
      </div>
      <BottomParticles className="testimonial-academies-section__bottom-particles" />
    </section>
  );
};
