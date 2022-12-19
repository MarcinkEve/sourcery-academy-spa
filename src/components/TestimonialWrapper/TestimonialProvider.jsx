import React, { createContext, useContext, useEffect, useState } from 'react';
import { any, func } from 'prop-types';
import { useLocation } from 'react-router-dom';

import { ROUTES } from '~/constants/routes.js';

export const useTestimonials = () => {
  const { pathname } = useLocation();
  const { data } = useContext(TestimonialContext);

  const filterTestimonialsForAcademy = (academy) =>
    data.filter((testimonial) => testimonial.academy.includes(academy));

  const getTestimonialsForPage = (page) => {
    if (page === ROUTES.DEVELOPERS) {
      return filterTestimonialsForAcademy('Developers');
    } else if (page === ROUTES.TESTERS) {
      return filterTestimonialsForAcademy('Testers');
    } else if (page === ROUTES.FRONTEND) {
      return filterTestimonialsForAcademy('Front-End');
    } else {
      return data;
    }
  };

  return { testimonials: getTestimonialsForPage(pathname) };
};

export const TestimonialContext = createContext({ data: [] });

export const TestimonialProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('https://www.jurele.lt/testimonials.json')
      .then((response) => response.json())
      .then((response) => setTestimonials(response));
  }, []);

  return (
    <TestimonialContext.Provider value={{ data: testimonials }}>
      {children}
    </TestimonialContext.Provider>
  );
};

TestimonialContext.propTypes = {
  getTestimonialsForPage: func,
};

TestimonialProvider.propTypes = {
  children: any,
};
