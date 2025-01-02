import React from 'react';
import t1 from '../assets/t1.mp4';
import t2 from '../assets/t2.mp4';

function Videos() {

  const handleVideoPlay = (event) => {
    // Obtener todos los videos en la página
    const videos = document.querySelectorAll("video");

    // Pausar todos los videos excepto el que se está reproduciendo actualmente
    videos.forEach((video) => {
      if (video !== event.target) {
        video.pause();
      }
    });
  };

  return (
    <div>
      <div>
        <h3 className='krona-one-regular text-center my-3'>
          Testimonios de video
        </h3>
      </div>
      <div id="example-collapse-text" className="d-flex flex-wrap justify-content-center">
        <div className="video-container m-2">
          <video src={t1} controls className="video-style" onPlay={(e) => handleVideoPlay(e)}> </video>
        </div>
        <div className="video-container m-2">
          <video src={t2} controls className="video-style" onPlay={(e) => handleVideoPlay(e)}> </video>
        </div>
      </div>
    </div>
  );
}

export default Videos;
