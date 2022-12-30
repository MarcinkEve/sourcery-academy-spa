import { shape, string } from 'prop-types';

export const articleTypes = shape({
  articleTitle: string.isRequired,
  articleContent: string.isRequired,
});
