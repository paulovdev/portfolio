import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { VscColorMode } from "react-icons/vsc";

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
                <p id="logo" title="Go to pxulin.com ?">
                    pxulin
                </p>
                <button id="hamburguer-button" aria-label={isOpen ? "Close menu" : "Open menu"} title={isOpen ? "Close menu" : "Open menu"}>
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
                            <a
                                className="header-icons"
                                href={"#" + item.href.toLowerCase()}
                                aria-label={"Go to " + item.href + "section"}
                                title={"Go to " + item.href + " section"}>
                                {item.nav}
                            </a>
                        </li>
                    ))}

                    <li>
                        <button onClick={toggleTheme} className="theme-icon" aria-label="Toggle Dark Mode" title={isDarkMode ? "Change to Dark Mode" : "Change to Light Mode"}>
                            <VscColorMode size={28} />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
