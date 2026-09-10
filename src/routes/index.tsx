import { createFileRoute } from "@tanstack/react-router";
import { Check, ArrowDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton } from "@/components/landing/Cta";
import { PhotoSlot } from "@/components/landing/Media";
import { Reveal } from "@/components/landing/Reveal";
import { Simulator } from "@/components/landing/Simulator";
import { VideoFan } from "@/components/landing/VideoFan";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Display Lucrativo | + R$3.000 por mês com 3 displays/dia" },
      {
        name: "description",
        content:
          "Aprenda a vender Display Interativo para o comércio local no seu tempo livre. Método, fornecedor exclusivo a R$23 e mentorias ao vivo por R$97 à vista.",
      },
      {
        property: "og:title",
        content: "Display Lucrativo | + R$3.000 por mês com 3 displays/dia",
      },
      {
        property: "og:description",
        content:
          "Sem estoque e sem experiência. Lucro de R$47 a R$57 por display vendido. Condição de Membro Fundador: R$97 pagamento único.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
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
    q: "Como recebo meu Display de Demonstração?",
    a: "Assim que entrar na área de membros, você solicita sua peça. Nós bancamos a produção física direto com o fornecedor e você cobre apenas o frete. A partir de 20 unidades, o frete é 100% grátis.",
  },
  {
    q: "Preciso comprar estoque para começar?",
    a: "Não. Com o display de demonstração na mão você apresenta, recebe o dinheiro do cliente e só depois faz o pedido com a fábrica. Zero risco de estoque parado.",
  },
  {
    q: "Tem mensalidade ou fidelidade?",
    a: "Nenhuma. O pagamento é único (R$ 97 à vista).",
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

const RECEBE = [
  {
    n: "01",
    t: "Acesso Direto ao Fornecedor Exclusivo",
    d: "Preço de fábrica direto da fonte (R$23 a unidade), produção sob demanda sem necessidade de estoque e frete grátis a partir de 20 peças.",
  },
  {
    n: "02",
    t: "Método Display Lucrativo",
    d: "O passo a passo completo de quem vende na rua: abordagens práticas que funcionam no comércio local, técnicas de fechamento e o processo rápido para configurar o display no celular.",
  },
  {
    n: "03",
    t: "Mentoria ao Vivo Todo Mês",
    d: "Um encontro mensal ao vivo direto comigo para tirar dúvidas reais de campo, analisar abordagens e destravar suas vendas.",
  },
  {
    n: "04",
    t: "Comunidade Display Lucrativo",
    d: "Grupo exclusivo com quem está na mesma jornada para trocar experiências, novas estratégias de abordagem e parcerias no dia a dia.",
  },
];

const CHECKLIST = [
  "Método Display Lucrativo Completo (da abordagem ao fechamento em balcão)",
  "Acesso Direto ao Fornecedor Exclusivo (preço de fábrica a R$23 a unidade)",
  "Mentorias ao Vivo Mensais (tira-dúvidas de campo direto comigo)",
  "Comunidade Display Lucrativo (networking com outros operadores)",
  "Bônus Fundador: 1 Display de Demonstração bancado por nós",
  "Condição Especial: opção de escala com frete grátis e call exclusiva",
];

function Index() {
  return (
    <main className="relative overflow-x-hidden pb-0">
      {/* ============ 01 — HERO ============ */}
      <section className="relative px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:pt-20 lg:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-[0.22]"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 0%, var(--lime), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-[color-mix(in_oklab,var(--lime)_8%,transparent)] px-4 py-2 text-[10px] font-semibold tracking-[0.16em] text-primary uppercase sm:text-[11px]">
            🔥 Condição especial Aluno Fundador
          </span>

          <div className="relative mt-5 -mb-6 sm:mt-8 sm:mb-0">
            <VideoFan />
          </div>

          <h1 className="mx-auto mt-0 max-w-4xl font-display text-[2.1rem] leading-[1.03] font-extrabold text-balance sm:mt-4 sm:text-6xl lg:text-7xl">
            3 displays por dia.
            <br />
            <span className="text-lime-glow">
              Mais de R$ 3.000 limpos no seu bolso todo mês.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-foreground/80 sm:mt-6 sm:text-lg">
            No seu tempo livre e sem largar o emprego. O método de quem vende display há 4
            anos: aprenda a vender, configurar e tenha acesso ao meu fornecedor exclusivo.
          </p>

          <div className="mt-9 flex flex-col items-center">
            <CtaButton className="max-w-md">QUERO COMEÇAR AGORA</CtaButton>
          </div>
        </div>
      </section>

      {/* ============ 02 — PROVA REAL ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <SectionLabel>Prova real</SectionLabel>
          </Reveal>

          <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-6">
            {[
              { n: "4 ANOS", t: "Vendendo Display Interativo" },
              { n: "5+", t: "Nunca voltei para casa sem vender menos que isso" },
              { n: "10–13", t: "Displays vendidos por dia, em média" },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 90}>
                <p className="text-lime-glow font-display text-5xl font-extrabold sm:text-6xl">
                  {item.n}
                </p>
                <p className="mt-3 max-w-xs text-[0.9375rem] leading-relaxed text-foreground/80 sm:text-base">
                  {item.t}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 — O QUE ACONTECE NA PRÁTICA ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionLabel>📍 O que acontece na prática</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Todo lojista quer estar no topo do Google.{" "}
              <span className="text-primary">
                Ele só não sabe como pedir a avaliação.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={80} className="mt-8">
            <ul className="space-y-4">
              {PRATICA.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] px-5 py-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-relaxed text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-display text-lg font-extrabold text-balance italic sm:text-2xl">
              Você não vende acrílico. Você entrega o jeito mais rápido pro lojista{" "}
              <span className="text-lime-glow">dominar as buscas da região</span> sem
              precisar implorar nada pra ninguém.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 04 — CUSTO VS LUCRO + SIMULADOR ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <SectionLabel>💰 Custo vs. lucro</SectionLabel>
          </Reveal>

          <Reveal delay={70} className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="surface-panel rounded-[1.75rem] border border-border p-6 sm:p-8">
              <p className="font-display text-xl font-extrabold sm:text-2xl">
                1 Display Interativo
              </p>
              <dl className="mt-6 space-y-3 text-sm sm:text-base">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Custo fornecedor</dt>
                  <dd className="font-display font-bold tabular-nums">R$23,00</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Preço médio de venda</dt>
                  <dd className="font-display font-bold tabular-nums">R$70,00 a R$80,00</dd>
                </div>
              </dl>
              <div className="mt-6 rounded-2xl border border-primary/30 bg-[color-mix(in_oklab,var(--lime)_8%,var(--ink))] px-5 py-4">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                  Lucro no bolso
                </p>
                <p className="text-lime-glow mt-1 font-display text-2xl font-extrabold tabular-nums sm:text-3xl">
                  + R$47,00 a R$57,00
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Até 71% de margem</p>
              </div>
            </div>

            <div className="surface-panel relative rounded-[1.75rem] border border-primary/40 p-6 shadow-[var(--shadow-deep)] sm:p-8">
              <span className="mb-5 inline-flex rounded-full border border-primary/35 bg-[color-mix(in_oklab,var(--lime)_10%,transparent)] px-3 py-1.5 text-[9px] font-bold tracking-[0.14em] text-primary uppercase sm:absolute sm:top-6 sm:right-6 sm:mb-0">
                Recomendado / maior lucro
              </span>
              <p className="font-display text-xl font-extrabold sm:text-2xl">
                🚚 Lote 20 Displays{" "}
                <span className="text-primary">(frete grátis)</span>
              </p>
              <dl className="mt-6 space-y-3 text-sm sm:text-base">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Custo fornecedor</dt>
                  <dd className="font-display font-bold tabular-nums">R$460,00</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Preço médio de venda</dt>
                  <dd className="font-display font-bold tabular-nums">
                    R$1.400,00 a R$1.600,00
                  </dd>
                </div>
              </dl>
              <div className="mt-6 rounded-2xl border border-primary/30 bg-[color-mix(in_oklab,var(--lime)_10%,var(--ink))] px-5 py-4">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                  Lucro no bolso
                </p>
                <p className="text-lime-glow mt-1 font-display text-2xl font-extrabold tabular-nums sm:text-3xl">
                  + R$940,00 a R$1.140,00
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Lucro 100% limpo</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="font-display font-extrabold tracking-tight">
                <span className="text-lime-glow block mb-2 text-3xl sm:text-5xl">
                  Simulador de Lucro Real
                </span>
                <span className="text-foreground/60 text-lg font-bold block sm:text-xl">
                  Veja o lucro limpo no seu bolso por mês:
                </span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Arraste os controles para simular seus dias e peças.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Simulator />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 05 — O QUE VOCÊ RECEBE ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <SectionLabel>📦 O que você recebe</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Tudo o que você precisa para começar a faturar no balcão.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {RECEBE.map((card, i) => (
              <Reveal key={card.n} delay={i * 70}>
                <div className="surface-panel flex h-full flex-col rounded-[1.75rem] border border-border p-6 sm:p-7">
                  <div>
                    <span className="font-display text-sm font-bold text-primary">
                      {card.n}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-extrabold sm:text-2xl">
                      {card.t}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{card.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ============ 06 — COMO TUDO COMEÇOU ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-4xl">
            <SectionLabel>📍 Como tudo começou</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Eu comecei exatamente onde você está hoje: procurando uma renda extra.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
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

          <Reveal delay={80} className="mt-12 grid grid-cols-2 gap-3 sm:gap-5">
            {["FOTO_PROVA_01", "FOTO_PROVA_02", "FOTO_PROVA_03", "FOTO_PROVA_04"].map(
              (id, index) => (
                <PhotoSlot
                  key={id}
                  id={id}
                  className={index === 0 ? "aspect-[4/5] sm:row-span-2" : "aspect-[4/5] sm:aspect-[16/10]"}
                  alt="Registros reais da jornada com Display Interativo"
                />
              ),
            )}
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
              <div className="surface-panel flex h-full flex-col rounded-[1.75rem] border border-border p-6 sm:p-8">
                <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
                  Opção 1: O Teste Seguro
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Para quem quer levantar caixa rápido com pouco dinheiro.
                </p>
                <div className="hairline my-6" />
                <p className="leading-relaxed text-muted-foreground">
                  Nós bancamos a produção do seu primeiro{" "}
                  <span className="font-semibold text-foreground">
                    Display de Demonstração
                  </span>
                  . Enquanto a peça viaja até a sua casa, você já vai afiando o machado
                  assistindo às aulas do método. Você só paga a etiqueta de frete para o seu
                  endereço. Chegou, configurou, vendeu no primeiro comércio da sua rua,
                  colocou o lucro no bolso e já tem caixa para o próximo passo.
                </p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="surface-panel relative flex h-full flex-col rounded-[1.75rem] border border-primary/50 p-6 shadow-[var(--shadow-deep)] sm:p-8">
                <span className="mb-5 inline-flex self-start rounded-full border border-primary/35 bg-[color-mix(in_oklab,var(--lime)_10%,transparent)] px-3 py-1.5 text-[9px] font-bold tracking-[0.14em] text-primary uppercase sm:absolute sm:top-6 sm:right-6 sm:mb-0">
                  🔥 Para escalar rápido
                </span>
                <h3 className="font-display text-2xl font-extrabold text-lime-glow sm:text-3xl">
                  Opção 2: O Plano Escala 7 Dias
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Para quem quer acelerar os resultados desde o início.
                </p>
                <div className="hairline my-6" />
                <p className="leading-relaxed text-muted-foreground">
                  Se você já quer entrar no jogo grande e fazer seu primeiro pedido a partir
                  de 20 unidades direto com a fábrica:
                </p>
                <ul className="mt-5 space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Frete 100% grátis
                      </span>{" "}
                      da fábrica até a sua porta.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Call exclusiva de alinhamento comigo:
                      </span>{" "}
                      um encontro ao vivo em grupo fechado no Zoom, para desenharmos "o plano
                      escala" para zerar suas 20 peças ou mais em até 7 dias.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 08 — OFERTA ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
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
              <span className="inline-flex rounded-full border border-primary/30 bg-[color-mix(in_oklab,var(--lime)_8%,transparent)] px-4 py-2 text-[10px] font-semibold tracking-[0.16em] text-primary uppercase sm:text-[11px]">
                💳 Acesso imediato
              </span>

              <h2 className="mx-auto mt-6 max-w-2xl font-display text-2xl leading-[1.1] font-extrabold text-balance sm:text-4xl">
                Tudo pronto para você começar a faturar no comércio da sua região.
              </h2>

              <ul className="mx-auto mt-8 grid max-w-xl gap-4 text-left">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mx-auto mt-10 max-w-md rounded-[1.5rem] border border-primary/30 bg-[color-mix(in_oklab,var(--ink)_75%,transparent)] p-6">
                <p className="text-sm text-muted-foreground">
                  De{" "}
                  <span className="line-through decoration-2">R$297,00</span> por apenas:
                </p>
                <p className="text-lime-glow mt-2 font-display text-5xl leading-none font-extrabold sm:text-6xl">
                  R$97,00
                  <span className="font-display text-xl font-bold sm:text-2xl"> à vista</span>
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  (no Pix ou Cartão - Pagamento Único)
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center">
                <CtaButton className="max-w-lg">
                  QUERO GARANTIR MINHA VAGA COM BÔNUS DE FUNDADOR
                </CtaButton>
                <p className="mt-4 text-sm text-muted-foreground">
                  🔒 Pagamento 100% seguro • Acesso imediato • 7 dias de garantia
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
              <p className="leading-relaxed text-muted-foreground sm:text-lg">
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
                <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="py-5 text-left font-display text-base font-bold hover:no-underline sm:text-lg">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ============ 11 — CTA FINAL ============ */}
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
            <h2 className="font-display text-3xl leading-[1.06] font-extrabold text-balance sm:text-6xl">
              Você pode continuar esperando o próximo salário pingar.
              <br />
              <span className="text-lime-glow">
                Ou pode começar hoje a construir um negócio muito lucrativo em sua região.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={90} className="mt-14 grid gap-8 sm:grid-cols-2">
            {[
              { n: "1 a 2 horas", t: "livres no seu dia" },
              {
                n: "+ R$3.000",
                t: "limpos no mês vendendo apenas 3 displays por dia",
              },
            ].map((item) => (
              <div key={item.n}>
                <p className="text-lime-glow font-display text-4xl font-extrabold sm:text-5xl">
                  {item.n}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{item.t}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={140} className="mt-14 flex flex-col items-center">
            <span className="inline-flex rounded-full border border-primary/30 bg-[color-mix(in_oklab,var(--lime)_8%,transparent)] px-4 py-2 text-[10px] font-semibold tracking-[0.16em] text-primary uppercase sm:text-[11px]">
              🔥 Condição membro fundador (pagamento único)
            </span>
            <p className="mt-5 font-display text-2xl font-extrabold sm:text-3xl">
              Apenas <span className="text-lime-glow">R$97 à vista</span> no Pix ou Cartão
            </p>
            <div className="mt-7 w-full max-w-md">
              <CtaButton className="py-6 text-base shadow-[0_0_90px_-8px_var(--lime)] sm:text-xl">
                QUERO COMEÇAR A VENDER HOJE MESMO
              </CtaButton>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              🔒 Acesso imediato • Sem mensalidade • 7 dias de garantia incondicional
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
            <nav className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="transition-colors hover:text-primary">
                Termos de Uso
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Política de Privacidade
              </a>
            </nav>
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground/70">
            Os resultados descritos podem variar de pessoa para pessoa de acordo com a
            aplicação das estratégias, dedicação, quantidade de abordagens realizadas e outros
            fatores individuais.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/70">
            Todos os direitos reservados Daniel Rodrigues.
          </p>
        </div>
      </footer>
    </main>
  );
}
