import React from 'react';
import Hero from './home/Hero';
import Welcome from './home/Welcome';
import Services from './home/Services';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Welcome />
      <Services />
    </div>
  );
};

export default Home;