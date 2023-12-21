// components/VideoPlayer.js
import React from 'react';
import dynamic from "next/dynamic";

const VideoPlayer = () => {
  return (
    <video muted autoplay>
      <source src="public/bonsai_landingvidOldWstrnFitted.mp4" type="video/mp4" />
      {/* Add more <source> tags for other video formats if needed */}
      Your browser does not support the video tag.
    </video>
  );
};

export default dynamic (() => Promise.resolve(VideoPlayer), {ssr: false})
