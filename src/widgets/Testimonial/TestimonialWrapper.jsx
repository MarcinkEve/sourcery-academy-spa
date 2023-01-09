import React, { useEffect, useRef, useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { arrayOf, number, shape, string } from 'prop-types';

import SvgArrow from '~/assets/icons/icon-feather-arrow-down.svg';

import TestimonialCard from './TestimonialCard';
import { cardWidth, shadowSize } from './TestimonialCard/TestimonialCard.scss';
import './TestimonialWrapper.scss';

function useWindowSizeUpdates(func, deps) {
  useEffect(() => {
    window.addEventListener('resize', func);
    return () => window.removeEventListener('resize', func);
  }, deps);
}

const calculateGap = (visibleSlides, sumGaps) => {
  switch (visibleSlides) {
    case 1:
      return sumGaps / 2;
    case 2:
      return sumGaps / 3;
    default:
      return sumGaps / (visibleSlides - 1);
  }
};

export const TestimonialWrapper = ({ title, data, alt, slides = 3 }) => {
  slides = Math.min(data.length, slides);

  const carouselWrapperRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(slides);
  const updateWidth = () =>
    carouselWrapperRef.current &&
    setContainerWidth(carouselWrapperRef.current.offsetWidth);
  const testimonialCardWidth = parseInt(cardWidth) + parseInt(shadowSize);
  const sumGaps = containerWidth - testimonialCardWidth * visibleSlides;
  const gap = calculateGap(visibleSlides, sumGaps);
  const gapWithShadows = gap + parseInt(shadowSize);

  useEffect(updateWidth, [carouselWrapperRef]);
  useWindowSizeUpdates(updateWidth, [carouselWrapperRef]);
  useEffect(() => {
    const numSlidesFit = Math.floor(
      containerWidth / (testimonialCardWidth + parseInt(shadowSize))
    );
    setVisibleSlides(Math.max(1, numSlidesFit));
  }, [containerWidth]);

  return (
    <div className="carousel-wrapper" ref={carouselWrapperRef}>
      {title && <h2 className="carousel-wrapper__title">{title}</h2>}
      <CarouselProvider
        totalSlides={data.length}
        visibleSlides={visibleSlides}
        isIntrinsicHeight={true}
      >
        {data.length > visibleSlides && (
          <div className="carousel-wrapper__navigation">
            <ButtonBack className="carousel-wrapper__button">
              <SvgArrow className="carousel-wrapper__arrow" />
            </ButtonBack>
            <ButtonNext className="carousel-wrapper__button">
              <SvgArrow className="carousel-wrapper__arrow carousel-wrapper__arrow--next" />
            </ButtonNext>
          </div>
        )}
        <Slider
          className="carousel-wrapper__slider"
          slideTraySize={
            ((testimonialCardWidth + gap) * data.length * 100) / containerWidth
          }
        >
          {data.map((element, index) => (
            <Slide
              key={index}
              index={index}
              className="carousel-wrapper__card"
              innerClassName={'carousel-wrapper__inner-slide'}
              style={
                visibleSlides >= 3
                  ? { marginRight: gap }
                  : { marginLeft: gapWithShadows }
              }
            >
              <TestimonialCard data={data[index]} alt={alt && alt[index]} />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
};

TestimonialWrapper.propTypes = {
  title: string,
  data: arrayOf(
    shape({
      photo: string,
      message: string.isRequired,
      name: string,
      academy: string,
    }).isRequired
  ),
  alt: arrayOf(string),
  slides: number,
};
