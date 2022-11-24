import React from 'react';
import { array } from 'prop-types';

import './admission.scss';
import { TextOrListWithHeading } from './TextOrListWithHeading';

export const Admission = ({ content }) => {
  return (
    <article className="admission">
      <h1 className="admission__title">The Admission</h1>
      {content.map((section, index) => (
        <TextOrListWithHeading {...section} key={index} />
      ))}
    </article>
  );
};

Admission.propTypes = {
  content: array,
};

Admission.defaultProps = {
  content: [
    {
      heading: 'Introduction',
      text:
        'During your first lecture we will introduce the Sourcery academy, tell you more about what we do as developers, get to know your fellow team members, lecturers and mentors.',
    },
    {
      heading: 'You will learn',
      list: ['React', 'JPA', 'Spring Boot'],
    },
    {
      heading: 'An Interview',
      text:
        'Only the top candidates after the final exam are invited to a job interview which will challenge your technical skills and English knowledge.',
    },
  ],
};
