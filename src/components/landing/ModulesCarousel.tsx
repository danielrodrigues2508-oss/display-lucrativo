import { SafeImage } from "./SafeImage";

export interface ModuleItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  image: string;
}

export const MODULES: ModuleItem[] = [
  {
    id: "mod-01",
    num: "Módulo 01",
    title: "Preparando a Operação",
    desc: "Mentalidade, precificação e montagem do material de campo.",
    image: "/modulos/modulo-01-preparando-operacao.jpg",
  },
  {
    id: "mod-02",
    num: "Módulo 02",
    title: "O Display Interativo",
    desc: "Como gravar o chip NFC e link do Google em 10 segundos no celular.",
    image: "/modulos/modulo-02-o-display-perfeito.jpg",
  },
  {
    id: "mod-03",
    num: "Módulo 03",
    title: "A Rota das Primeiras Vendas",
    desc: "Script validado de balcão e abordagem direta com o comerciante.",
    image: "/modulos/modulo-03-rota-primeira-venda.jpg",
  },
  {
    id: "mod-04",
    num: "Módulo 04",
    title: "Do Bairro à Escala",
    desc: "Como fechar pacotes de múltiplos displays e gerar indicações.",
    image: "/modulos/modulo-04-escala-balcao.jpg",
  },
  {
    id: "mod-05",
    num: "Módulo 05",
    title: "Acesso Direto à Fábrica",
    desc: "Fornecedor exclusivo a preço de custo (R$ 23) sob demanda.",
    image: "/modulos/modulo-05-fornecedor-fabrica.jpg",
  },
  {
    id: "mod-06",
    num: "Módulo 06",
    title: "Comunidade & Networking",
    desc: "Troca de estratégias diárias com operadores e mentorias mensais.",
    image: "/modulos/modulo-06-comunidade.jpg",
  },
];

export function ModulesCarousel() {
  // Duplicar a lista 3x para loop contínuo infinito perfeito sem saltos
  const loopItems = [...MODULES, ...MODULES, ...MODULES];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Sombras suaves nas bordas laterais para fade out elegante */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--background)] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--background)] to-transparent sm:w-24" />

      <div className="modules-track flex gap-5 py-4">
        {loopItems.map((mod, idx) => (
          <div
            key={`${mod.id}-${idx}`}
            className="group relative flex w-[230px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8),0_0_25px_-5px_var(--lime)] sm:w-[270px]"
          >
            {/* Imagem / Poster do Módulo */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-950">
              <SafeImage
                src={mod.image}
                alt={mod.title}
                fallbackLabel={mod.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Tag com o número do módulo no topo */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex rounded-full border border-primary/40 bg-zinc-950/85 px-3 py-1 text-[11px] font-bold tracking-wider text-primary uppercase shadow-md backdrop-blur-md">
                  {mod.num}
                </span>
              </div>

              {/* Gradiente escuro na base do poster para contraste com os textos */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90" />

              {/* Informações sobrepostas na parte inferior do poster */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h4 className="font-display text-base font-extrabold text-white group-hover:text-primary transition-colors sm:text-lg">
                  {mod.title}
                </h4>
                <p className="mt-1.5 text-xs text-zinc-300 line-clamp-2 leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .modules-track {
          display: flex;
          width: max-content;
          animation: modules-scroll 32s linear infinite;
        }
        .modules-track:hover {
          animation-play-state: paused;
        }
        @keyframes modules-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .modules-track {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>
    </div>
  );
}

export default ModulesCarousel;
