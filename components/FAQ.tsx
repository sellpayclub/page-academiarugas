import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
                <HelpCircle className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-sans mb-4">Dúvidas Frequentes</h2>
            <p className="text-gray-600">
                Tudo o que você precisa saber antes de começar.
            </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:border-purple-200 transition-colors">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white"
              >
                <span className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</span>
                <div className={`p-1 rounded-full ${openIndex === index ? 'bg-purple-100' : 'bg-gray-100'} transition-colors`}>
                    <ChevronDown 
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180 text-purple-600' : ''
                    }`} 
                    />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-8">
           <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 inline-block">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ainda com dúvidas?
                </h3>
                <p className="text-gray-600 mb-6">
                    Comece hoje e comprove os resultados.
                </p>
                <a href="#pricing" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 w-full md:w-auto">
                    QUERO COMEÇAR AGORA
                </a>
           </div>
        </div>

      </div>
    </section>
  );
};