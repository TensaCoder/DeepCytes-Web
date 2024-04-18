

import React, { useEffect, useRef } from 'react';
import '../Components/ZoomOutImage.css';

const ZoomOutImage = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      console.log(scrollY);
      const threshold = 300; 

      
      if (scrollY > threshold) {
       
        imgRef.current.classList.add('zoom-in');
      } else {
        
        imgRef.current.classList.remove('zoom-in');
      }
    };

    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className='ZoomOutImage'>
        <div className="app ">
            <div className="img-container">
            <img
              ref={imgRef}
              src={require("../Images/3dimage1.png")}
              alt="meditation"
              className='img-fluid'
            />
      </div>
        </div>

       
    </div>
  );
};

export default ZoomOutImage;

