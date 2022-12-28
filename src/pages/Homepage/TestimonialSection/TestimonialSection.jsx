import React from 'react';

import BottomParticles from '~/assets/decorators/particles/particles-testimonial-homepage-bottom.svg';
import TestimonialWrapper from '~/widgets/Testimonial';
import Error from '~/components/UI/Error';
import { getTestimonials } from '~/widgets/Testimonial/TestimonialProvider';
import '~/widgets/Testimonial/TestimonialCard/data';

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
