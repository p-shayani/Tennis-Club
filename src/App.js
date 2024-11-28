import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import Marquee from './Marquee';
import court from './image/court.webp';
import name from './image/name.svg';
import logo from './image/logo.svg';
import about from './image/about.webp';
import court2 from './image/court2.png';
import Court3 from './court3'; 

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#fffcf8'); 
  const { scrollY } = useScroll();
  
  const scaleCourt2 = useTransform(scrollY, [3600, 4000], [1, 1.5]); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 3800) {
        setBackgroundColor('#c76647'); 
      } else {
        setBackgroundColor('#fffcf8'); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor, transition: 'background-color 0.5s ease' }}>
      <div>
        <div>
          <img src={court} alt="court" className="court" />
          <img src={name} alt="name" className="name" />
          <i className="pointer down fa-solid fa-angle-down"></i>
        </div>
        <div className="box">
          <h3>BOOK A COURT</h3>
        </div>
      </div>
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <p className="welcome">Welcome to the sporting heart of Sóller.</p>
        <p className="description">Sóller Tennis Club is a wellness and lifestyle community for local neighbours, international friends, and touring pros.</p>
      </div>
      <div className="flexrow">
        <img src={about} alt="about" className="about-img" />
        <p className="about-text">
          A one-of-a-kind destination where tennis, padel and swimming are metres away from a relaxed restaurant and panoramic views across the UNESCO World Heritage Serra de Tramuntana.
          <br /><br />
          Perched high between mountains and sea, our club overlooks the historic town of Sóller – highlighting one of the most beautiful courtside views anywhere in Europe.
        </p>
      </div>
      <div>
        <Marquee />
      </div>
      <h2 className='txt-h2 txt1'>Arrive for the game.</h2>
      <h2 className='txt-h2 txt2'>Stay for the day.</h2>
      <h2 className='txt-h2 txt3'>Return for the moments.</h2>
      <p className='txt-p'>
        Our grounds are carved into a hillside that’s drenched in sunshine with dappled shade, where clean coastal air is filtered through cool mountains. Twisting paths amble through fragrant lemon and orange trees, connecting a variety of lounge spaces – from comfortable seating and family picnic areas to hidden corners where you can be alone with nature.
      </p>
      <div className='txt'>
        <h2 className='txt2-h2 txt2-1'>Sociable spaces and quiet corners.</h2>
        <h2 className='txt2-h2 txt2-2'>Find your place.</h2>
      </div>
      <motion.img 
        src={court2} 
        alt="court2" 
        className="court2"
        style={{ scale: scaleCourt2, transition: 'transform 0.25s ease' }} 
      />
      <h1 className='txt3-h1'>"When you step out on the courts, there’s an expansion of space elevated above the surroundings. It’s like being pulled up towards the mountains.”</h1>
      <div>
        <Court3 /> 
      </div>
    </div>
  );
};

export default App;
