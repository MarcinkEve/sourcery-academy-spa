import React from 'react';

import TopParticles from '~/assets/particles/particles-testimonial-top.svg';
import BottomParticles from '~/assets/particles/particles-testimonial-academies-bottom.svg';
import TestimonialWrapper from '~/components/TestimonialWrapper';
import { useTestimonials } from '~/components/TestimonialWrapper/TestimonialProvider';

import './testimonial-section.scss';

export const TestimonialSection = () => {
  const { testimonials } = useTestimonials();

  return (
    <section className="testimonial-academies-section">
      <TopParticles className="testimonial-academies-section__top-particles" />
      <TestimonialWrapper data={testimonials} title="Testimonials" />
      <BottomParticles className="testimonial-academies-section__bottom-particles" />
    </section>
  );
};
