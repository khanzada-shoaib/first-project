import React from 'react';
import Navebar from './components/Navebar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
function App() {
  return (
    <div>
      <Navebar />
      <Hero/>
      <ProductList />
      <Footer/>
    </div>
  );
}

export default App;
