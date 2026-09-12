import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton } from "@/components/landing/Cta";
import { Reveal } from "@/components/landing/Reveal";
import { Simulator } from "@/components/landing/Simulator";
import { VideoFan } from "@/components/landing/VideoFan";
import { ModulesCarousel } from "@/components/landing/ModulesCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Display Lucrativo | + R$3.000 por mês com 3 displays/dia" },
      {
        name: "description",
        content:
          "Aprenda a vender Display Interativo para o comércio local no seu tempo livre. Método, fornecedor mais barato do Brasil e mentorias ao vivo por R$47 à vista.",
      },
      {
        property: "og:title",
        content: "Display Lucrativo | + R$3.000 por mês com 3 displays/dia",
      },
      {
        property: "og:description",
        content:
          "Sem estoque e sem experiência. Lucro de R$47 a R$57 por display vendido. Condição de Membro Fundador: R$47 pagamento único.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-primary uppercase inline-block">
      {children}
    </span>
  );
}

const FAQ = [
  {
    q: "Eu nunca vendi nada. Consigo?",
    a: "Sim. Você não precisa empurrar nada nem ser um vendedor chato. O display se vende sozinho no balcão quando você mostra como ele funciona em 5 segundos no celular do lojista. Dentro do método você recebe o SCRIPT exato de conversa para chegar com segurança.",
  },
  {
    q: "Trabalho o dia inteiro (CLT). Consigo fazer?",
    a: "Com certeza. Você só precisa de 1 a 2 horas livres no final do dia ou no sábado. Comércios locais continuam abertos no fim da tarde e à noite, que é o melhor horário para falar com o dono.",
  },
  {
    q: "Como recebo o contato do fornecedor?",
    a: "Assim que entrar na área de membros, você tem acesso imediato aos contatos e catálogos diretos da fábrica para pedir os lotes com FRETE GRÁTIS para todo o Brasil (Pack Start, Pro e Master).",
  },
  {
    q: "Preciso comprar estoque para começar?",
    a: "Não. Você pode apresentar o display, receber o dinheiro do cliente e só depois fazer o pedido do lote com a fábrica com frete grátis. Zero risco de estoque parado.",
  },
  {
    q: "Tem mensalidade ou fidelidade?",
    a: "Nenhuma. O pagamento é único (R$ 47 à vista).",
  },
  {
    q: "E se eu entrar e não conseguir vender nada?",
    a: "Garantia Incondicional de 7 dias. Devolvemos 100% do seu valor se pedir o cancelamento no prazo.",
  },
];

const PRATICA = [
  "O comerciante sabe que quanto mais avaliações no Google, mais o negócio dele fica na frente dos concorrentes da região. O problema é a correria do caixa e não saber como pedir isso pro cliente. Aqui entra nossa solução:",
  "O Display é bonito, profissional e chama atenção no balcão.",
  "O cliente só encosta o celular ou aponta a câmera.",
  "Em menos de 5 segundos a avaliação é feita e o Google passa a recomendar mais aquela loja.",
];

const DELIVERABLES = [
  {
    id: "01",
    tag: "01",
    title: (
      <>
        Acesso Direto ao Fornecedor <br className="hidden sm:inline" /> mais barato do Brasil
      </>
    ),
    desc: "Kits com FRETE GRÁTIS para todo o Brasil a partir de R$ 17 cada. Sem intermediários e com margem máxima no bolso.",
    image: "/images/entrega-fornecedor.jpg?v=1",
    alt: "Estoque direto da fábrica e displays acrílicos",
  },
  {
    id: "02",
    tag: "02",
    title: "Método Display Lucrativo",
    desc: "O passo a passo completo de quem vende na rua: abordagens práticas que funcionam no comércio local, técnicas de fechamento e o processo rápido para configurar o display no celular.",
    image: "/images/entrega-metodo.jpg?v=1",
    alt: "Área de membros e método prático",
  },
  {
    id: "03",
    tag: "03",
    title: "Mentoria ao Vivo Todo Mês",
    desc: "Um encontro mensal ao vivo direto comigo para tirar dúvidas reais de campo, analisar abordagens e destravar suas vendas.",
    image: "/images/entrega-mentoria.jpg?v=1",
    alt: "Encontro de mentoria ao vivo",
  },
  {
    id: "04",
    tag: "04",
    title: "Comunidade Display Lucrativo",
    desc: "Grupo exclusivo com quem está na mesma jornada para trocar experiências, novas estratégias de abordagem e parcerias no dia a dia.",
    image: "/images/entrega-comunidade.jpg?v=1",
    alt: "Comunidade e networking ativo",
  },
];

const CHECKLIST = [
  "Método Display Lucrativo Completo (Da abordagem ao fechamento)",
  "Tenha acesso exclusivo ao fornecedor mais barato do Brasil (Kits com Frete Grátis a partir de R$ 17/un)",
  "Mentorias ao Vivo Mensais (Tira-dúvidas de campo direto comigo)",
  "Comunidade Display Lucrativo (Networking com outros operadores)",
];

function Index() {
  return (
    <main className="relative overflow-x-hidden pb-0">
      {/* ============ 01 — HERO ============ */}
      <section className="relative px-4 pt-2 sm:pt-6 md:pt-10 lg:pt-10 pb-12 sm:pb-14 lg:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-[0.22]"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 0%, var(--lime), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-[color-mix(in_oklab,var(--lime)_8%,transparent)] px-4 py-2 text-xs sm:text-sm font-bold tracking-[0.16em] text-primary uppercase mt-4 sm:mt-6 mb-2 sm:mb-3">
            🔥 Condição especial Aluno Fundador
          </span>

          <div className="relative w-full max-w-[360px] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto scale-100 md:scale-90 md:origin-center md:my-1 flex justify-center items-center pb-2 md:pb-0 mb-4 md:mb-0">
            <VideoFan />
          </div>

          <h1 className="relative z-10 mx-auto mt-4 md:mt-2 md:mb-3 pt-4 md:pt-0 max-w-4xl font-black tracking-tight text-center leading-[1.12] mb-4">
            <span className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] block mb-1">
              3 displays por dia.
            </span>
            <span 
              className="text-[#5efc27] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black block"
              style={{
                filter: 'drop-shadow(0 0 25px rgba(94, 252, 39, 0.45)) drop-shadow(0 0 50px rgba(94, 252, 39, 0.2))'
              }}
            >
              <span className="block whitespace-nowrap">Mais de R$ 3.000 limpos</span>
              <span className="block whitespace-nowrap">no seu bolso todo mês.</span>
            </span>
          </h1>

          <p className="max-w-2xl lg:max-w-3xl mx-auto mt-4 sm:mt-5 md:mt-2 text-sm sm:text-base text-zinc-300 leading-relaxed text-center [text-wrap:balance]">
            No seu tempo livre e sem largar o emprego. O método de quem vende display há mais de 4 anos: aprenda a vender, configurar e tenha acesso ao fornecedor mais barato do Brasil&nbsp;(a&nbsp;partir&nbsp;de&nbsp;R$&nbsp;17/un).
          </p>

          <div className="mt-6 md:mt-6 flex flex-col items-center">
            <CtaButton className="max-w-md">QUERO COMEÇAR AGORA</CtaButton>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-2.5 flex flex-wrap items-center justify-center gap-1 font-medium select-none text-center">
              <span>🔒</span> <span className="whitespace-nowrap">Pagamento único de R$ 47</span> • <span className="whitespace-nowrap">Acesso Imediato</span> • <span className="whitespace-nowrap">7 Dias de Garantia</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============ 02 — O QUE ACONTECE NA PRÁTICA (DIRETO APÓS A HERO) ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>📍 O que acontece na prática</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Todo lojista quer estar no topo do Google.{" "}
              <span className="text-primary">
                Ele só não sabe como conseguir mais avaliações.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Coluna 1: Textos e Bullets */}
            <Reveal delay={80} className="lg:col-span-7">
              <ul className="space-y-4">
                {PRATICA.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] px-5 py-4"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="leading-relaxed text-zinc-200">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 mb-6 md:mb-0 font-display text-lg font-extrabold text-balance italic sm:text-2xl">
                Você não vende acrílico. Você entrega o jeito mais rápido pro lojista{" "}
                <span className="text-lime-glow">dominar as buscas da região</span> sem
                precisar implorar nada pra ninguém.
              </p>
            </Reveal>

            {/* Coluna 2: Card Fotográfico com o Display no Balcão */}
            <Reveal delay={120} className="mt-6 lg:mt-0 lg:col-span-5">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-emerald-500/20 bg-zinc-900/90 p-2 sm:p-3 shadow-xl lg:max-w-none">
                <img
                  src="/images/pratica-balcao-nfc.jpg"
                  alt="Display Interativo posicionado estrategicamente no balcão ao lado da maquininha"
                  loading="lazy"
                  className="w-full h-auto max-h-[460px] rounded-xl object-cover"
                />
                <div className="p-3 text-center md:text-left">
                  <p className="text-xs text-zinc-400 mt-3 block text-center md:text-left">
                    📸 Display Interativo no balcão: o cliente encosta o celular e avalia em 5 segundos.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 03 — CUSTO VS LUCRO + SIMULADOR CENTRALIZADO ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <SectionLabel>💰 Custo vs. lucro</SectionLabel>
          </Reveal>

          <Reveal delay={70} className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="surface-panel flex flex-col justify-between rounded-[1.75rem] border border-border p-6 sm:p-8">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex flex-col">
                    <span className="flex items-center gap-2">📦 Kit 10 Displays</span>
                    <span className="text-green-400 font-bold">(Pack Start)</span>
                  </h3>
                  <span className="self-start sm:self-auto inline-flex rounded-full border border-primary/35 bg-[color-mix(in_oklab,var(--lime)_10%,transparent)] px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] text-primary uppercase shrink-0">
                    ⚡ VALIDAÇÃO RÁPIDA
                  </span>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm sm:text-base">
                  <span className="text-muted-foreground">Custo por unidade:</span>
                  <span className="font-display font-bold text-zinc-100">
                    R$ 19/un <span className="text-xs text-primary font-semibold">(com Frete Grátis)</span>
                  </span>
                </div>
              </div>
              <div className="mt-6 flex flex-row items-center justify-between gap-2 py-3 px-4 rounded-xl border border-green-500/30 bg-green-950/20">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-green-500 uppercase select-none">
                  LUCRO NO BOLSO
                </span>
                <span className="text-sm sm:text-lg font-black text-green-400 whitespace-nowrap">
                  + R$ 510,00 a R$ 610,00
                </span>
              </div>
            </div>

            {/* Card Kit 30 (Pack Pro) */}
            <div className="surface-panel flex flex-col justify-between rounded-[1.75rem] border border-primary/40 p-6 shadow-[var(--shadow-deep)] sm:p-8">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex flex-col">
                    <span className="flex items-center gap-2">⭐ Kit 30 Displays</span>
                    <span className="text-green-400 font-bold">(Pack Pro)</span>
                  </h3>
                  <span className="self-start sm:self-auto inline-flex rounded-full border border-primary/35 bg-[color-mix(in_oklab,var(--lime)_10%,transparent)] px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] text-primary uppercase shrink-0">
                    ⭐ MAIS PEDIDO PELOS ALUNOS
                  </span>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm sm:text-base">
                  <span className="text-muted-foreground">Custo por unidade:</span>
                  <span className="font-display font-bold text-zinc-100">
                    R$ 18/un <span className="text-xs text-primary font-semibold">(com Frete Grátis)</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-row items-center justify-between gap-2 py-3 px-4 rounded-xl border border-green-500/30 bg-green-950/20">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-green-500 uppercase select-none">
                  LUCRO NO BOLSO
                </span>
                <span className="text-sm sm:text-lg font-black text-green-400 whitespace-nowrap">
                  + R$ 1.560,00 a R$ 1.860,00
                </span>
              </div>
            </div>
          </Reveal>

          {/* Bloco do Simulador 100% Centralizado Verticalmente */}
          <div className="mt-16 sm:mt-24">
            <Reveal className="mx-auto max-w-2xl text-center mb-8 sm:mb-10">
              <h2 className="font-display font-extrabold tracking-tight">
                <span className="text-lime-glow block mb-2 text-3xl sm:text-5xl">
                  Simulador de Lucro Real
                </span>
                <span className="text-zinc-200 text-lg font-bold block sm:text-xl">
                  Veja o lucro limpo no seu bolso por mês:
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                Simule suas vendas diárias e veja o lucro limpo no bolso:
              </p>
            </Reveal>
            <Reveal delay={100} className="mx-auto max-w-xl">
              <Simulator />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 04 — CARROSSEL AUTOMÁTICO DE MÓDULOS (TREINAMENTO) ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-24 overflow-hidden border-t border-b border-border/50 bg-[color-mix(in_oklab,var(--ink)_60%,transparent)]">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
            <SectionLabel>📚 Conteúdo do Método</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Tudo o que você precisa para sair do zero e fechar sua primeira venda.
            </h2>
            <p className="mt-4 text-base text-zinc-300 sm:text-lg">
              Acesso passo a passo desde a configuração no celular até os scripts de balcão e escala.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ModulesCarousel />
            <p className="text-[11px] text-zinc-400 text-center mt-2 flex items-center justify-center gap-1 md:hidden select-none">
              <span>👈</span> Deslize para ver todos os módulos <span>👉</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 05 — O QUE VOCÊ RECEBE (4 ENTREGÁVEIS) ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <SectionLabel>📦 O que você recebe</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Tudo o que você precisa para começar a faturar na sua região.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {DELIVERABLES.map((item, i) => (
              <Reveal key={item.id} delay={i * 70}>
                <div className="group surface-panel flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border p-5 sm:p-7 transition-all duration-300 hover:border-primary/50">
                  {/* Container visual horizontal 16:9 */}
                  <div className="relative w-full aspect-video sm:h-52 overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950 mb-5">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <span className="font-display text-sm font-bold text-primary">
                      {item.tag}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-extrabold sm:text-2xl text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-zinc-300">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 06 — COMO TUDO COMEÇOU (GRID COMPARATIVO ANTES VS HOJE) ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionLabel>📍 Como tudo começou</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Eu comecei exatamente onde você está hoje: procurando uma renda extra.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-200 sm:text-lg">
              <p>
                Em 2021, eu estava quebrado e sem saber o que fazer. Buscando no YouTube uma
                forma de renda extra, encontrei um vídeo sobre plaquinhas de Pix e decidi
                testar: comprei os acrílicos, fiz a arte no Canva e recortava papel na tesoura.
              </p>
              <p className="font-semibold text-foreground">
                Essa foto com a mesa cheia foi a minha primeira semana de vendas: mais de 30
                peças entregues no comércio local.
              </p>
              <p>
                De lá para cá o jogo mudou. Hoje não corto mais papel: uso o{" "}
                <strong className="text-foreground">Display Interativo com aproximação</strong>,
                direto da fábrica. Depois de anos batendo de porta em porta, validei um método
                tão simples e direto que consigo ensinar qualquer pessoa a vender displays e
                colocar dinheiro limpo no bolso, mesmo que você nunca tenha vendido nada na vida.
              </p>
              <p>
                Minha história e a minha realidade financeira mudaram. Agora chegou a sua vez
                de ver que é totalmente possível colocar mais de{" "}
                <strong className="text-lime-glow">R$ 3.000 limpos no bolso todo mês</strong>{" "}
                com o Display Interativo.
              </p>
            </div>
          </Reveal>

          {/* Grid comparativo de duas colunas: Antes vs Hoje */}
          <Reveal delay={100} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Coluna 1 (Antes - 2021) */}
              <div className="flex flex-col gap-2">
                <img 
                  src="/images/historia-antes-depois.jpg" 
                  alt="Primeiras placas de 2021 cortadas na tesoura" 
                  className="w-full h-80 sm:h-96 object-cover rounded-xl border border-zinc-800" 
                  loading="lazy" 
                />
                <span className="text-xs sm:text-sm text-zinc-400 text-center">
                  2021: O início com tesoura, papel e mais de 30 peças na primeira semana.
                </span>
              </div>

              {/* Coluna 2 (Hoje - Método Validado) */}
              <div className="flex flex-col gap-2">
                <img 
                  src="/images/historia-depois.jpg" 
                  alt="Displays profissionais com tecnologia NFC na mão" 
                  className="w-full h-80 sm:h-96 object-cover object-center rounded-xl border border-emerald-500/30 shadow-lg" 
                  loading="lazy" 
                />
                <span className="text-xs sm:text-sm text-emerald-400 font-medium text-center">
                  🚀 Hoje: Display Interativo profissional com tecnologia NFC direto da fábrica.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 07 — MEMBRO FUNDADOR ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <SectionLabel>🎁 Condição exclusiva de membro fundador</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Escolha o seu ponto de partida para colocar dinheiro no bolso:
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="surface-panel flex h-full flex-col justify-between rounded-[1.75rem] border border-border p-6 sm:p-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
                        Kit 1: Validação Rápida
                      </h3>
                      <p className="mt-2 text-sm text-zinc-300">
                        Pack Start – Ideal para validar o método na sua cidade.
                      </p>
                    </div>
                    <span className="self-start sm:self-auto inline-flex rounded-full border border-emerald-500/35 bg-[color-mix(in_oklab,var(--lime)_10%,transparent)] px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] text-primary uppercase shrink-0">
                      IDEAL PARA COMEÇAR
                    </span>
                  </div>

                  <div className="hairline my-4" />
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="leading-relaxed text-zinc-200">
                        <strong className="text-foreground">Kit 10 un (R$ 19 cada):</strong> direto da fábrica com FRETE GRÁTIS.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="leading-relaxed text-zinc-200">
                        Você entra no método e pede seu primeiro lote de 10 unidades direto da fábrica por R$ 19 cada (com acesso a lotes a partir de R$ 17) e FRETE GRÁTIS.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="leading-relaxed text-zinc-200">
                        <strong className="text-foreground">Retorno rápido:</strong> vendendo a R$ 70 ou R$ 80 cada, você faz de R$ 700 a R$ 800 e já valida sua operação.
                      </span>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-6 py-3 px-5 rounded-xl bg-zinc-900 border border-green-500/50 hover:border-green-400 text-green-400 hover:text-green-300 font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                >
                  Selecionar este caminho →
                </button>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="surface-panel relative flex h-full flex-col justify-between rounded-[1.75rem] border border-primary/50 p-6 shadow-[var(--shadow-deep)] sm:p-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-extrabold text-lime-glow sm:text-3xl">
                        Kit 2: Escala e Margem Máxima
                      </h3>
                      <p className="mt-2 text-sm text-zinc-300">
                        Pack Pro e Master – Para quem quer escalar as vendas com o menor custo.
                      </p>
                    </div>
                    <span className="self-start sm:self-auto inline-flex rounded-full border border-primary/35 bg-[color-mix(in_oklab,var(--lime)_10%,transparent)] px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] text-primary uppercase shrink-0">
                      🔥 MAIOR MARGEM E LUCRO
                    </span>
                  </div>

                  <div className="hairline my-4" />
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="leading-relaxed text-zinc-200">
                        <strong className="text-foreground">Pack Pro 30 un (R$ 18 cada):</strong> ⭐ o combo mais pedido pelos alunos que desejam lucrar mais.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="leading-relaxed text-zinc-200">
                        <strong className="text-foreground">Pack Master 50 un (R$ 17 cada) com Frete Grátis:</strong> 🚀 menor preço por unidade e lucro altíssimo.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="leading-relaxed text-zinc-200">
                        Nosso roteiro completo de vendas validado há mais de 4 anos para fechar pedidos rápidos.
                      </span>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full mt-6 py-3 px-5 rounded-xl bg-zinc-900 border border-green-500/50 hover:border-green-400 text-green-400 hover:text-green-300 font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(34,197,94,0.15)]"
                >
                  Selecionar este caminho →
                </button>
              </div>
            </Reveal>
          </div>

          {/* Destaque do Aviso de Ponto de Partida Estilizado */}
          <Reveal delay={120} className="mt-10">
            <div className="max-w-2xl mx-auto text-center text-sm md:text-base leading-relaxed px-4 py-3 rounded-xl border border-green-500/30 bg-green-950/20 text-zinc-200 text-balance">
              <p>
                💡 <span className="text-primary font-bold">Importante:</span> Ao entrar hoje na comunidade por apenas R$ 47, você tem acesso imediato ao fornecedor mais barato do país e ainda ganha frete&nbsp;grátis.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 08 — OFERTA COM MOCKUP 3D ============ */}
      <section id="oferta" className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/4 h-[420px] opacity-[0.18]"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, var(--lime), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <div className="surface-panel rounded-[2rem] p-6 text-center shadow-[var(--shadow-deep)] sm:p-10">
              <span className="inline-flex rounded-full border border-primary/30 bg-[color-mix(in_oklab,var(--lime)_8%,transparent)] px-4 py-2 text-xs sm:text-sm font-bold tracking-[0.16em] text-primary uppercase">
                💳 Acesso imediato
              </span>

              <h2 className="mx-auto mt-6 max-w-2xl font-display text-2xl leading-[1.1] font-extrabold text-balance sm:text-4xl">
                Tudo pronto para você começar a faturar no comércio da sua região.
              </h2>

              {/* Mockup 3D Oficial da Oferta */}
              <div className="w-full max-w-lg mx-auto mt-6 mb-6 rounded-xl overflow-hidden border border-zinc-800/80 shadow-[0_0_25px_rgba(34,197,94,0.12)] bg-zinc-950">
                <img
                  src="/images/mockup-combo-fundador.jpg?v=1"
                  alt="Combo Oficial Display Lucrativo"
                  className="w-full h-auto max-h-[220px] sm:max-h-[250px] object-cover select-none pointer-events-none"
                  loading="lazy"
                />
              </div>

              <ul className="mx-auto mt-6 grid max-w-xl gap-2 sm:gap-3 text-left">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-zinc-200 sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mx-auto mt-10 max-w-md rounded-[1.5rem] border border-primary/30 bg-[color-mix(in_oklab,var(--ink)_75%,transparent)] p-6">
                <p className="text-sm font-medium text-zinc-300 sm:text-base">
                  De <span className="line-through decoration-2">R$ 197,00</span> por apenas:
                </p>
                <p className="text-lime-glow mt-2 font-display text-5xl leading-none font-extrabold sm:text-6xl">
                  R$47,00
                  <span className="font-display text-xl font-bold sm:text-2xl"> à vista</span>
                </p>
                <p className="mt-3 text-sm text-zinc-300">
                  (no Pix ou Cartão - Pagamento Único)
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center">
                <CtaButton className="max-w-md">
                  GARANTIR MINHA VAGA AGORA
                </CtaButton>
                <p className="text-[11px] sm:text-xs text-zinc-400 mt-2.5 flex flex-wrap items-center justify-center gap-1 font-medium select-none text-center">
                  <span>🔒</span> <span className="whitespace-nowrap">Pagamento 100% Seguro</span> • <span className="whitespace-nowrap">Acesso Imediato</span> • <span className="whitespace-nowrap">7 Dias de Garantia</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 09 — GARANTIA ============ */}
      <section className="relative px-4 py-8 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionLabel>🛡️ Risco zero de verdade</SectionLabel>
            <h2 className="mt-2 font-display text-2xl leading-[1.08] font-extrabold text-balance sm:mt-4 sm:text-4xl">
              Teste o método por 7 dias. Se não fizer sentido, seu dinheiro volta.
            </h2>
          </Reveal>
          <Reveal delay={90} className="lg:col-span-7">
            <div className="rounded-3xl border border-primary/25 bg-[color-mix(in_oklab,var(--surface-2)_85%,transparent)] p-5 shadow-[var(--shadow-deep)] sm:p-9">
              <p className="leading-relaxed text-zinc-200 sm:text-lg">
                Entre na plataforma, assista às aulas e veja o processo de ponta a ponta. Se
                nos primeiros 7 dias você achar que isso não é para você, que o método é
                complicado ou simplesmente não gostar da minha voz, basta mandar um único
                e-mail ou mensagem no suporte. A plataforma devolve 100% do seu dinheiro
                investido. Sem letrinhas miúdas, sem justificativas e continuamos amigos.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 10 — FAQ ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold sm:text-5xl">
              Ainda está com alguma dúvida?
            </h2>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`} className="border-zinc-800/80">
                  <AccordionTrigger className="py-5 text-left font-display text-base font-bold hover:no-underline sm:text-lg">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ============ 11 — CTA FINAL COM EQUILÍBRIO TIPOGRÁFICO ============ */}
      <section className="relative px-4 py-20 sm:px-6 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] opacity-[0.2]"
          style={{
            background: "radial-gradient(55% 60% at 50% 100%, var(--lime), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center leading-tight text-balance">
              Você pode continuar esperando o próximo salário pingar.
              <br className="hidden sm:block" />{" "}
              <span className="text-lime-glow">
                Ou pode começar hoje a construir um negócio muito lucrativo em sua região.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={90} className="mt-14 grid gap-8 sm:grid-cols-2">
            {[
              { n: "1 a 2 horas", t: "livres no seu dia" },
              {
                n: "+ R$ 3.000",
                t: "limpos no mês vendendo apenas 3 displays por dia",
              },
            ].map((item) => (
              <div key={item.n}>
                <p className="text-lime-glow font-display text-4xl font-extrabold sm:text-5xl">
                  {item.n}
                </p>
                <p className="mt-2 text-sm text-zinc-300">{item.t}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={140} className="mt-14 flex flex-col items-center">
            <span className="inline-flex rounded-full border border-primary/30 bg-[color-mix(in_oklab,var(--lime)_8%,transparent)] px-4 py-2 text-xs sm:text-sm font-bold tracking-[0.16em] text-primary uppercase">
              🔥 Condição membro fundador (pagamento único)
            </span>
            <p className="mt-5 font-display text-2xl font-extrabold sm:text-3xl">
              Apenas <span className="text-lime-glow">R$ 47 à vista</span> no Pix ou Cartão
            </p>
            <div className="mt-7 w-full max-w-md">
              <CtaButton className="w-full max-w-md shadow-[0_0_70px_-10px_var(--lime)]">
                COMEÇAR A VENDER HOJE
              </CtaButton>
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-2.5 flex flex-wrap items-center justify-center gap-1 font-medium select-none text-center">
              <span>🔒</span> <span className="whitespace-nowrap">Pagamento único de R$ 47</span> • <span className="whitespace-nowrap">Acesso Imediato</span> • <span className="whitespace-nowrap">7 Dias de Garantia</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-border px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-sm font-extrabold tracking-[0.14em] uppercase">
              Comunidade <span className="text-primary">Display Lucrativo</span>
            </p>
            <nav className="flex gap-6 text-sm text-zinc-400">
              <a href="#" className="transition-colors hover:text-primary">
                Termos de Uso
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Política de Privacidade
              </a>
            </nav>
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-zinc-400">
            Os resultados descritos podem variar de pessoa para pessoa de acordo com a
            aplicação das estratégias, dedicação, quantidade de abordagens realizadas e outros
            fatores individuais.
          </p>
          <p className="mt-4 text-xs text-zinc-400">
            Todos os direitos reservados Daniel Rodrigues.
          </p>
        </div>
      </footer>
    </main>
  );
}
