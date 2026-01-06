import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Approach', id: 'approach' },
  { label: 'Benefits', id: 'benefits' },
  { label: 'Difference', id: 'difference' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // Check if we are on the privacy page (or any other route in the future)
    // If so, we need to navigate back to home first
    if (window.location.hash === '#privacy') {
        window.location.hash = ''; // Clear hash to return to main page
        // Wait briefly for main page to render before scrolling
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-optarix-blue/95 backdrop-blur-sm shadow-lg py-2' : 'bg-optarix-blue py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('home')} 
          className="cursor-pointer font-heading font-extrabold text-2xl md:text-3xl tracking-wider text-white"
        >
          OPTARIX<span className="text-optarix-cyan">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-semibold transition-colors duration-300 uppercase tracking-wide hover:text-optarix-cyan ${
                activeSection === item.id ? 'text-optarix-cyan' : 'text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
             onClick={() => scrollToSection('contact')}
             className="bg-optarix-coral hover:bg-red-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-transform transform hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-optarix-blue shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-lg font-medium ${activeSection === item.id ? 'text-optarix-cyan' : 'text-white'}`}
            >
              {item.label}
            </button>
          ))}
           <button 
             onClick={() => scrollToSection('contact')}
             className="bg-optarix-coral text-white px-8 py-3 rounded-full font-bold mt-4"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};