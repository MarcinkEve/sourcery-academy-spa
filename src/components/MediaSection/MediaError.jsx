import React from 'react';

import TextSection from '~/components/TextSection';

export const MediaError = () => {
  return (
    <div className="media-error">
      <TextSection
        headingContent={<h1>Media</h1>}
        paragraphContent={
          <p>
            Sorry, we could not get media sources. Check your connection and try
            to refresh the page.
          </p>
        }
      />
    </div>
  );
};
