import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, AlertTriangle } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    "Cremes anti-idade",
    "Séruns caros",
    "Tratamentos estéticos",
    "Máscaras milagrosas",
    "Aparelhos faciais"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Você já comprou:
            </h2>
            <ul className="space-y-3">
              {problems.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-gray-600">
                  <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="p-6 bg-red-50 border border-red-100 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                E mesmo assim...
              </h3>
              <p className="text-gray-700">
                As rugas continuam ali. A flacidez aumenta. O rosto parece mais “caído” a cada ano.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-rose-500 rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-xl relative border border-gray-100">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Sabe por quê?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Porque te ensinaram a tratar a pele, quando o verdadeiro problema está embaixo dela.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">👉</span>
                  <div>
                    <h4 className="font-bold text-gray-900">O problema NÃO é superficial.</h4>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">👉</span>
                  <div>
                    <h4 className="font-bold text-gray-900">O problema está nos MÚSCULOS FACIAIS enfraquecidos.</h4>
                    <p className="text-gray-600 mt-1">
                      Assim como o corpo fica flácido quando você não treina, o rosto também perde sustentação quando os músculos não são estimulados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center font-bold text-purple-700 bg-purple-50 py-3 rounded-lg">
                Nenhum creme consegue fortalecer músculo. <br/>
                <span className="font-normal text-gray-600">É por isso que você não vê resultado real.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};