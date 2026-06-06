import React, { useEffect, useState } from 'react';
import { Video } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>("about:blank");

  useEffect(() => {
    // Monta a URL com os parâmetros de tracking corretos
    const search = window.location.search || '?';
    const href = encodeURIComponent(window.location.href);
    setVideoSrc(`https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/6995c6d1958dc46586de010a/v4/embed.html${search}&vl=${href}`);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 font-bold mb-4 text-sm uppercase tracking-wide shadow-sm">
                <Video className="w-4 h-4" />
                <span>Depoimentos</span>
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-sans">
                O que dizem nossas alunas
             </h2>
             <p className="mt-4 text-gray-600 text-lg">
                 Resultados reais de quem já transformou o rosto com o método.
             </p>
        </div>

        {/* Video Container - Iframe Implementation */}
        <div className="relative w-full max-w-[500px] mx-auto">
            <div className="shadow-2xl rounded-2xl overflow-hidden border-4 border-white bg-black">
                <div id="ifr_6995c6d1958dc46586de010a_wrapper" style={{ margin: '0 auto', width: '100%', maxWidth: '400px' }}>
                    <div style={{ position: 'relative', padding: '100% 0 0 0' }} id="ifr_6995c6d1958dc46586de010a_aspect">
                        <iframe 
                            frameBorder="0" 
                            allowFullScreen 
                            src={videoSrc}
                            id="ifr_6995c6d1958dc46586de010a" 
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                            referrerPolicy="origin"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="font-bold text-gray-900 text-lg">Rosto</p>
                <p className="text-sm text-gray-500">Mais firme</p>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="font-bold text-gray-900 text-lg">Papada</p>
                <p className="text-sm text-gray-500">Reduzida</p>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="font-bold text-gray-900 text-lg">Olhar</p>
                <p className="text-sm text-gray-500">Levantado</p>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="font-bold text-gray-900 text-lg">Pele</p>
                <p className="text-sm text-gray-500">Radiante</p>
             </div>
        </div>
      </div>
    </section>
  );
};