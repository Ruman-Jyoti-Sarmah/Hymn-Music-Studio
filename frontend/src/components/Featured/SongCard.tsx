import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Song } from '../../data/mockYouTubeSongs';

interface SongCardProps {
  song: Song;
  index: number;
}

export const SongCard: React.FC<SongCardProps> = ({ song, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative aspect-square overflow-hidden rounded-lg bg-stone-900"
    >
      <img
        src={song.thumbnail}
        alt={song.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <h3 className="text-xl font-serif font-bold text-white mb-1">{song.title}</h3>
          <p className="text-sm text-stone-300 mb-4">{song.artist}</p>
          
          <a
            href={song.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-400 font-bold text-sm uppercase tracking-widest hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300"
          >
            <Play className="w-4 h-4 fill-current" />
            Listen Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};
