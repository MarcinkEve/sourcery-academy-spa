import React from 'react';

import Settings from '~/assets/icons/icon-settings.svg';

import '../videoPlayer.scss';

export const CustomSettingsButton = () => {
  return (
    <button
      aria-label="This button doesn't work"
      className="controls__settings"
    >
      <Settings className="controls__settings-icon" />
    </button>
  );
};
