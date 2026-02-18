import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
            Mulheres que começaram a aplicar os exercícios relatam:
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 flex items-center gap-3">
                    <span>✔️</span> <span className="font-medium text-gray-800">Rosto mais firme em poucas semanas</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 flex items-center gap-3">
                    <span>✔️</span> <span className="font-medium text-gray-800">Melhora visível na flacidez</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 flex items-center gap-3">
                    <span>✔️</span> <span className="font-medium text-gray-800">Sensação de pele mais esticada</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 flex items-center gap-3">
                    <span>✔️</span> <span className="font-medium text-gray-800">Redução da aparência das linhas de expressão</span>
                </div>
            </div>
        </div>

        {/* Carousel */}
        <div className="relative h-80 sm:h-64 mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full border border-rose-100">
                <Quote className="w-10 h-10 text-purple-300 mx-auto mb-4" />
                <p className="text-xl text-gray-700 italic mb-6">"{TESTIMONIALS[currentIndex].text}"</p>
                
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src={TESTIMONIALS[currentIndex].image} 
                    alt={TESTIMONIALS[currentIndex].name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900">{TESTIMONIALS[currentIndex].name}</h4>
                    <span className="text-sm text-purple-600 font-medium">Aluna Academia Anti-Rugas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-purple-600' : 'bg-purple-200'
              }`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};