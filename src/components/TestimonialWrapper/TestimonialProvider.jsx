import React, { createContext, useContext, useEffect, useState } from 'react';
import { func, node } from 'prop-types';
import { useLocation } from 'react-router-dom';

import { ROUTES } from '~/constants/routes.js';

export const getTestimonials = () => {
  const { pathname } = useLocation();
  const testimonialContext = useContext(TestimonialContext);

  const filterTestimonialsForAcademy = (academy) =>
    testimonialContext.data.filter((testimonial) =>
      testimonial.academy.includes(academy)
    );

  const getTestimonialsForPage = (page) => {
    switch (page) {
      case ROUTES.DEVELOPERS:
        return filterTestimonialsForAcademy('Developers');
      case ROUTES.TESTERS:
        return filterTestimonialsForAcademy('Testers');
      case ROUTES.FRONTEND:
        return filterTestimonialsForAcademy('Front-End');
      default:
        return testimonialContext.data;
    }
  };

  return { ...testimonialContext, data: getTestimonialsForPage(pathname) };
};

const initialState = { data: [], error: false };

export const TestimonialContext = createContext(initialState);

export const TestimonialProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState(initialState);

  useEffect(() => {
    fetch('https://www.jurele.lt/testimonials.json')
      .then((response) => response.json())
      .then((response) => setTestimonials({ data: response, error: false }))
      .catch(() => setTestimonials({ data: [], error: true }));
  }, []);

  return (
    <TestimonialContext.Provider value={testimonials}>
      {children}
    </TestimonialContext.Provider>
  );
};

TestimonialContext.propTypes = {
  getTestimonialsForPage: func,
};

TestimonialProvider.propTypes = {
  children: node,
};
