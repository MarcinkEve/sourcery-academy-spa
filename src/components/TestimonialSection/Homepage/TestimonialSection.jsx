import React from 'react';

import BottomParticles from '~/assets/particles/particles-testimonial-homepage-bottom.svg';
import TestimonialWrapper from '~/components/TestimonialWrapper';
import '~/components/TestimonialWrapper/TestimonialCard/data';
import { getTestimonials } from '~/components/TestimonialWrapper/TestimonialProvider';
import Error from '~/components/Error';

import './testimonial-section.scss';

export const TestimonialSection = () => {
  const { data, error } = getTestimonials();

  return (
    <section className="testimonial-homepage-section">
      {error ? (
        <Error title="Testimonials" />
      ) : (
        <TestimonialWrapper data={data} title="Testimonials" />
      )}
      <BottomParticles className="testimonial-homepage-section__bottom-particles" />
    </section>
  );
};
