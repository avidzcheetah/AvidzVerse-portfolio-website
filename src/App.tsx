import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/themes.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Terminal />
        <Contact />
        <Footer />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;