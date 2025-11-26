import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { studioData } from '../../data/mockStudio';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-32 bg-stone-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-gold-400 text-xs font-medium tracking-[0.3em] uppercase mb-2 md:mb-4">Testimonials</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif">Artist <span className="italic text-stone-500">Stories</span></h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {studioData.testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pt-8 md:pt-12"
            >
              <Quote className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 text-stone-800" />
              <p className="text-stone-300 mb-6 md:mb-8 leading-loose font-light text-sm md:text-base lg:text-lg">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3 md:gap-4 border-t border-stone-900 pt-4 md:pt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover grayscale"
                />
                <div>
                  <h4 className="font-serif text-lg text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gold-500 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
