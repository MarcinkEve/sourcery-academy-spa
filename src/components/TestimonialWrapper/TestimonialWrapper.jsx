import React, { useEffect, useRef, useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import { arrayOf, shape, string } from 'prop-types';

import TestimonialCard from './TestimonialCard';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './TestimonialWrapper.scss';
import { cardWidth, shadowSize } from './TestimonialCard/TestimonialCard.scss';
import SvgArrow from '../../assets/icons/icon-feather-arrow-down.svg';

function useWindowSizeUpdates(func, deps) {
  useEffect(() => {
    window.addEventListener('resize', func);
    return () => window.removeEventListener('resize', func);
  }, deps);
}

export const TestimonialWrapper = ({ title, data, alt }) => {
  const ref = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const updateWidth = () =>
    ref.current && setContainerWidth(ref.current.offsetWidth);

  useEffect(updateWidth, [ref]);
  useWindowSizeUpdates(updateWidth, [ref]);

  const testimonialCardWidth = parseInt(cardWidth) + parseInt(shadowSize);
  const gap = (containerWidth - testimonialCardWidth * 3) / 2;

  return (
    <div className="carousel" ref={ref}>
      {title && <h2 className="carousel__title">{title}</h2>}
      <CarouselProvider
        totalSlides={data.length}
        visibleSlides={3}
        isIntrinsicHeight={true}
      >
        <div className={'carousel__navigation'}>
          <ButtonBack className={'carousel__button'}>
            <SvgArrow className={'carousel__arrow'} />
          </ButtonBack>
          <ButtonNext className={'carousel__button'}>
            <SvgArrow className={'carousel__arrow carousel__arrow--next'} />
          </ButtonNext>
        </div>
        <Slider
          className={'carousel__slider'}
          slideTraySize={
            ((testimonialCardWidth + gap) * data.length * 100) / containerWidth
          }
        >
          {data.map((element, index) => (
            <Slide key={index} index={index} className="carousel__card">
              <div style={{ marginRight: gap }}>
                <TestimonialCard data={data[index]} alt={alt && alt[index]} />
              </div>
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
};
