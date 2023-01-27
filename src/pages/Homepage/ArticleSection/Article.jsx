import React from 'react';

import ArticleTopParticles from '~/assets/decorators/particles/article-top-particles.svg';
import ArticleBottomParticles from '~/assets/decorators/particles/article-bottom-particles.svg';
import VerticalLine from '~/assets/icons/icon-vertical-line-article.svg';
import ArrowDownArticle from '~/assets/icons/icon-arrow-down-article.svg';
import { articleTypes } from '~/pages/Homepage/ArticleSection/types';

import './article.scss';

export const Article = ({ articleSectionData }) => {
  const { articleTitle, articleContent } = articleSectionData;

  return articleTitle || articleContent ? (
    <section className="article">
      <ArticleTopParticles className="article__top-particles" />
      <div className="article__content-wrapper">
        <h2 className="article__title">{articleTitle}</h2>
        <p className="article__content">{articleContent}</p>
        <div className="article__icon-wrapper">
          <VerticalLine className="article__icon-line" />
          <div className="article__icon-circle" title="More info below">
            <ArrowDownArticle className="article__icon-arrow-down" />
          </div>
        </div>
      </div>
      <ArticleBottomParticles className="article__bottom-particles" />
    </section>
  ) : (
    ''
  );
};

Article.propTypes = {
  articleSectionData: articleTypes.isRequired,
};
