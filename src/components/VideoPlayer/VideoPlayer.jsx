import React from 'react';

import './VideoPlayer.css'

function VideoPlayer() {
  return (
    <div className='videoPlayer'>
      <video autoPlay src='https://www.youtube.com/watch?v=2m9IFlz2iYo' controls></video>
    </div>
  );
}

export default VideoPlayer;
