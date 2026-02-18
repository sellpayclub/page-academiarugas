import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-purple-50 border border-purple-100 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mr-8 -mt-8 text-purple-100 opacity-50">
             <ShieldCheck className="w-48 h-48" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white p-3 rounded-full shadow-sm mb-6">
                <ShieldCheck className="w-10 h-10 text-purple-600" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-sans">
                GARANTIA INCONDICIONAL DE 90 DIAS
            </h3>
            
            <p className="text-lg text-gray-700 mb-6 max-w-2xl leading-relaxed">
              Teste a <span className="font-bold text-purple-700">ACADEMIA ANTI-RUGAS</span> por 90 dias. 
              Se você não gostar, se achar que não é pra você, ou se não sentir que valeu a pena… 
              <br className="hidden md:block" /> <span className="font-bold">Basta cancelar.</span>
            </p>
            
            <div className="inline-block bg-white px-6 py-2 rounded-full border border-purple-200">
                <p className="text-sm font-bold text-purple-800 uppercase tracking-wide">
                Sem burocracia • Sem risco • Reembolso total
                </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};