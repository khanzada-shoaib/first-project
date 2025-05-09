import React from 'react';
import './furniture.css';
import img1 from '../assets/img14.jpg';
import img2 from '../assets/img15.jpg';
import img3 from '../assets/img16.jpg';

const Furniture = () => {
  return (
    <section className="best-furniture">
      <div className="left-content">
        <h1>Best Selling Furniture</h1>
        <p>
          MODERN LOUNGE SPOT - A cherished round back upholstered loveseat for any modern lounge space. Prospect provides a comfortable place to rest while relaxing or reading a bedtime story in the kid’s room.
        </p>
        <button>Learn More <span className="arrow">→</span></button>
      </div>

      <div className="right-images">
        <img src={img1} alt="Main furniture" className="main-img" />
        <img src={img2} alt="Overlay 1" className="img-1" />
        <img src={img3} alt="Overlay 2" className="img-2" />
      </div>
    </section>
  );
};

export default Furniture;
