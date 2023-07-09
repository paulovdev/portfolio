import React, { useEffect, useState } from 'react';
import './styles/styles.css';
import './styles/global.css';
import './styles/Buttons.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollButtons from './components/ScrollButtons/ScrollButtons';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const wHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight - wHeight;
      const scrollPosition = window.scrollY;
      const progressBar = (scrollPosition / fullHeight) * 100;
      setScrollProgress(progressBar);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='container'>
      <Header />

      <Home />
      <ScrollButtons />
      <About />
      <Projects />
      <Contact />

      <Footer />
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
    </div>
  );
};

export default App;
