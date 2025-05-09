import React from 'react'
import MostPopularCard from './MostPopularCard'
import './MostPopular.css'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img12.png'
import img14 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import img13 from '../assets/img13.png'

const CardData = [
    {
      id: 1,
      image: img6,
      name: 'Modern DSW Side Chair',
      price: "49.00",
      
    },
    {
      id: 2,
      image: img7,
      name: 'Side Dining Chair',
      price: "69.00",
    },
    {
      id: 3,
      image: img8,
      name: 'Convertable Sofa',
      price: "209.00",
    },
    {
        id: 3,
        image: img9,
        name: 'Queen Upholstered Bed',
        price: "369.00",
      },
      {
        id: 3,
        image: img10,
        name: 'Vesgainitti Couch',
        price: "399.00",
      },
      {
        id: 3,
        image: img14,
        name: 'Mesh Desk Chair',
        price: "39.00",
      },
      {
        id: 3,
        image: img12,
        name: 'Modren Sofa',
        price: "239.00",
      },
      {
        id: 3,
        image: img13,
        name: 'Premium Classic Bed',
        price: "469.00",
      },
  ];

  const MostPopular = () => {
    return (
      <div className='mostpopular'>
       <div className='selling'>
       <h2>Products</h2>
       <h3>Best Selling</h3>
       <button>Most Popular</button>
       </div>
        <div className='mostpopular-grid'>
          {CardData.map((e) => (
            <MostPopularCard
              key={e.id}
              image={e.image}
              name={e.name}
              price={e.price}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default MostPopular;

