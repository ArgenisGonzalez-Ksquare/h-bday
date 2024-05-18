import React from 'react';
import YouTube from 'react-youtube';

const YouTubeAudio = () => {
  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1, // Autoplay
      controls: 0, // Hide controls
      showinfo: 0, // Hide video title
      modestbranding: 1, // Hide YouTube logo
      loop: 1, // Loop video
      playlist: 'k4MyopavOsE' // Playlist ID for loop
    },
  };

  const onReady = (event) => {
    event.target.setVolume(50); // Adjust the volume (0 to 100)
    event.target.playVideo(); // Ensure the video starts playing
  };

  return (
    <YouTube videoId="k4MyopavOsE" opts={opts} onReady={onReady} />
  );
};

export default YouTubeAudio;
