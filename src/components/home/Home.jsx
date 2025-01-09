import React from 'react';
import Hero from './Hero';
import Welcome from './Welcome';
import Services from './Services';

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