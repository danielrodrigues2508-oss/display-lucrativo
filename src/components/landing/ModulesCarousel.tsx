const modules = [
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
    desc: 'Acesso ao grupo oficial de networking + Mentoria ao vivo mensal direto comigo.'
  },
  {
    tag: 'PRÓXIMO NÍVEL 08',
    badge: 'Ativação & Escala',
    title: 'DESAFIO 1K EM 7 DIAS & DESAFIOS PAGOS',
    desc: 'Plano de ativação para colocar R$ 1.000 limpos no bolso logo na primeira semana.',
    highlight: true
  }
];

export function ModulesMarquee() {
  // Duplicamos a lista para criar o loop perfeito sem falhas visuais
  const displayList = [...modules, ...modules];

  return (
    <div className="w-full overflow-hidden py-8 relative">
      {/* Sombras de fade suave nas bordas laterais */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex gap-4 sm:gap-6 w-max animate-modules-scroll hover:[animation-play-state:paused]">
        {displayList.map((item, idx) => (
          <div
            key={idx}
            className={`w-[220px] sm:w-[260px] h-[380px] sm:h-[440px] rounded-2xl p-5 flex flex-col justify-between flex-shrink-0 transition-transform hover:scale-[1.02] ${
              item.highlight
                ? 'bg-gradient-to-b from-zinc-900 to-emerald-950/40 border-2 border-emerald-400/80 shadow-lg shadow-emerald-500/10'
                : 'bg-zinc-900/90 border border-zinc-800/80 hover:border-emerald-500/40'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider ${item.highlight ? 'text-emerald-400' : 'text-zinc-400'}`}>
                  {item.tag}
                </span>
                <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full border ${
                  item.highlight
                    ? 'bg-emerald-400 text-black border-emerald-400'
                    : 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30'
                }`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug tracking-tight">
                {item.title}
              </h3>
            </div>

            <div className="pt-4 border-t border-zinc-800/60">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const ModulesCarousel = ModulesMarquee;
export default ModulesMarquee;
