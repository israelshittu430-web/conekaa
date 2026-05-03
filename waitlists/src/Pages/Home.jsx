import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import homepg from '../assets/home.jpeg';
import housepg from '../assets/house-png-images.png'
import hhhe from '../assets/hhhe.avif'

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Using unique images to demonstrate the slide effect
  const images = [
    homepg, 
    housepg, 
    hhhe,
    
  ]; 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500); // Slightly faster for a smoother feel
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="home-hero" id='home'>
      <div className="home-wrapper">
        
        <div className="home-content reveal">
          <h1>
            Your entire housing journey, <br />
            <span className="highlight">connected.</span>
          </h1>
          <p>
            Conekta is the all-in-one platform for finding, financing, moving into 
            and managing your home.
          </p>
          <div className="home-buttons">
            <a href="#waitlist-form" className='join-bttn'>Join Waitlist</a>
            <a href="#services" className="btn-secondary">Learn More</a>
          </div>
        </div>

        <div className="home-image reveal">
          <div className="slider-viewport">
            <div 
              className="slider-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`housing ${index}`}
                  className="slide-img"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;