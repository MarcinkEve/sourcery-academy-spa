import React from 'react';
import { string } from 'prop-types';

import './admission.scss';

export const Admission = ({
  section1Heading,
  section1Text,
  section2Heading,
  section2List,
  section3Heading,
  section3Text,
}) => {
  return (
    <article className="admission">
      <h1 className="admission__title">The Admission</h1>
      <section className="admission__section">
        <h2 className="admission__section-heading">{section1Heading}</h2>
        <p className="admission__text">{section1Text}</p>
      </section>
      <section className="admission__section">
        <h2 className="admission__section-heading">{section2Heading}</h2>
        <ul className="admission__text admission__text--list">
          {section2List.map((item, index) => (
            <li key={index} className="admission__list-item">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section className="admission__section">
        <h2 className="admission__section-heading">{section3Heading}</h2>
        <p className="admission__text">{section3Text}</p>
      </section>
    </article>
  );
};

Admission.propTypes = {
  section1Heading: string,
  section1Text: string,
  section2Heading: string,
  section2List: string,
  section3Heading: string,
  section3Text: string,
};
