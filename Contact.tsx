import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { studioData } from '../../data/mockStudio';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-stone-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-400 text-xs font-medium tracking-[0.3em] uppercase mb-3 md:mb-4">Contact Us</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8">Start Your <br /><span className="italic text-stone-500">Journey</span></h3>
            <p className="text-stone-400 mb-8 md:mb-12 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-md">
              Ready to bring your vision to life? We're here to help you craft your sound with precision and passion.
            </p>

            <div className="space-y-6 md:space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="text-stone-500 group-hover:text-gold-400 transition-colors mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-stone-300">Phone</h4>
                  <p className="text-stone-400 font-serif text-xl">{studioData.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="text-stone-500 group-hover:text-gold-400 transition-colors mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-stone-300">Email</h4>
                  <p className="text-stone-400 font-serif text-xl">{studioData.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="text-stone-500 group-hover:text-gold-400 transition-colors mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-stone-300">Studio</h4>
                  <p className="text-stone-400 font-serif text-xl">{studioData.contact.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-stone-950 p-10 md:p-14"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-medium text-gold-500 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-stone-800 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-stone-700 font-light"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-medium text-gold-500 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-stone-800 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-stone-700 font-light"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-medium text-gold-500 uppercase tracking-widest">Subject</label>
                <select
                  id="subject"
                  className="w-full bg-transparent border-b border-stone-800 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors font-light"
                >
                  <option className="bg-stone-900">Booking Inquiry</option>
                  <option className="bg-stone-900">Studio Tour</option>
                  <option className="bg-stone-900">Mixing/Mastering Quote</option>
                  <option className="bg-stone-900">General Question</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-medium text-gold-500 uppercase tracking-widest">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-stone-800 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-stone-700 font-light resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-stone-950 hover:bg-gold-400 font-medium py-5 px-8 transition-all flex items-center justify-between group mt-4"
              >
                <span className="uppercase tracking-widest text-sm">Send Message</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
