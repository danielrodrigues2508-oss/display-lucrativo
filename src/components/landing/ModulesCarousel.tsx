import { motion } from 'framer-motion';

const modulesList = [
  {
    tag: 'MÓDULO 00',
    badge: 'Display Grátis',
    title: 'SEU DISPLAY DEMONSTRAÇÃO',
    desc: 'Explicando como funciona para receber seu display de demonstração.'
  },
  {
    tag: 'MÓDULO 01',
    badge: 'Mentalidade',
    title: 'SEM ISSO ESQUECE',
    desc: 'Nosso Manifesto de ouro para focar apenas no que gera riqueza e cortar distrações.'
  },
  {
    tag: 'MÓDULO 02',
    badge: 'O Coração do Método',
    title: 'SEUS 3MIL ESTÁ AQUI',
    desc: 'Você não vende "plaquinha". Domine a abordagem que fecha no balcão.'
  },
  {
    tag: 'MÓDULO 03',
    badge: 'Operação Prática',
    title: 'DISPLAY LUCRATIVO',
    desc: 'Configurar o display no celular em 60 segundos e entregar com postura profissional.'
  },
  {
    tag: 'MÓDULO 04',
    badge: 'Tração Rápida',
    title: 'SUAS 10 PRIMEIRAS VENDAS (F.A.C.I.L)',
    desc: 'O método prático F.A.C.I.L e o raio-X dos comércios mais fáceis de fechar.'
  },
  {
    tag: 'MÓDULO 05',
    badge: 'Blindagem de Mercado',
    title: 'DISPLAY INTERATIVO NUNCA VAI SATURAR',
    desc: 'Os 7 motivos reais para você ficar em paz com o mercado local.'
  },
  {
    tag: 'MÓDULO 06',
    badge: 'Acompanhamento',
    title: 'COMUNIDADE | DISPLAY LUCRATIVO',
    desc: 'Acesso ao grupo oficial de networking + Mentoria ao vivo mensal direto comigo para destravar gargalos.'
  },
  {
    tag: 'PRÓXIMO NÍVEL 08',
    badge: 'Ativação & Escala',
    title: 'DESAFIO 1K EM 7 DIAS & DESAFIOS PAGOS',
    desc: 'O plano de ativação gratuito para colocar R$ 1.000 limpos no bolso logo na primeira semana, e acesso aos desafios avançados de escala.',
    highlight: true
  }
];

export function ModulesCarousel() {
  // Duplica os 8 itens para loop contínuo infinito
  const fullCards = [...modulesList, ...modulesList];

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
            className={`w-[220px] sm:w-[250px] h-[390px] sm:h-[420px] rounded-2xl p-5 flex flex-col justify-between flex-shrink-0 bg-zinc-900/90 border transition-colors ${
              item.highlight
                ? 'border-emerald-400/80 bg-gradient-to-b from-zinc-900 to-emerald-950/30'
                : 'border-zinc-800/80 hover:border-zinc-700'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[11px] font-bold uppercase tracking-wider ${item.highlight ? 'text-emerald-400' : 'text-zinc-400'}`}>
                  {item.tag}
                </span>
                <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border ${
                  item.highlight
                    ? 'bg-emerald-400 text-black border-emerald-400'
                    : 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30'
                }`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight">
                {item.title}
              </h3>
            </div>

            <div className="pt-4 border-t border-zinc-800/60">
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export const ModulesMarquee = ModulesCarousel;
export default ModulesCarousel;
