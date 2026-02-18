import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { Instructor } from './components/Instructor';
import { Testimonials } from './components/Testimonials';
import { Results } from './components/Results';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Results />
      <Testimonials />
      <Instructor />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;