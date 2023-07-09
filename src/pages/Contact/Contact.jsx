import React from "react";
import { Fade } from 'react-awesome-reveal';
import "./Contact.css";
const Contact = () => {

    return (
        <section id="contact">
            <div className="grid-layout">
                <Fade direction='down' cascade duration={1000} triggerOnce>
                    <h1 >
                        SEND ME A MESSAGE!
                    </h1>
                </Fade>

                <form>
                    <Fade direction='down' cascade duration={400} triggerOnce>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            required
                        />

                        <textarea
                            placeholder="Message"
                            rows={5}
                            required
                        />
                        <div className="button-effect">
                            <button type="submit">Send</button>
                        </div>
                    </Fade>
                </form>
            </div>
        </section >
    );
};

export default Contact;
