import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { ChevronDown, ShieldCheck } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Guarantee */}
        <div className="mb-20 bg-purple-50 border border-purple-100 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <ShieldCheck className="w-64 h-64 text-purple-900" />
          </div>
          <div className="relative z-10">
            <ShieldCheck className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">GARANTIA INCONDICIONAL DE 90 DIAS</h3>
            <p className="text-gray-700 mb-4">
              Teste a ACADEMIA ANTI-RUGAS por 90 dias. Se você não gostar, se achar que não é pra você, ou se não sentir que valeu a pena… <span className="font-bold">Basta cancelar.</span>
            </p>
            <p className="text-sm font-semibold text-purple-800 uppercase tracking-wide">
              Sem burocracia. Sem risco. O risco é todo nosso.
            </p>
          </div>
        </div>

        {/* FAQ List */}
        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-10">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50"
                  >
                    <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
           <h3 className="text-2xl font-bold text-gray-900">
             🔥 Se o corpo responde quando você treina… <br/>
             <span className="text-purple-600">Por que o seu rosto seria diferente?</span>
           </h3>
           <a href="#pricing" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-green-500/30 transition-all transform hover:scale-105">
             COMEÇAR AGORA
           </a>
        </div>

      </div>
    </section>
  );
};