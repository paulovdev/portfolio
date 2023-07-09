import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { VscColorMode } from "react-icons/vsc";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';
import "./Header.css";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const navigation = [
        { nav: "HOME", href: "Home" },
        { nav: "ABOUT", href: "About" },
        { nav: "PROJECTS", href: "Projects" },
        { nav: "CONTACT", href: "Contact" },
    ];

    const icons = [
        { iconComponent: FaTwitter, href: "" },
        { iconComponent: FaFacebook, href: "" },
        { iconComponent: FaInstagram, href: "" },
    ];

    function handleClick() {
        setOpen(!isOpen);
    }

    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("light");
    }

    return (
        <header>
            <nav>
                <p id="logo">
                    pxulin
                </p>
                <button id="hamburguer-button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    title={isOpen ? "Close menu" : "Open menu"}>
                    <Hamburger
                        direction="right"
                        duration={0.1}
                        easing="ease-in"
                        toggled={isOpen}
                        toggle={setOpen}
                    />
                </button>
                <ul className={isOpen ? "open" : ""}>
                    {navigation.map((item, i) => (
                        <li key={i} onClick={handleClick}>
                            <a className="header-icons"
                                href={"#" + item.href.toLowerCase()}
                                aria-label={"Go to " + item.href + "section"}
                                title={"Go to " + item.href + " section"}>
                                {item.nav}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button onClick={toggleTheme} className="theme-icon"
                            aria-label={isDarkMode ? "Change to Dark Mode" : "Change to Light Mode"}
                            title={isDarkMode ? "Change to Dark Mode" : "Change to Light Mode"}>
                            <VscColorMode size={28} />
                        </button>
                    </li>
                    <span>socials:</span>
                    <Fade direction='down' delay={2300} triggerOnce>
                        <div className="icons">
                            {icons.map((icon, index) => (
                                <div key={index} className="icons-container">
                                    <a href={icon.href} target="_blank" rel="noopener noreferrer">
                                        {icon.iconComponent && <icon.iconComponent size={28} />}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Fade>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
