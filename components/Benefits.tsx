import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

export const Benefits: React.FC = () => {
  const targetAudience = [
    "Está incomodada com rugas e flacidez",
    "Sente que o rosto está 'derretendo'",
    "Não quer fazer botox ou procedimentos invasivos",
    "Já gastou com cosméticos e não viu resultado",
    "Quer uma solução natural e acessível",
    "Quer recuperar firmeza, definição e autoestima"
  ];

  const imagineResults = [
    "Olhar no espelho e ver um rosto mais firme",
    "Linha do maxilar mais definida",
    "Bochechas mais levantadas",
    "Rugas suavizadas",
    "Maquiagem assentando melhor",
    "Autoestima renovada"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Who is it for */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              A ACADEMIA ANTI-RUGAS é para você que:
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-purple-100 flex items-start gap-3 hover:shadow-lg transition-shadow"
              >
                <div className="bg-purple-100 p-1.5 rounded-full mt-1">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-purple-700">
              Se você quer um método natural e inteligente, isso é pra você.
            </p>
          </div>
        </div>

        {/* Imagine Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-gray-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Star className="w-8 h-8 text-yellow-500 fill-current" />
                Imagine:
              </h3>
              <ul className="space-y-4">
                {imagineResults.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-lg text-gray-700"
                  >
                    <span className="text-rose-500">✨</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 text-center">
               <p className="text-xl text-gray-800 leading-relaxed mb-4">
                 Você não vai apenas melhorar sua aparência…
               </p>
               <p className="text-2xl font-bold text-purple-800 mb-6 font-serif">
                 Você vai recuperar a sensação de juventude, segurança e confiança.
               </p>
               <p className="text-gray-600">
                 E o melhor: sabendo que conquistou isso naturalmente.
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};