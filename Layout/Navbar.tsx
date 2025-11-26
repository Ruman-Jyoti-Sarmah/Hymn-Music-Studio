import React, { useState, useEffect } from 'react';
import { Menu, X, Music2 } from 'lucide-react';
import { studioData } from '../../data/mockStudio';
import { motion, AnimatePresence } from 'framer-motion';


export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-stone-950/90 backdrop-blur-md py-3 md:py-4 border-b border-white/5' : 'bg-transparent py-4 md:py-8'}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 md:gap-3 text-white group">
            <div className="relative">
              <div className="absolute inset-0 bg-gold-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Music2 className="w-5 h-5 md:w-6 md:h-6 text-gold-400 relative z-10" />
            </div>
            <span className="text-sm md:text-lg font-serif font-bold tracking-widest uppercase text-stone-100">{studioData.name}</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-400 hover:text-gold-400 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-white/20 hover:border-gold-400 text-stone-200 hover:text-gold-400 px-5 md:px-6 py-2 rounded-none text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-200 hover:text-gold-400 transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-stone-950 border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-8 space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-stone-300 hover:text-gold-400 text-xl font-serif italic"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="text-gold-400 uppercase tracking-widest text-sm pt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Session →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};


