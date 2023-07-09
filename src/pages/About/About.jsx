import React from 'react';
import './About.css';
import { Fade } from 'react-awesome-reveal';


const About = () => {


    return (
        <section id="about">
            <div className="grid-layout">
                <div className="text-container">
                    <Fade cascade direction='down' duration={700} triggerOnce>
                        <h1>ABOUT ME<span id="mySpan"></span> </h1>

                        <h2>hi, my name is Paulo Vitor and I'm 19 years old.</h2>

                        <br />
                        <h2>I have been passionate about technology since I was 10 years old. I recently discovered programming and have dedicated myself intensely to becoming a great developer. My focus is building advanced web applications with an emphasis on performance, and I use Visual Studio Code and other tools for this.
                        </h2>

                        <br />

                        <h2>
                            I also enjoy creating games with Construct and producing professional music with FL Studio. I'm always eager to learn and improve my skills as a developer.
                        </h2>
                    </Fade>


                </div>
            </div >
        </section >

    );
};

export default About;
