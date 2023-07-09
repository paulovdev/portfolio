import React from 'react';
import './Home.css';
import { Fade } from 'react-awesome-reveal';
const Home = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return (
    <section id="home">
      <div className="grid-layout">
        <Fade direction='down' cascade duration={1000} triggerOnce>
          <p>
            {month + '-' + day + '-' + year}</p>
          <h1>HI, MY NAME IS PAULO VITOR, I'M A FRONT-END DEVELOPER<span id="mySpan"></span></h1>

          <div className="button-effect">
            <button>contact me </button>
          </div>

        </Fade>
      </div>
    </section >

  );
};

export default Home;



