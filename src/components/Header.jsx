import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { VscColorMode } from "react-icons/vsc";

import "./Header.css";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const navigation = [
        { nav: "HOME", href: "#home" },
        { nav: "ABOUT", href: "#about" },
        { nav: "PROJECTS", href: "#projects" },
        { nav: "CONTACT", href: "#contact" },
    ];

    function handleClick() {
        setOpen(!isOpen);
    }

    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.toggle("light");
    }

    return (
        <header>
            <nav>
                <p id="logo" title="Go to pxulin.com ?">
                    pxulin
                </p>

                <Hamburger
                    direction="right"
                    duration={0.1}
                    easing="ease-in"
                    toggled={isOpen}
                    toggle={setOpen}
                    aria-expanded={isOpen}
                />

                <ul className={isOpen ? "open" : ""}>
                    {navigation.map((item, i) => (
                        <li key={i} onClick={handleClick}>
                            <a className="header-icons" href={item.href}>
                                {item.nav}
                            </a>
                        </li>
                    ))}

                    <li>
                        <button onClick={toggleTheme} className="theme-icon" aria-label="Toggle Dark Mode">
                            <VscColorMode size={28} />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
