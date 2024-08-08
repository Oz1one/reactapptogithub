
import "../Styling/homeMain.css";
import React, { useRef, useState } from 'react';
import video from "../Assets/Video3.mp4";
import "../Styling/videoPlayerStyle.css";
import { Link } from 'react-router-dom';

 
 


export default function Home3() {
  
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <main>
      <div className="container">
      

        <div className="video-content">
        
        <div className="video-player-container">
      <video ref={videoRef} className='videoPlayerStyle'>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className='controls'>
        <button onClick={togglePlay}>
          {isPlaying ? '♡＼(￣▽￣)／♡' : '♡( ◡‿◡ )'}
        </button>
      </div>
      <Link to="/Blessing4">Next</Link>
    </div>
        </div>
      </div>
    </main>
  );
}

