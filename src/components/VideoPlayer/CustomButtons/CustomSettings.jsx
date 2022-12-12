import React from 'react';

import '../videoPlayer.scss';
import Settings from '~/assets/icons/icon-settings.svg';

export const CustomSettings = () => {
  return (
    <button
      aria-label="This button doesn't work"
      className="controls__settings"
    >
      <Settings className="controls__settings-icon" />
    </button>
  );
};
