import React from 'react'
import './ScrollButtons.css'
import { Fade } from 'react-awesome-reveal';
import { IoIosArrowDown } from 'react-icons/io';

const handleScrollClick = () => {
    const section = document.getElementById('about');
    section.scrollIntoView({ behavior: 'smooth' });
};

const ScrollButtons = () => {
    return (
        <div id='scrolls-buttons'>
            <Fade direction='up' cascade delay={1700} triggerOnce>
                <div className="scroll down" onClick={handleScrollClick}>
                    <IoIosArrowDown size={23} />
                </div>
            </Fade>
        </div>
    )
}

export default ScrollButtons;
