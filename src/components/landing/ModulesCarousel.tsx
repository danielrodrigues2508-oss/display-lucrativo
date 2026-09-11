import { motion } from 'framer-motion';

const modulesData = [
  {
    id: '01',
    title: 'SEM ISSO ESQUECE',
    tag: 'Mentalidade',
    desc: 'Nosso Manifesto de ouro para focar apenas no que gera riqueza e cortar distrações.',
    image: '/images/modulos/modulo-01-bg.png',
  },
  {
    id: '02',
    title: 'SEUS 3MIL ESTÁ AQUI',
    tag: 'O Coração do Método',
    desc: 'Você não vende "plaquinha". Domine a abordagem estratégica.',
    image: '/images/modulos/modulo-02-bg.png',
  },
  {
    id: '03',
    title: 'DISPLAY LUCRATIVO',
    tag: 'Operação Prática',
    desc: 'Configurar o display no celular em 60 segundos e entregar com postura.',
    image: '/images/modulos/modulo-03-bg.png',
  },
  {
    id: '04',
    title: 'SUAS 10 PRIMEIRAS VENDAS (F.A.C.I.L)',
    tag: 'Tração Rápida',
    desc: 'O método prático F.A.C.I.L e o raio-X dos comércios mais fáceis.',
    image: '/images/modulos/modulo-04-bg.png',
  },
  {
    id: '05',
    title: 'DISPLAY INTERATIVO NUNCA VAI SATURAR',
    tag: 'Blindagem de Mercado',
    desc: 'Os 7 motivos reais para você ficar em paz com o mercado.',
    image: '/images/modulos/modulo-05-bg.png',
  },
  {
    id: '06',
    title: 'COMUNIDADE | DISPLAY LUCRATIVO',
    tag: 'Acompanhamento',
    desc: 'Acesso ao grupo oficial de networking + Mentoria ao vivo mensal.',
    image: '/images/modulos/modulo-06-bg.png',
  },
  {
    id: '07',
    title: 'PRÓXIMO NÍVEL 07',
    tag: 'Ativação & Escala',
    desc: 'O plano de ativação gratuito para colocar R$ 1.000 limpos no bolso.',
    image: '/images/modulos/modulo-07-bg.png',
  },
  {
    id: '08',
    title: 'DESAFIO 1K EM 7 DIAS',
    tag: 'Aceleração de Resultados',
    desc: 'Plano intensivo para atingir os primeiros R$ 1.000 de lucro.',
    image: '/images/modulos/modulo-08-bg.png',
    highlight: true,
  },
];

export function ModulesCarousel() {
  // Duplica os 8 itens para loop contínuo infinito
  const fullCards = [...modulesData, ...modulesData];

  return (
    <div className="w-full overflow-hidden py-6 relative">
      {/* Efeito de fade nas bordas */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

      <motion.div
        className="flex gap-4 sm:gap-6 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: 32,
          repeat: Infinity,
        }}
      >
        {fullCards.map((item, index) => (
          <div
            key={index}
            className={`group relative w-[230px] sm:w-[260px] aspect-[9/16] rounded-2xl overflow-hidden flex-shrink-0 border transition-all duration-300 shadow-xl hover:scale-[1.02] ${
              item.highlight
                ? 'border-2 border-emerald-400 shadow-2xl shadow-emerald-500/30'
                : 'border border-zinc-800/80 hover:border-emerald-400/80 shadow-lg'
            }`}
          >
            {/* Imagem de fundo preenchendo o card */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Container dos textos sobrepostos com gradientes no topo e na base */}
            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Gradiente de fundo preto transparente no topo */}
              <div className="bg-gradient-to-b from-black/90 via-black/70 to-transparent p-4 rounded-t-2xl">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${item.highlight ? 'text-emerald-400' : 'text-zinc-300'}`}>
                    Módulo {item.id}
                  </span>
                  <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border backdrop-blur-md ${
                    item.highlight
                      ? 'bg-emerald-400 text-black border-emerald-400 font-extrabold'
                      : 'bg-zinc-950/80 text-emerald-300 border-emerald-500/40'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug tracking-tight drop-shadow-md">
                  {item.title}
                </h3>
              </div>

              {/* Gradiente de fundo preto transparente na base para contraste da descrição */}
              <div className="bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 rounded-b-2xl pt-8">
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed drop-shadow-sm font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export const ModulesMarquee = ModulesCarousel;
export default ModulesCarousel;
