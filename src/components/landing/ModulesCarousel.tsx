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
                ? 'border-emerald-400/90 shadow-emerald-500/20'
                : 'border-zinc-800/80 hover:border-emerald-500/50'
            }`}
          >
            {/* Imagem de Fundo Oficial */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Camada de Gradiente Escuro para Garantir Contraste Perfeito do Texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30" />

            {/* Conteúdo com Badges, Título e Descrição */}
            <div className="relative z-10 h-full p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider ${item.highlight ? 'text-emerald-400' : 'text-zinc-300'}`}>
                    Módulo {item.id}
                  </span>
                  <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border backdrop-blur-md ${
                    item.highlight
                      ? 'bg-emerald-400 text-black border-emerald-400'
                      : 'bg-zinc-950/80 text-emerald-300 border-emerald-500/40'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight drop-shadow-md">
                  {item.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-white/10">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed drop-shadow-sm">
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
