import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>("about:blank");

  useEffect(() => {
    // Monta a URL com os parâmetros de tracking corretos
    const search = window.location.search || '?';
    const href = encodeURIComponent(window.location.href);
    setVideoSrc(`https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/69960871dcfb6904915b507b/v4/embed.html${search}&vl=${href}`);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Background simplificado */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-50 via-white to-white opacity-70"></div>

      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-2"
        >
          <span className="text-2xl">💆‍♀️</span>
          <span className="text-sm font-extrabold tracking-wider text-gray-900 uppercase font-sans">ACADEMIA ANTI-RUGAS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight font-sans tracking-tight"
        >
          <span className="text-rose-600 block mb-3">❌ Suas rugas não são falta de creme…</span>
          <span className="block">👉 São músculos faciais fracos!</span>
        </motion.h1>

        {/* Video Iframe Implementation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-[400px] mx-auto shadow-2xl rounded-2xl overflow-hidden border-4 border-white bg-black mt-8"
        >
          <div id="ifr_69960871dcfb6904915b507b_wrapper" style={{ margin: '0 auto', width: '100%', maxWidth: '400px' }}>
            <div style={{ position: 'relative', padding: '100% 0 0 0' }} id="ifr_69960871dcfb6904915b507b_aspect">
              <iframe
                frameBorder="0"
                allowFullScreen
                src={videoSrc}
                id="ifr_69960871dcfb6904915b507b"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                referrerPolicy="origin"
              ></iframe>
            </div>
          </div>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4"
        >
          <a href="#pricing" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl hover:shadow-green-500/20 transition-all transform hover:-translate-y-1">
            QUERO MEU ROSTO MAIS FIRME
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};