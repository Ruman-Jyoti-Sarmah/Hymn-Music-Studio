import React from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Hero/Hero';
import { FeaturedProductions } from './components/Featured/FeaturedProductions';
import { Services } from './components/Services/Services';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="w-full min-h-screen bg-stone-950 text-white font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="w-full">
        <Hero />
        <FeaturedProductions />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
