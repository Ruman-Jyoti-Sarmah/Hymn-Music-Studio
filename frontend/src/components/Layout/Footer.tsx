import React from 'react';
import { Music2, Instagram, Twitter, Facebook } from 'lucide-react';
import { studioData } from '../../data/mockStudio';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-white pt-12 md:pt-24 pb-8 md:pb-12 border-t border-stone-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20 gap-8 md:gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
              <Music2 className="w-5 h-5 md:w-6 md:h-6 text-gold-400" />
              <span className="text-base md:text-lg font-serif font-bold tracking-widest uppercase">{studioData.name}</span>
            </div>
            <p className="text-stone-500 leading-relaxed font-light mb-6 md:mb-8 text-sm md:text-base">
              {studioData.description}
            </p>
            <div className="flex gap-4 md:gap-6">
              <a 
                href="https://www.instagram.com/hymn_music_production?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-gold-400 transition-colors"
                title="Follow us on Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors" title="Follow us on Twitter" aria-label="Twitter">
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors" title="Follow us on Facebook" aria-label="Facebook">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-12 lg:gap-24">
            <div>
              <h3 className="text-xs font-bold mb-4 md:mb-6 uppercase tracking-[0.2em] text-stone-300">Studio</h3>
              <ul className="space-y-3 md:space-y-4 text-stone-500 font-light text-xs md:text-sm">
                <li><a href="#services" className="hover:text-gold-400 transition-colors">Services</a></li>
                <li><a href="#portfolio" className="hover:text-gold-400 transition-colors">Work</a></li>
                <li><a href="#testimonials" className="hover:text-gold-400 transition-colors">Stories</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Gear List</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold mb-4 md:mb-6 uppercase tracking-[0.2em] text-stone-300">Company</h3>
              <ul className="space-y-3 md:space-y-4 text-stone-500 font-light text-xs md:text-sm">
                <li><a href="#" className="hover:text-gold-400 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-stone-600 text-xs uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {studioData.name}.</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-stone-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
