import { motion } from 'framer-motion';

const modulesData = [
  {
    id: '00',
    tag: 'MÓDULO 00',
    badge: 'Display Grátis',
    title: 'SEU DISPLAY DEMONSTRAÇÃO',
    desc: 'Explicando como funciona para receber seu display de demonstração.',
    image: '/images/modulos/modulo-00.jpg?v=clean',
  },
  {
    id: '01',
    tag: 'MÓDULO 01',
    badge: 'Mentalidade',
    title: 'SEM ISSO ESQUECE',
    desc: 'Nosso Manifesto de ouro para focar apenas no que gera riqueza e cortar distrações.',
    image: '/images/modulos/modulo-01.jpg?v=clean',
  },
  {
    id: '02',
    tag: 'MÓDULO 02',
    badge: 'O Coração do Método',
    title: 'SEUS 3 MIL ESTÁ AQUI',
    desc: 'Você não vende "plaquinha". Domine a abordagem que fecha no balcão e saiba quanto cobrar.',
    image: '/images/modulos/modulo-02.jpg?v=clean',
  },
  {
    id: '03',
    tag: 'MÓDULO 03',
    badge: 'Operação Prática',
    title: 'DISPLAY LUCRATIVO',
    desc: 'Configurar o display no celular em 60 segundos e entregar com postura profissional.',
    image: '/images/modulos/modulo-03.jpg?v=clean',
  },
  {
    id: '04',
    tag: 'MÓDULO 04',
    badge: 'Tração Rápida',
    title: 'SUAS 10 PRIMEIRAS VENDAS',
    desc: 'O método prático F.A.C.I.L e o raio-X dos comércios mais fáceis de fechar.',
    image: '/images/modulos/modulo-04.jpg?v=clean',
  },
  {
    id: '05',
    tag: 'MÓDULO 05',
    badge: 'Blindagem de Mercado',
    title: 'DISPLAY NUNCA VAI SATURAR',
    desc: 'Os motivos reais para você entender a demanda infinita do comércio local.',
    image: '/images/modulos/modulo-05.jpg?v=clean',
  },
  {
    id: '06',
    tag: 'MÓDULO 06',
    badge: 'Acompanhamento',
    title: 'COMUNIDADE | NETWORKING',
    desc: 'Grupo oficial de membros + Mentoria ao vivo mensal para acelerar seus resultados.',
    image: '/images/modulos/modulo-06.jpg?v=clean',
  },
  {
    id: '08',
    tag: 'PRÓXIMO NÍVEL',
    badge: 'Ativação & Escala',
    title: 'DESAFIO 1K EM 7 DIAS',
    desc: 'O plano prático para colocar os primeiros R$ 1.000 limpos no bolso na primeira semana.',
    image: '/images/modulos/modulo-08.jpg?v=clean',
    highlight: true,
  },
];

export function ModulesCarousel() {
  // Duplica os 8 itens para loop contínuo infinito
  const fullCards = [...modulesData, ...modulesData];

  return (
    <div className="w-full overflow-hidden py-6 relative">
      {/* Efeito de fade nas bordas */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-30 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-30 pointer-events-none" />

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
            className={`w-[230px] sm:w-[260px] h-[410px] sm:h-[450px] relative rounded-2xl overflow-hidden flex-shrink-0 border transition-all duration-300 select-none shadow-xl hover:scale-[1.02] ${
              item.highlight
                ? 'border-emerald-400 shadow-[0_0_25px_rgba(34,197,94,0.25)]'
                : 'border-zinc-800/80 hover:border-emerald-500/50'
            }`}
          >
            {/* Imagem de fundo */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
              loading="lazy"
            />

            {/* Efeito de legibilidade (degradês escuros no topo e rodapé) */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/95 via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/95 via-black/85 to-transparent z-10 pointer-events-none" />

            {/* Conteúdo em camadas */}
            <div className="relative z-20 flex flex-col justify-between h-full p-4 sm:p-5">
              {/* Topo: tag, badge e título */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shrink-0 ${item.highlight ? 'text-emerald-400' : 'text-zinc-300'}`}>
                    {item.tag}
                  </span>
                  <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border backdrop-blur-md whitespace-nowrap shrink-0 ${
                    item.highlight
                      ? 'bg-emerald-400 text-black border-emerald-400 font-extrabold'
                      : 'bg-zinc-950/80 text-emerald-300 border-emerald-500/40'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Rodapé: descrição curta */}
              <div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-snug drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] font-medium">
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
