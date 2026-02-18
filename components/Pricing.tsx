import React from 'react';
import { motion } from 'framer-motion';
import { PLANS } from '../constants';
import { Check, Users, Video, RefreshCw, Star } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Community/Bonus Section (Highlight for Complete Plan) */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-16 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8">
                Além disso, no plano completo você participa de:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="bg-rose-500 p-4 rounded-full mb-4 shadow-lg shadow-rose-500/30">
                        <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">Grupo exclusivo de alunas</h4>
                    <p className="text-purple-200 text-sm">Você não estará sozinha.</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
                     <div className="bg-rose-500 p-4 rounded-full mb-4 shadow-lg shadow-rose-500/30">
                        <Video className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">Aulas ao vivo com a Michele</h4>
                    <p className="text-purple-200 text-sm">Tire suas dúvidas.</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10">
                     <div className="bg-rose-500 p-4 rounded-full mb-4 shadow-lg shadow-rose-500/30">
                        <RefreshCw className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-xl mb-2">Atualizações constantes</h4>
                    <p className="text-purple-200 text-sm">Dos protocolos de exercícios.</p>
                </div>
            </div>
            
            <p className="text-lg font-medium text-purple-100 italic">
                "Existe uma comunidade inteira evoluindo junto com você."
            </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative bg-white rounded-3xl overflow-hidden border-4 ${plan.isPopular ? 'border-rose-400 shadow-[0_0_40px_rgba(251,113,133,0.4)] scale-105 z-10' : 'border-gray-200 shadow-xl'} w-full flex flex-col h-full`}
            >
              {plan.highlight && (
                <div className="bg-rose-500 text-white text-center py-2 font-bold text-sm tracking-widest uppercase">
                  {plan.highlight}
                </div>
              )}
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-purple-700">{plan.price}</span>
                    </div>
                    {plan.description && (
                         <p className="text-sm text-gray-500 italic mt-2 min-h-[3rem]">{plan.description}</p>
                    )}
                </div>

                <div className="mb-8 flex-grow">
                     <p className="font-bold text-gray-900 mb-4 text-center">Você recebe:</p>
                     <ul className="space-y-3">
                        {plan.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-gray-700 text-sm">
                            <div className="mt-0.5 bg-green-100 p-0.5 rounded-full flex-shrink-0">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="leading-tight">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg uppercase ${plan.isPopular ? 'bg-green-500 hover:bg-green-600 text-white hover:shadow-green-500/30' : 'bg-purple-100 hover:bg-purple-200 text-purple-900'}`}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};