import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="container">
        <h2>Welcome to NizamiEvents</h2>
        <p className="lead">Your Trusted Event Planning Partner in Creating Memorable Celebrations</p>
        <div className="welcome-content">
          <p>At NizamiEvents, we specialize in transforming your vision into extraordinary events. Our dedicated team of event professionals works meticulously to ensure every detail is perfect, from intimate gatherings to grand celebrations.</p>
          <p>We understand that each event is unique, and we pride ourselves on delivering personalized experiences that exceed expectations. With our comprehensive event planning services, we handle everything from concept development to flawless execution.</p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;