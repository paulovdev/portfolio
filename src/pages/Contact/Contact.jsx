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

            <div className="contact-area">
                <Fade direction='up' cascade duration={500} triggerOnce>
                    <div >
                        <AiOutlineMail />
                    </div>
                    <p > pxulin@gmail.com</p>
                    <div >
                        <AiOutlinePhone />
                    </div>
                    <p >+55 (21) 96991-5011 </p>
                </Fade>
            </div>

            <form>
                <div className="col-1">
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
                    </Fade>
                </div>

                <div className="col-2">
                    <Fade direction='down' cascade duration={600} triggerOnce>
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
                    </Fade>
                </div>
                <Fade direction='down' cascade duration={1000} triggerOnce>
                    <button type="submit">Send</button>
                </Fade>
            </form>
        </section >
    );
};

export default Contact;
