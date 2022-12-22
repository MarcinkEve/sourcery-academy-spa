import React from 'react';

import TopParticles from '~/assets/particles/particles-testimonial-top.svg';
import BottomParticles from '~/assets/particles/particles-testimonial-academies-bottom.svg';
import TestimonialWrapper from '~/components/TestimonialWrapper';
import { getTestimonials } from '~/components/TestimonialWrapper/TestimonialProvider';
import Error from '~/components/Error';

import './testimonial-section.scss';

export const TestimonialSection = () => {
  const { data, error } = getTestimonials();

  return (
    <section className="testimonial-academies-section">
      <TopParticles className="testimonial-academies-section__top-particles" />
      {error ? (
        <Error title="Testimonials" />
      ) : (
        <TestimonialWrapper data={data} title="Testimonials" />
      )}
      <BottomParticles className="testimonial-academies-section__bottom-particles" />
    </section>
  );
};
