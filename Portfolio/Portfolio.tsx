import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowUpRight } from 'lucide-react';
import { studioData } from '../../data/mockStudio';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-32 bg-stone-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-400 text-xs font-medium tracking-[0.3em] uppercase mb-3 md:mb-4">Selected Works</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">Featured <span className="italic text-stone-500">Productions</span></h3>
          </motion.div>
          
          <motion.a 
            href="#" 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-300 hover:text-gold-400 transition-colors text-xs sm:text-sm uppercase tracking-widest flex items-center gap-1 md:gap-2 group"
          >
            Full Archive
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          {studioData.portfolio.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative cursor-pointer ${
                index === 0 ? 'md:col-span-8 aspect-[16/9]' : 
                index === 1 ? 'md:col-span-4 aspect-[4/5]' : 
                'md:col-span-12 aspect-[21/9]'
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/0 transition-colors duration-500" />
              </div>
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-stone-950/60 backdrop-blur-[2px]">
                <div className="flex justify-end">
                  <PlayCircle className="w-16 h-16 text-white/90 font-light hover:text-gold-400 transition-colors" strokeWidth={1} />
                </div>
                
                <div>
                  <span className="text-gold-400 text-xs font-medium uppercase tracking-widest mb-3 block">
                    {item.category}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-serif italic mb-2">{item.title}</h4>
                  <p className="text-stone-300 font-light text-lg">{item.artist}</p>
                  <div className="w-12 h-[1px] bg-stone-500 mt-6 mb-4" />
                  <p className="text-xs text-stone-400 uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
