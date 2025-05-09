import React from 'react';
import './Hero.css';
import img1 from '../assets/img2.jpg'

function Hero() {
  
  return (
    <section 
    className="hero" 
    style={{
      backgroundImage: `url(${img1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '150vh',
    }}
  >
  <div class="hero-overlay">
    <div class="container">
      <h1 className='hiding'>Make Your Interior More<br/> Minimalistic & Modern</h1>
      <a href="#" class="btn-primary">Shop Now</a>
    </div>
  </div>
</section>

  
  );
}

export default Hero;

