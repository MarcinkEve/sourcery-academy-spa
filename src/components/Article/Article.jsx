import React from 'react';
import { string } from 'prop-types';

import './article.scss';
import ArticleTopParticles from '../../assets/icons/icon-article-top-particles.svg';
import ArticleBottomParticles from '../../assets/icons/icon-article-bottom-particles.svg';
import VerticalLine from '../../assets/icons/icon-vertical-line-article.svg';
import ArrowDownArticle from '../../assets/icons/icon-arrow-down-article.svg';

export const Article = ({ articleTitle, articleContent }) => {
  return (
    <section className="article">
      <ArticleTopParticles className="article__top-particles" />
      <div className="article__content-wrapper">
        <h2 className="article__title">
          {articleTitle ? articleTitle : 'Text is missing...'}
        </h2>
        <p className="article__content">
          {articleContent ? articleContent : 'Text is missing...'}
        </p>
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
  articleTitle: string.isRequired,
  articleContent: string.isRequired,
};
