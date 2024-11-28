import React, { useEffect } from 'react';
import './court3.css';
import court3Image from './image/court3.webp';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Court3 = () => {
  useEffect(() => {
    const tl = gsap.timeline({ ease: "none" });


    tl.from("#image img", {
      scale: 0.9,
      duration: 1,
      transformOrigin: "bottom center",
    }).to({}, {
      duration: 1
    });

 
    const scrollTrigger = ScrollTrigger.create({
      trigger: "#image",
      start: "top top",
      end: "+=200%",
      pin: true,
      animation: tl,
      scrub: 0.78,
      pinSpacing: false
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div>
      <section id="image">
        <img src={court3Image} className='court3' alt="Court 3" />
      </section>
      <div className="spacer"></div>
      <section id="text">
        <div>
          <h1>This is text</h1>
        </div>
      </section>
    </div>
  );
};

export default Court3;

