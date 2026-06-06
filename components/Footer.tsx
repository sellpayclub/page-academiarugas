import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex items-center justify-center gap-2">
           <span className="text-2xl">💆‍♀️</span>
           <span className="text-lg font-bold tracking-wider">YOGA FACIAL!</span>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Seu rosto mais firme começa aqui.
        </p>
        <div className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Yoga Facial!. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};