import React from 'react';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import People from './components/People';
import Pricing from './components/Pricing';
import Start from './components/Start';
import Support from './components/Support';
import Working from './components/Working';

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <People />
      <Pricing />
      <Working />
      <Support />
      <Start />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
