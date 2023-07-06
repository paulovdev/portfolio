import React from 'react';
import './Home.css';
import { Fade } from 'react-awesome-reveal';

const Home = () => {

  return (
    <section id="home">
      <Fade direction='down' cascade duration={1000} triggerOnce>
        <p>jul 09, 2003</p>
        <h1>HI, MY NAME IS PAULO VITOR, I'M A FRONT-END DEVELOPER<span id="mySpan"></span>
        </h1>

        <button>Contact me</button>
      </Fade>
    </section >
  );
};

export default Home;


