import React from 'react';
import { motion } from 'framer-motion';
import { RESULT_IMAGES } from '../constants';
import { Camera } from 'lucide-react';

export const Results: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 font-semibold mb-4"
          >
            <Camera className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wide">Resultados Reais</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Transformações que inspiram
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que acontece quando você exercita os músculos do seu rosto com constância e o método certo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {RESULT_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50"
            >
              {/* h-auto e w-full garantem que a imagem se ajuste à largura sem cortar a altura */}
              <img 
                src={img} 
                alt={`Resultado Aluna ${index + 1}`} 
                className="w-full h-auto block"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-medium bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm">
                  Resultado Aluna
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};