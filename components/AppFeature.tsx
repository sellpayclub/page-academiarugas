import React from 'react';
import { motion } from 'framer-motion';
import { ScanFace, Smartphone, BrainCircuit } from 'lucide-react';

export const AppFeature: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="inline-block bg-rose-600/20 border border-rose-500/30 px-4 py-1.5 rounded-full mb-6">
              <span className="text-rose-400 font-bold tracking-wider uppercase text-sm">Novidade Exclusiva</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans leading-tight">
              Aplicativo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">Rejuvenescimento Facial com IA</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Não é apenas um curso. Você terá acesso a uma tecnologia exclusiva que analisa seu rosto e monta seu treino automaticamente.
            </p>
            
            <ul className="space-y-8">
              <li className="flex gap-4">
                <div className="bg-purple-800/50 p-3 rounded-xl h-fit border border-purple-700/50">
                  <ScanFace className="w-8 h-8 text-purple-300" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">Análise e Diagnóstico com IA</h4>
                  <p className="text-gray-400 text-sm mt-2">Nossa inteligência artificial escaneia seu rosto e identifica profundidade de rugas, linhas de expressão e áreas de flacidez.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="bg-rose-900/50 p-3 rounded-xl h-fit border border-rose-700/50">
                  <Smartphone className="w-8 h-8 text-rose-300" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white">Protocolo Personalizado</h4>
                  <p className="text-gray-400 text-sm mt-2">Com base no diagnóstico, o app cria uma rotina de exercícios em vídeo específica para a SUA necessidade.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            <div className="relative">
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-rose-500 blur-2xl opacity-40 rounded-[3rem] transform rotate-3"></div>
                
                <img 
                    src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/mockup%20faceapp.jpg" 
                    alt="Mockup Aplicativo Facial" 
                    className="relative z-10 w-full max-w-sm rounded-[2rem] shadow-2xl border-4 border-gray-800"
                />
                
                <div className="absolute -bottom-10 -left-10 md:-left-20 bg-white text-gray-900 p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-gray-200 hidden md:block">
                   <div className="flex items-center gap-3 mb-2">
                      <BrainCircuit className="w-6 h-6 text-purple-600" />
                      <span className="font-bold text-lg">Tecnologia Única</span>
                   </div>
                   <p className="text-sm text-gray-600">
                     A única academia que adapta os exercícios conforme sua evolução.
                   </p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};