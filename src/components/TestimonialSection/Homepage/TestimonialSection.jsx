import React from 'react';

import BottomParticles from '~/assets/particles/particles-testimonial-homepage-bottom.svg';
import './testimonial-section.scss';
import TestimonialWrapper from '~/components/TestimonialWrapper';
import '../../TestimonialWrapper/TestimonialCard/data';
import { data } from '~/components/TestimonialWrapper/TestimonialCard/data';

export const TestimonialSection = () => {
  return (
    <section className="testimonial-homepage-section">
      <div className="testimonial-homepage-section__wrapper">
        <TestimonialWrapper data={data.slice(0, 4)} title="Testimonials" />
      </div>
      <BottomParticles className="testimonial-homepage-section__bottom-particles" />
    </section>
  );
};
