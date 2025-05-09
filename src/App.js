import React from 'react';
import Navebar from './components/Navebar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Specialicity from './components/specialicity';
import MostPopular from './components/MostPopular';
import Furniture from './components/furniture'
import Newsletter from './components/Newsletter';
function App() {
  return (
    <div>
      <Navebar />
      <Hero/>
      <ProductList />
      <Specialicity/>
      <MostPopular/>
      <Furniture/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
