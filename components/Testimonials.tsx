import React from 'react';
import { Video } from 'lucide-react';

export const Testimonials: React.FC = () => {
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