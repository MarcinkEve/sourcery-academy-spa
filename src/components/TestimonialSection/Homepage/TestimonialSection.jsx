import React from 'react';

import BottomParticles from '~/assets/particles/particles-testimonial-homepage-bottom.svg';
import TestimonialWrapper from '~/components/TestimonialWrapper';
import '~/components/TestimonialWrapper/TestimonialCard/data';
import { getTestimonials } from '~/components/TestimonialWrapper/TestimonialProvider';

import './testimonial-section.scss';
import TestimonialError from '~/components/TestimonialWrapper/TestimonialError';

export const TestimonialSection = () => {
  const { data, error } = getTestimonials();

  return (
    <section className="testimonial-homepage-section">
      {error ? (
        <TestimonialError />
      ) : (
        <TestimonialWrapper data={data} title="Testimonials" />
      )}
      <BottomParticles className="testimonial-homepage-section__bottom-particles" />
    </section>
  );
};
