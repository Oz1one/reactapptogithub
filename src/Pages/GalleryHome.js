import React from 'react';
import Gallery from './Gallery.js';
import '../Styling/GalleryHome.css'
import {Link} from 'react-router-dom';

export default function GalleryHome() {
  return (
    <>
      
    
    <div className='home'>
      <div className='home2'>
      <Gallery/>
      </div>
      </div>
    <footer className='controls'>
      
      <button><Link to='/Blessings' >Press Here to view your blessings</Link>  </button>
      
    </footer>
    </>
  );
}



        
       