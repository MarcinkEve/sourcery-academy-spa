import React from 'react';

import BottomParticles from '~/assets/particles/particles-testimonial-homepage-bottom.svg';
import TestimonialWrapper from '~/components/TestimonialWrapper';
import '~/components/TestimonialWrapper/TestimonialCard/data';
import { useTestimonials } from '~/components/TestimonialWrapper/TestimonialProvider';

import './testimonial-section.scss';

export const TestimonialSection = () => {
  const { testimonials } = useTestimonials();

  return (
    <section className="testimonial-homepage-section">
      <TestimonialWrapper data={testimonials} title="Testimonials" />
      <BottomParticles className="testimonial-homepage-section__bottom-particles" />
    </section>
  );
};
