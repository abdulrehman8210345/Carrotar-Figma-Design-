// import React from 'react';
import Hero from './components/Hero';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <Body/>
      <Alert />
      <Pricing/>
    </div>
  );
};

export default App;
