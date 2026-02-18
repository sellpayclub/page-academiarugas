import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Dumbbell, Sparkles, Smile } from 'lucide-react';

export const Solution: React.FC = () => {
  const steps = [
    { icon: <Dumbbell className="w-6 h-6" />, text: "Você fortalece os músculos faciais" },
    { icon: <CheckCircle2 className="w-6 h-6" />, text: "Os músculos sustentam melhor a pele" },
    { icon: <Sparkles className="w-6 h-6" />, text: "A pele fica mais firme e esticada" },
    { icon: <Smile className="w-6 h-6" />, text: "As rugas suavizam naturalmente" },
  ];

  return (
    <section className="py-20 bg-purple-900 text-white overflow-hidden relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-300 font-semibold tracking-wider uppercase mb-2"
          >
            A Solução Definitiva
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Foi por isso que criamos a…<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-purple-200">
              💪 ACADEMIA ANTI-RUGAS
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-purple-100 max-w-2xl mx-auto"
          >
            Um método estruturado de exercícios faciais protocolados, onde a Michele cria uma rotina específica para fortalecer, tonificar e levantar os músculos do seu rosto.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Funciona assim:</h3>
            <ul className="space-y-6">
              {steps.map((step, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                  className="flex items-center gap-4 text-lg"
                >
                  <div className="bg-rose-500 p-2 rounded-full text-white shadow-lg">
                    {step.icon}
                  </div>
                  <span>{step.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-6 text-center md:text-left"
          >
            <div className="bg-purple-800/50 p-6 rounded-xl border-l-4 border-rose-400">
              <p className="text-xl font-medium italic">
                "É literalmente uma academia… só que para o seu rosto."
              </p>
            </div>
            <div className="space-y-2 text-purple-200">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span> Sem agulhas.
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span> Sem procedimentos invasivos.
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span> Sem depender de produtos caros.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};