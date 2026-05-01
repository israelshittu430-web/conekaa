import React from 'react'
import '../css/Home.css'
import homepg from '../assets/home.jpeg';

const Home = () => {
  return (
    <section className="home-hero" id='home'>

      <div className="home-wrapper">

        {/* LEFT */}
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

        {/* RIGHT (IMAGE / DESIGN) */}
        <div className="home-image reveal">
          <img src={homepg} alt="housing illustration" />
        </div>

      </div>

    </section>
  )
}

export default Home