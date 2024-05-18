import React from 'react';
import Confetti from './components/Confetti';
import Header from './components/Header';
import Messages from './components/Messages';
import PhotoGallery from './components/PhotoGallery';
import YouTubeAudio from './components/YouTubeAudio';

const App = () => {
  return (
    <div>
      <Confetti />
      <Header />
      <PhotoGallery />
      <Messages />
      <YouTubeAudio />
    </div>
  );
};

export default App;
