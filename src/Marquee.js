// Marquee.js
import React from 'react';
import './Marquee.css';

import image1 from './image/1.webp';
import image2 from './image/2.webp';
import image3 from './image/3.webp';
import image4 from './image/4.webp';
import image5 from './image/5.webp';
import image6 from './image/6.webp';
import image7 from './image/7.webp';
import image8 from './image/8.webp';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-inner">
        {Array.from({ length: 5 }).map((_, repeatIndex) => (
          images.map((image, index) => (
            <img key={`img-${repeatIndex}-${index}`} src={image} alt={`Image ${index + 1}`} />
          ))
        ))}
      </div>
    </div>
  );
};

export default Marquee;
