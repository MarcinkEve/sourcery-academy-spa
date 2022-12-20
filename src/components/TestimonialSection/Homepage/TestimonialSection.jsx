import React from 'react';

import BottomParticles from '~/assets/particles/particles-testimonial-homepage-bottom.svg';
import TestimonialWrapper from '~/components/TestimonialWrapper';
import '~/components/TestimonialWrapper/TestimonialCard/data';
import { data } from '~/components/TestimonialWrapper/TestimonialCard/data';

import './testimonial-section.scss';

export const TestimonialSection = () => {
  return (
    <section className="testimonial-homepage-section">
      <TestimonialWrapper data={data.slice(0, 4)} title="Testimonials" />
      <BottomParticles className="testimonial-homepage-section__bottom-particles" />
    </section>
  );
};
