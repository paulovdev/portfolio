import React from "react";
import { Fade } from 'react-awesome-reveal';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import "./Contact.css";
const Contact = () => {

    return (
        <section id="contact">
            <Fade direction='down' cascade duration={1000} triggerOnce>
                <h1 >
                    GET IN TOUCH<span id="mySpan"></span>
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

                    <button type="submit">Send</button>
                </Fade>
            </form>
        </section >
    );
};

export default Contact;
