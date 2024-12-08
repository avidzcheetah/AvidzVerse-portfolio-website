import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['about', 'portfolio', 'contact'];

  const getTextColor = () => {
    if (isScrolled) return 'text-[var(--color-text)]';
    if (theme === 'light') return 'text-gray-900';
    return 'text-white';
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            smooth={true}
            className={cn(
              'text-2xl font-bold cursor-pointer',
              getTextColor()
            )}
          >
            AvidzVerse
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                className={cn(
                  'cursor-pointer capitalize hover:text-[var(--color-primary)] transition-colors',
                  getTextColor()
                )}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={getTextColor()} />
            ) : (
              <Menu className={getTextColor()} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                className="block px-4 py-2 text-[var(--color-text)] hover:bg-gray-100 capitalize"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;