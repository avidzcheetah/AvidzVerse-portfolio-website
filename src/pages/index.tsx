import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Terminal from '../components/Terminal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Education from '../components/Education/Education';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Portfolio />
      <Terminal />
      <Contact />
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}