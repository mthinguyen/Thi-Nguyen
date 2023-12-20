import React from 'react';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video-content">
        <source src="/graphics/fishTank.mp4" type="video/mp4" />
    
      </video>
      <style jsx>{`
        .video-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
          }
          .video-content {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gradient-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ); 
            z-index: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoBackground;
