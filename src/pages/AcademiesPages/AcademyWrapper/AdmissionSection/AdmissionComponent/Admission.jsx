import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import TextSection from '~/components/UI/TextSection';

import './admission.scss';

const renderList = (list) => {
  return (
    <ul>
      {list
        .filter((item) => item !== '')
        .map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
    </ul>
  );
};

export const Admission = ({ content }) => (
  <article className="admission">
    <h2 className="admission__title">The Admission</h2>
    {content.map((section, index) => {
      const sectionContent = section.list ? (
        renderList(section.list)
      ) : (
        <p>{section.text}</p>
      );

      return (
        <TextSection
          headingContent={<h3>{section.heading}</h3>}
          paragraphContent={sectionContent}
          key={index}
        />
      );
    })}
  </article>
);

Admission.propTypes = {
  content: arrayOf(
    shape({
      heading: string.isRequired,
      text: string,
      list: arrayOf(string),
    })
  ).isRequired,
};
