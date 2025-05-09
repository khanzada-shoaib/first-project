import React from 'react';
import './MostPopular.css';

const MostPopularCard = ({ image, name, price }) => {
  return (
    <div className='mostpopular-card'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

export default MostPopularCard;
