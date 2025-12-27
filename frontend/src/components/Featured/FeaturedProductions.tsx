import React from 'react';
import { motion } from 'framer-motion';
import { SongCard } from './SongCard';
import { featuredSongs } from '../../data/mockYouTubeSongs';

export const FeaturedProductions: React.FC = () => {
  return (
    <section id="featured" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-stone-800/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-6">
            Featured <span className="text-gold-400 italic">Productions</span>
          </h2>
          <p className="text-stone-400 max-w-xl text-sm sm:text-base md:text-lg font-light leading-relaxed">
            A selection of our recent work. Listen to the quality and depth we bring to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {featuredSongs.map((song, index) => (
            <SongCard key={song.id} song={song} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a 
                href="https://www.youtube.com/channel/UCIDyGZoop0B0WA9KU2jzSEQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-stone-800 hover:border-gold-400 text-stone-400 hover:text-gold-400 px-8 py-3 rounded-full transition-all duration-300 text-sm uppercase tracking-widest"
            >
                View All Productions
            </a>
        </div>
      </div>
    </section>
  );
};
