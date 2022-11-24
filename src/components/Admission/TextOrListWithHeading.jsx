import React from 'react';
import { array, string } from 'prop-types';

import './textOrListWithHeading.scss';

export const TextOrListWithHeading = ({ heading, text, list }) => {
  return (
    <section className="section">
      <h2 className="section__heading">{heading}</h2>
      {text && <p className="section__text">{text}</p>}
      {list && (
        <ul className="section__list">
          {list.map((item, index) => (
            <li key={index} className="section__list-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

TextOrListWithHeading.propTypes = {
  heading: string.isRequired,
  text: string,
  list: array,
};
