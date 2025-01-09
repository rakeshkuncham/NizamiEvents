import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Footer from './Footer';
import './About.css';
import nizamiLogo from '../assets/nizami-logo.png';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="overview">
        <div className="overtext">
          <a href="/"><span>Home</span></a>
          <FontAwesomeIcon icon={faAngleRight} />
          <a href="/about"><span>About Us</span></a>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className="company">
          <h2>About Us</h2>
        </div>
      </div>

      <div className="container-fluid jquery sai">
        <div className="container leftside">
          <h5 className="first">We create unforgettable events with meticulous attention to detail and offer comprehensive event planning services.</h5>
          <br />
          <p className="second">
            At NizamiEvents, we take pride in crafting exceptional experiences that transform your special moments into lasting memories. Our dedicated team works closely with each client to understand their vision and bring it to life with creativity and precision.
          </p>
          <p className="second">
            Founded with a passion for creating extraordinary events, NizamiEvents has established itself as a premier event planning and organization company. We specialize in both intimate gatherings and grand celebrations.
          </p>
          
          <h3 className="third">Vision:</h3>
          <p className="second">
            "To be the leading event planning company that transforms ordinary occasions into extraordinary experiences, setting new standards in creativity, elegance, and customer satisfaction."
          </p>
          
          <h3 className="third">Mission:</h3>
          <p className="second">
            Our mission is to deliver personalized, innovative, and flawlessly executed events that exceed our clients' expectations. We are committed to:
          </p>
          <ul className="second">
            <li>Creating unique and memorable experiences</li>
            <li>Providing exceptional customer service</li>
            <li>Maintaining the highest standards of professionalism</li>
            <li>Staying current with the latest event trends and technologies</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;