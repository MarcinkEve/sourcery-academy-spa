import React, { useState } from 'react';

import './intro-section.scss';
import IntroIcon from '~/assets/images/intro.svg';
import TextSection from '~/components/TextSection';
import { textSectionType } from '~/components/IntroSection/types';

import { VideoPlayer } from '../VideoPlayer/VideoPlayer';

export const IntroSection = ({ introSectionData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    headingContent,
    paragraphContent,
    buttonText,
    pageRoute,
  } = introSectionData;
  return (
    <section className="intro-section">
      <div
        className="intro-section__paragraph"
        tabIndex={1}
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) =>
          e.key === ('Enter' || 'Space') && setIsModalOpen(true)
        }
      >
        <TextSection
          headingContent={<h2>{headingContent}</h2>}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
      </div>
      <IntroIcon className="intro-section__image" />
      <VideoPlayer
        videoSrc={
          'https://sfe-2022-data.netlify.app/static/video/testers/7cd88093664cd782e4868a6706f2787da2eb7dc9.mp4'
        }
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

IntroSection.propTypes = {
  introSectionData: textSectionType.isRequired,
};
