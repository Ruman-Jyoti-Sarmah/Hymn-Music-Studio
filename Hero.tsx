import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { studioData } from '../../data/mockStudio';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Image with Advanced Overlay */
      
      }
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={studioData.heroImage}
            alt="Music Studio Background"
            className="w-full h-full object-cover opacity-60 grayscale-[30%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            src="./src/assets/micro-pic.jpg"
            alt="Microphone texture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 md:px-12 py-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-gold-400 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 pl-1">
              Professional Recording Studio
            </h2>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-medium text-stone-100 mb-6 md:mb-8 leading-tight tracking-tight"
          >
            Where Sound <br />
            <span className="italic text-stone-400">Becomes Art</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-stone-300 mb-8 md:mb-12 max-w-xl leading-relaxed font-light"
          >
            {studioData.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-start"
          >
            <a
              href="#contact"
              className="group bg-stone-100 text-stone-950 px-6 sm:px-8 py-3 md:py-4 rounded-none font-medium text-xs sm:text-sm uppercase tracking-widest transition-all hover:bg-gold-400 hover:text-stone-950 flex items-center gap-2 md:gap-3"
            >
              Book Session
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCIDyGZoop0B0WA9KU2jzSEQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 sm:px-8 py-3 md:py-4 rounded-none font-medium text-xs sm:text-sm uppercase tracking-widest text-stone-300 hover:text-white transition-all flex items-center gap-2 md:gap-3"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-stone-600 flex items-center justify-center group-hover:border-gold-400 transition-colors flex-shrink-0">
                <Play className="w-2 h-2 sm:w-3 sm:h-3 fill-current ml-0.5" />
              </div>
              <span className="hidden sm:inline">Listen Samples</span>
              <span className="sm:hidden">Listen</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-12 hidden md:flex items-center gap-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-stone-500">Scroll</span>
        <div className="w-12 h-[1px] bg-stone-700" />
      </motion.div>
    </section>
  );
};
