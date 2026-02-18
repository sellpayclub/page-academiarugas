import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote, Video } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Carrossel Timer
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    // Vturb Script Injection for Testimonial Video
    const scriptId = 'vturb-testimonial-script';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/6995c6d1958dc46586de010a/v4/player.js";
      s.async = true;
      document.head.appendChild(s);
    }

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
        <div className="relative h-80 sm:h-64 mt-16 mb-8">
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

        <div className="flex justify-center gap-2 mb-16">
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

        {/* Video Testimonial */}
        <div className="border-t border-purple-100 pt-16">
          <div className="text-center mb-8">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-semibold mb-4 text-sm uppercase tracking-wide">
                <Video className="w-4 h-4" />
                <span>Assista</span>
             </div>
             <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                Depoimentos Reais em Vídeo
             </h3>
          </div>

          {/* Wrapper simples sem motion para evitar conflitos de carregamento do player */}
          <div className="w-full max-w-[400px] mx-auto shadow-2xl rounded-2xl overflow-hidden border-4 border-white bg-black">
             <div dangerouslySetInnerHTML={{ __html: `
               <vturb-smartplayer id="vid-6995c6d1958dc46586de010a" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>
             ` }} />
          </div>
        </div>
        
      </div>
    </section>
  );
};