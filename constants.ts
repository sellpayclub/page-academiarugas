import { FaqItem, Plan, Testimonial } from "./types";

export const MICHELE_IMAGE_URL = "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/MICHELE.jpg";

export const RESULT_IMAGES = [
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/1colher-resultado.webp",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/2colher-resultado.webp",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/3colher-resultado.webp",
  "https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/imagens%20daniel/4colher-resultado.webp"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ana Souza",
    text: "Rosto mais firme em poucas semanas e melhora visível na flacidez.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Carla Dias",
    text: "Sinto a pele mais esticada e redução da aparência das linhas de expressão.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Mariana Costa",
    text: "Minha autoestima está renovada, maquiagem assenta melhor!",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const PLANS: Plan[] = [
  {
    title: "PLANO COMPLETO",
    price: "R$ 29,90",
    features: [
      "🔥 APP COM IA: Análise facial e treino personalizado",
      "6 meses de exercícios faciais progressivos",
      "Dicas exclusivas",
      "Grupo fechado de alunas",
      "Aulas ao vivo com a Michele",
      "Suporte",
      "Atualizações constantes dos exercícios"
    ],
    description: "Por menos do que o valor de um único creme anti-idade. Você paga uma vez… e pode transformar seu rosto pelos próximos meses.",
    cta: "QUERO O COMPLETO",
    link: "https://seguro.vitago-suplements.shop/r/FI42VC9BQ8",
    isPopular: true,
    highlight: "MELHOR CUSTO-BENEFÍCIO"
  },
  {
    title: "PLANO BÁSICO",
    price: "R$ 9,90",
    features: [
      "Rotina completa de 30 dias de exercícios faciais protocolados"
    ],
    description: "Perfeito para quem quer começar agora.",
    cta: "QUERO O BÁSICO",
    link: "https://seguro.vitago-suplements.shop/r/BU4O3HZWG8",
    isPopular: false
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Muitas alunas relatam mudanças nas primeiras semanas. Como qualquer fortalecimento muscular, os resultados são progressivos."
  },
  {
    question: "Preciso usar algum produto junto?",
    answer: "Não. O método atua na musculatura facial. Produtos são opcionais."
  },
  {
    question: "Quanto tempo por dia preciso?",
    answer: "Poucos minutos por dia já são suficientes para estimular os músculos corretamente."
  },
  {
    question: "É para qualquer idade?",
    answer: "Sim! Quanto antes começar, melhor. Mas mulheres em qualquer fase podem se beneficiar."
  },
  {
    question: "Posso cancelar?",
    answer: "Sim. Você tem 90 dias de garantia para testar."
  }
];