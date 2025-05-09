import React from 'react';
import Img6 from '../assets/2401bf733a0eddca0d30425b599f803301e7e55f (1).png';
import './Specialicity.css'; 

const Specialicity = () => {
  return (
    <div className="specialicity">
      <main className="main">
        <div className="left">
          <img src={Img6} alt="sofa" />
        </div>
        <div className="right">
          <h1>Contemporary Modern Sofa</h1>
          <p>
            MODERN LOUNGE SPOT - A cherished round back upholstered loveseat
            for any modern lounge space, Prospect provides a comfortable place to rest
            while relaxing or reading a bedtime story in the kid’s room.
          </p>
          <h2>Our Speciality</h2>
          <div className="list-container">
  <div className="left-list">
    <ul>
      <li>Interior Strategy</li>
      <li>Creative Desigen</li>
      <li>Interior Architector</li>
    </ul>
  </div>
  <div className="right-list">
    <ul>
      <li>Update Desigen</li>
      <li>Event Decoration</li>
      <li>21 Years Of Experience</li>
    </ul>
    <button className="learn-more-btn">
  Learn More <span className="arrow">→</span>
</button>
  </div>
</div>
        </div>
      </main>
    </div>
  );
};

export default Specialicity;
