import React from 'react';
import { motion } from 'framer-motion';
import { studioData } from '../../data/mockStudio';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-32 bg-stone-950 relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-900/20 -skew-x-12 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-400 text-xs font-medium tracking-[0.3em] uppercase mb-3 md:mb-4">Our Expertise</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-stone-100">
              Premium <span className="italic text-stone-500">Services</span>
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md text-stone-400 font-light leading-relaxed text-sm md:text-base"
          >
            We provide a full spectrum of audio production services, tailored to elevate your sound to professional standards.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-16">
          {studioData.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-t border-stone-800 pt-8 hover:border-gold-500/50 transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-stone-600 font-serif text-2xl italic group-hover:text-gold-500 transition-colors">0{index + 1}</span>
                <service.icon className="w-6 h-6 text-stone-500 group-hover:text-gold-400 transition-colors" />
              </div>
              
              <h4 className="text-2xl font-serif text-stone-200 mb-4 group-hover:text-white transition-colors">{service.title}</h4>
              <p className="text-stone-400 mb-8 leading-relaxed font-light text-sm">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-gold-500 text-sm tracking-wider">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
