import React from 'react';
import { motion } from 'framer-motion';
import { MICHELE_IMAGE_URL } from '../constants';
import { Instagram } from 'lucide-react';

export const Instructor: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-200 rounded-full transform translate-x-4 translate-y-4"></div>
              <img 
                src={MICHELE_IMAGE_URL} 
                alt="Michele Negrini" 
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-2xl"
              />
              <div className="absolute bottom-4 right-4 z-20 bg-white p-3 rounded-full shadow-lg">
                <span className="text-3xl">👩‍🏫</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-2 block">Sua Professora</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Michele Negrini
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Especialista em beleza natural e rejuvenescimento facial. Michele desenvolveu um método único que combina fisiologia muscular com estética, ajudando milhares de mulheres a recuperarem a autoestima sem intervenções cirúrgicas.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              "Meu objetivo é te mostrar que a beleza natural é a mais poderosa que existe. Seu rosto tem um potencial incrível que só precisa do estímulo certo."
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-4">
               <div className="flex items-center gap-2 text-purple-700 font-semibold bg-purple-50 px-4 py-2 rounded-full">
                  <Instagram className="w-5 h-5" />
                  <span>@michelenegrini</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};