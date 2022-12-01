import React from 'react';
import { string } from 'prop-types';

import './article.scss';
import ArticleTopParticles from '../../assets/icons/icon-article-top-particles.svg';
import ArticleBottomParticles from '../../assets/icons/icon-article-bottom-particles.svg';
import VerticalLine from '../../assets/icons/icon-vertical-line-article.svg';
import ArrowDownArticle from '../../assets/icons/icon-arrow-down-article.svg';

export const Article = ({ title, content }) => {
  return (
    <section className="article" id="acad">
      <ArticleTopParticles className="article__top-particles" />
      <div className="article__content-wrapper">
        <h2 className="article__title">{title}</h2>
        <p className="article__content">{content}</p>
        <div className="article__icon-wrapper">
          <VerticalLine className="article__icon-line" />
          <div className="article__icon-circle" title="More info below">
            <ArrowDownArticle className="article__icon-arrow-down" />
          </div>
        </div>
      </div>
      <ArticleBottomParticles className="article__bottom-particles" />
    </section>
  );
};

Article.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
};

Article.defaultProps = {
  title: 'Academies',
  content: `There are four disciplines available: for developers, testers, front-end developers and kids. Academies are taking place
  in Devbridge Lithuanian offices. Students, who are willing to join developers, testers or Front-End academies, need to
  pass the test, prove their best to get an invitation to enroll. This rule doesn’t apply to the kids (7 to 12 years old) academy,
  the admission is limited only by available number of entries.`,
};
