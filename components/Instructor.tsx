import React from 'react';
import { motion } from 'framer-motion';
import { MICHELE_IMAGE_URL } from '../constants';
import { Instagram } from 'lucide-react';

export const Instructor: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-100 rounded-[2rem] transform rotate-6 transition-transform group-hover:rotate-3"></div>
              <div className="absolute inset-0 bg-rose-100 rounded-[2rem] transform -rotate-6 transition-transform group-hover:-rotate-3"></div>
              <img 
                src={MICHELE_IMAGE_URL} 
                alt="Michele Negrini" 
                className="relative z-10 w-full max-w-sm h-auto object-cover rounded-[2rem] shadow-xl"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
            <div className="inline-block bg-purple-50 px-4 py-1 rounded-full border border-purple-100 mb-4">
                <span className="text-purple-700 font-bold tracking-wide text-xs uppercase">Sua Professora</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-sans tracking-tight">
              Michele Negrini
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                Especialista em beleza natural e rejuvenescimento facial. Michele desenvolveu um método único que combina <strong>fisiologia muscular</strong> com estética, ajudando milhares de mulheres a recuperarem a autoestima sem intervenções cirúrgicas.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-500 italic text-gray-600">
                "Meu objetivo é te mostrar que a beleza natural é a mais poderosa que existe. Seu rosto tem um potencial incrível que só precisa do estímulo certo."
                </div>
            </div>
            
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
               <a 
                 href="https://www.instagram.com/michelenegrini" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-gray-600 font-semibold hover:text-purple-600 transition-colors"
               >
                  <Instagram className="w-6 h-6" />
                  <span>@michelenegrini</span>
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};