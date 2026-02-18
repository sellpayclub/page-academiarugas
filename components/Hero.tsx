import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  useEffect(() => {
    // Verifica se o script já existe para evitar duplicação
    const scriptId = 'vturb-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/6995c6a0f67feccb22a2b122/v4/player.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-purple-50 via-white to-rose-50 overflow-hidden flex flex-col items-center justify-center pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-100 shadow-sm mb-4"
        >
          <span className="text-xl">💆‍♀️</span>
          <span className="text-sm font-semibold tracking-wide text-purple-900 uppercase">ACADEMIA ANTI-RUGAS</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-serif"
        >
          <span className="text-red-500 block mb-2">❌ Suas rugas não são falta de creme…</span>
          👉 São músculos faciais fracos!
        </motion.h1>

        {/* Vturb Video */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-[400px] mx-auto shadow-2xl rounded-lg overflow-hidden border-4 border-white bg-black"
        >
           {/* 
              Usamos dangerouslySetInnerHTML para renderizar o elemento customizado.
              Isso impede que o React anexe seus "Fiber nodes" ao elemento, evitando o erro "Converting circular structure to JSON"
              que ocorre quando scripts de terceiros tentam ler todas as propriedades do elemento DOM.
           */}
           <div dangerouslySetInnerHTML={{ __html: `
             <vturb-smartplayer id="vid-6995c6a0f67feccb22a2b122" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>
           ` }} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Participe da primeira Academia anti-rugas do Brasil, e descubra o método simples de exercícios faciais protocolados que fortalece, levanta e redefine seu rosto naturalmente — <span className="font-bold text-purple-700">sem procedimentos caros, sem agulhas e sem depender de produtos milagrosos.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
           <a href="#pricing" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
             QUERO MEU ROSTO MAIS FIRME
             <ArrowRight className="w-5 h-5" />
           </a>
        </motion.div>
      </div>
    </section>
  );
};