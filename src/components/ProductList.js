import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';

const products = [
  {
    id: 1,
    image: img3,
    name: 'Modern Chair',
    price: 129,
    
  },
  {
    id: 2,
    image: img4,
    name: 'Elegant Sofa',
    price: 499,
  },
  {
    id: 3,
    image: img5,
    name: 'Wooden Table',
    price: 299,
  },
];

function ProductList() {
  return (
    <section className="product-section">
      <h2>Lateast Selection</h2>
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
