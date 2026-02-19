import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

export const Benefits: React.FC = () => {
  const targetAudience = [
    "Está incomodada com rugas e flacidez",
    "Sente que o rosto está 'derretendo'",
    "Não quer fazer botox ou procedimentos invasivos",
    "Já gastou com cosméticos e não viu resultado",
    "Quer uma solução natural e acessível",
    "Quer recuperar firmeza, definição e autoestima"
  ];

  const whatYouReceive = [
    "Plataforma com aulas práticas passo a passo",
    "150 exercícios faciais pra você fazer",
    "Exercícios para acabar com pé de galinha",
    "Exercícios para amenizar rugas",
    "Exercícios para amenizar bigode chinês",
    "Exercícios para amenizar linhas de expressões",
    "Exercícios para amenizar rugas pescoço",
    "Exercícios para amenizar rugas colo",
    "Ebook de receitas naturais anti-rugas",
    "Exercícios com colher"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Who is it for */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              A ACADEMIA ANTI-RUGAS é para você que:
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-purple-100 flex items-start gap-3 hover:shadow-lg transition-shadow"
              >
                <div className="bg-purple-100 p-1.5 rounded-full mt-1">
                  <Check className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-purple-700">
              Se você quer um método natural e inteligente, isso é pra você.
            </p>
          </div>
        </div>

        {/* What You Receive Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-gray-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-12 flex items-center justify-center gap-3 text-center uppercase">
              <Star className="w-8 h-8 text-yellow-500 fill-current" />
              O QUE VOCÊ VAI RECEBER:
            </h3>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-rose-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/pordentro.png"
                    alt="Plataforma do Curso por Dentro"
                    className="relative rounded-2xl shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-[1.02] w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block">
                    <p className="text-sm font-bold text-gray-800">Acesso Imediato</p>
                    <div className="flex text-yellow-500 gap-1 mt-1">
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* List Section */}
              <div className="w-full lg:w-1/2">
                <div className="grid gap-4">
                  {whatYouReceive.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 text-lg text-gray-700 bg-purple-50/50 p-4 rounded-xl border border-purple-100 hover:bg-purple-100/50 transition-colors"
                    >
                      <span className="text-rose-500 flex-shrink-0">✨</span>
                      <span className="font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};