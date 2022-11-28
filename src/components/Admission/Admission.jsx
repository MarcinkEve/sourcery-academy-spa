import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import './admission.scss';
import TextSectionComponent from '~/components/TextSectionComponent';

export const Admission = ({ content }) => {
  const renderList = (list) => {
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <article className="admission">
      <h2 className="admission__title">The Admission</h2>
      {content.map((section, index) => {
        const sectionContent = section.list ? (
          renderList(section.list)
        ) : (
          <p>{section.text}</p>
        );

        return (
          <TextSectionComponent
            headingContent={<h3>{section.heading}</h3>}
            paragraphContent={sectionContent}
            key={index}
          />
        );
      })}
    </article>
  );
};

Admission.propTypes = {
  content: arrayOf(
    shape({
      heading: string.isRequired,
      text: string,
      list: arrayOf(string),
    })
  ).isRequired,
};
