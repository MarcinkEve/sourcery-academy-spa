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

import TestimonialCard from './TestimonialCard';
import './TestimonialWrapper.scss';
import { cardWidth, shadowSize } from './TestimonialCard/TestimonialCard.scss';
import SvgArrow from '../../assets/icons/icon-feather-arrow-down.svg';

function useWindowSizeUpdates(func, deps) {
  useEffect(() => {
    window.addEventListener('resize', func);
    return () => window.removeEventListener('resize', func);
  }, deps);
}

export const TestimonialWrapper = ({ title, data, alt, visibleSlides = 3 }) => {
  const ref = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const updateWidth = () =>
    ref.current && setContainerWidth(ref.current.offsetWidth);

  useEffect(updateWidth, [ref]);
  useWindowSizeUpdates(updateWidth, [ref]);

  const testimonialCardWidth = parseInt(cardWidth) + parseInt(shadowSize);
  visibleSlides = Math.min(data.length, visibleSlides);

  const sumGaps = containerWidth - testimonialCardWidth * visibleSlides;
  let gap;
  if (visibleSlides !== 1) {
    gap = sumGaps / (visibleSlides - 1);
  } else {
    gap = sumGaps / 2 + data.length * parseInt(shadowSize);
  }

  return (
    <div className="carousel" ref={ref}>
      {title && <h2 className="carousel__title">{title}</h2>}
      <CarouselProvider
        totalSlides={data.length}
        visibleSlides={visibleSlides}
        isIntrinsicHeight={true}
      >
        {data.length > visibleSlides && (
          <div className={'carousel__navigation'}>
            <ButtonBack className={'carousel__button'}>
              <SvgArrow className={'carousel__arrow'} />
            </ButtonBack>
            <ButtonNext className={'carousel__button'}>
              <SvgArrow className={'carousel__arrow carousel__arrow--next'} />
            </ButtonNext>
          </div>
        )}
        <Slider
          className={'carousel__slider'}
          slideTraySize={
            ((testimonialCardWidth + gap) * data.length * 100) / containerWidth
          }
        >
          {data.map((element, index) => (
            <Slide
              key={index}
              index={index}
              className="carousel__card"
              style={
                visibleSlides !== 1 ? { marginRight: gap } : { marginLeft: gap }
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
  visibleSlides: number,
};
