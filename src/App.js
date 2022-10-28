import React from 'react';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import People from './components/People';
import Start from './components/Start';

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <People />
      <Start />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
