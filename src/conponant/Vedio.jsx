import { useState, useRef } from 'react';
import videoBgPlaceholder from '../assets/vedio1.png'; 
import playIcon from '../assets/vedio.png';         
import actualVideo from '../assets/my-video.mp4';    

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      setTimeout(() => {
        videoRef.current.play().catch(err => console.log("Playback prevented:", err));
      }, 50);
    }
  };

  const handleVideoClose = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      className='bg-cover bg-center bg-no-repeat w-full h-200 mt-5 mb-5 flex items-center justify-center relative overflow-hidden' 
      style={{ backgroundImage: `url(${videoBgPlaceholder})` }}
    >
    
      <video 
        ref={videoRef}
        src={actualVideo} 
        controls={true} 
        onPause={handleVideoClose}  
        onEnded={handleVideoClose}  
        className={`w-full h-full object-cover relative z-20 ${isPlaying ? 'block' : 'hidden'}`}
      />

    
      {!isPlaying && (
        <img 
          onClick={handlePlayVideo} 
          src={playIcon} 
          alt="Play Video"
          className="cursor-pointer absolute z-10 hover:scale-110 transition-transform duration-200 w-16 h-16" // Added explicit sizing if needed
        />
      )}
    </div>
  );
};

export default VideoComponent;