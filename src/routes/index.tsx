import { createFileRoute } from "@tanstack/react-router";
import { Check, ArrowDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton, StickyMobileCta } from "@/components/landing/Cta";
import { PhotoSlot } from "@/components/landing/Media";
import { Reveal } from "@/components/landing/Reveal";
import { Simulator } from "@/components/landing/Simulator";
import { VideoFan } from "@/components/landing/VideoFan";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Comunidade Display Lucrativo — R$1.000 em 7 dias" },
      {
        name: "description",
        content:
          "Lucre R$1.000 em 7 dias vendendo Display Interativo trabalhando 1 hora por dia. Método, fornecimento exclusivo e mentorias por R$37/mês.",
      },
      { property: "og:title", content: "Comunidade Display Lucrativo — R$1.000 em 7 dias" },
      {
        property: "og:description",
        content:
          "Sem estoque, sem experiência. R$47 de lucro bruto por Display vendido. Entre como Aluno Fundador por R$37/mês.",
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
    a: "Sim.\n\nO método foi desenvolvido para quem está começando.\n\nO Display Interativo é um produto visual e se vende sozinho quando o comerciante bate o olho e entende para que serve.\n\nVocê recebe o roteiro e aprende como fazer a abordagem.",
  },
  {
    q: "Trabalho o dia inteiro. Consigo fazer?",
    a: "Sim.\n\nA proposta é justamente trabalhar com 1 hora por dia.\n\nPode ser no horário de almoço, depois do expediente ou em outro período disponível.",
  },
  {
    q: "Como recebo meu Display de Demonstração?",
    a: "É simples.\n\nAssim que você comprar a Comunidade Display Lucrativo, você informa seu CEP e endereço completo na própria plataforma.\n\nNo checkout, você poderá selecionar o Order Bump do frete do Display de Demonstração, pagando apenas a taxa de envio correspondente à sua região.\n\nOs pedidos são organizados uma vez por semana, sempre às sextas-feiras.\n\nApós o fechamento do lote, seu Display será produzido e enviado em 2 a 3 dias úteis, diretamente para o endereço informado.\n\nEnquanto isso, seu acesso à comunidade é liberado imediatamente, então você já pode assistir às aulas, aprender o método, participar das mentorias ao vivo e se preparar para fazer suas primeiras abordagens.",
  },
  {
    q: "Preciso comprar estoque?",
    a: "Não.\n\nVocê vende, envia o pedido para nosso time e cuidamos da produção e do envio.\n\nO Display será enviado para a sua casa, e você faz a entrega para o seu cliente.",
  },
  {
    q: "Tem fidelidade?",
    a: "Não.\n\nR$37 por mês, sem fidelidade e com cancelamento a qualquer momento.",
  },
  {
    q: "E se eu entrar e não conseguir vender nada?",
    a: "Você está protegido pela nossa garantia.\n\nSe em até 7 dias você conhecer o conteúdo e decidir que não é para você, pode solicitar o reembolso dentro do prazo da plataforma.\n\nE, se você aplicar o método, utilizar o Display de Demonstração e seguir o passo a passo durante 7 dias sem conseguir vender nenhum Display para recuperar o valor da assinatura, entra em ação a minha garantia condicional de resultado.\n\nO risco é meu.",
  },
];

const FLOW = [
  "VOCÊ VENDE",
  "ENVIA O PEDIDO",
  "NOSSO TIME CUIDA DA PRODUÇÃO",
  "NOSSO TIME CUIDA DA LOGÍSTICA",
  "O DISPLAY VAI PARA A SUA CASA",
  "VOCÊ ENTREGA AO CLIENTE",
];

function Index() {
  return (
    <main className="relative overflow-x-hidden pb-24 md:pb-0">
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
            🚨 Condição especial — Aluno Fundador
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl font-display text-[2.1rem] leading-[1.03] font-extrabold text-balance sm:text-6xl lg:text-7xl">
            Lucre <span className="text-lime-glow">R$1.000</span> em{" "}
            <span className="text-lime-glow">7 dias</span> vendendo Display Interativo,
            trabalhando <span className="text-lime-glow">1 hora por dia</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Você não precisa largar seu emprego, ter experiência com vendas ou investir em
            estoque. Eu vou te mostrar o método que uso há 4 anos para vender Displays para
            comércios locais.
          </p>

          <div className="mt-9 flex flex-col items-center">
            <CtaButton className="max-w-md">QUERO LUCRAR MEUS PRIMEIROS R$1.000</CtaButton>
            <p className="mt-4 text-sm text-muted-foreground">
              R$37/mês • Lote 1 • Primeiros 100 alunos
            </p>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16">
          <VideoFan />
        </div>
      </section>

      {/* ============ 02 — PROVA REAL ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <SectionLabel>Prova real</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Eu não quero que você acredite em mim.{" "}
              <span className="text-primary">Quero que você veja.</span>
            </h2>
          </Reveal>

          {/* composição editorial assimétrica */}
          <div className="mt-12 grid grid-cols-6 gap-3 sm:gap-4">
            <Reveal className="col-span-4 sm:col-span-3">
              <PhotoSlot id="FOTO_PROVA_01" className="aspect-[4/5] h-full" />
            </Reveal>
            <Reveal delay={80} className="col-span-2 sm:col-span-3 flex flex-col gap-3 sm:gap-4">
              <PhotoSlot id="FOTO_PROVA_02" className="aspect-square flex-1" />
              <PhotoSlot id="FOTO_PROVA_03" className="aspect-[3/2] flex-1" />
            </Reveal>
            <Reveal delay={140} className="col-span-3 sm:col-span-2">
              <PhotoSlot id="FOTO_PROVA_04" className="aspect-[3/4]" />
            </Reveal>
            <Reveal delay={200} className="col-span-3 sm:col-span-4">
              <PhotoSlot id="FOTO_PROVA_05" className="h-full min-h-[160px]" />
            </Reveal>
          </div>

          <div className="hairline mt-16" />

          <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6">
            {[
              { n: "4 ANOS", t: "Vendendo Display Interativo" },
              {
                n: "5+",
                t: "Nunca voltei para casa tendo vendido menos de 5 Displays em um dia.",
              },
              { n: "10–13", t: "Minha média atual de Displays vendidos por dia." },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 90}>
                <p className="text-lime-glow font-display text-5xl font-extrabold sm:text-6xl">
                  {item.n}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {item.t}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <p className="max-w-2xl font-display text-xl leading-snug font-bold sm:text-2xl">
              Isso não é uma teoria que eu criei para vender um curso. É o que eu faço todos os
              dias.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 03 — SIMULADOR ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionLabel>Faça sua própria conta</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Quanto você quer ganhar vendendo{" "}
              <span className="text-primary">Display Interativo?</span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              Você não precisa vender 10 ou 13 Displays por dia para começar. Vendendo apenas 5
              Displays por dia durante 5 dias, você já chega a{" "}
              <span className="font-semibold text-foreground">R$1.175</span> de lucro bruto.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
              E eu sei que isso é possível porque faço isso há 4 anos. Nunca voltei para casa
              tendo vendido menos de 5 Displays em um dia. Minha média hoje fica entre 10 e 13
              Displays por dia.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Simulator />
          </Reveal>
        </div>
      </section>

      {/* ============ 04 — O QUE VOCÊ RECEBE ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-3xl">
            <SectionLabel>O que você recebe</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Eu vou te mostrar exatamente como fazer isso.
            </h2>
            <p className="mt-5 text-muted-foreground sm:text-lg">
              Dentro da Comunidade Display Lucrativo, você recebe tudo o que precisa para
              começar.
            </p>
          </Reveal>

          {/* Display de demonstração */}
          <Reveal className="mt-16 grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <PhotoSlot
              id="FOTO_DISPLAY_DEMONSTRACAO"
              className="aspect-[4/3] lg:col-span-5 lg:aspect-[4/5]"
            />
            <div className="lg:col-span-7">
              <span className="font-display text-sm font-bold text-primary">01</span>
              <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-4xl">
                Seu primeiro Display de Demonstração
              </h3>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Você recebe um Display de{" "}
                  <span className="font-semibold text-primary">R$67</span> como bônus para
                  começar.
                </p>
                <p>Você paga apenas o frete.</p>
                <p>
                  Você já entra com a ferramenta na mão para apresentar o produto aos
                  comerciantes.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Método de venda */}
          <Reveal className="mt-20 grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7 lg:order-2">
              <span className="font-display text-sm font-bold text-primary">02</span>
              <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-4xl">
                Método de Venda
              </h3>
              <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  O roteiro que eu uso para abordar comerciantes, apresentar o Display, lidar com
                  objeções e fechar a venda.
                </p>
                <p>Você não precisa chegar na rua sem saber o que falar.</p>
              </div>
            </div>
            <PhotoSlot
              id="FOTO_ABORDAGEM"
              className="aspect-[4/3] lg:col-span-5 lg:order-1 lg:aspect-[4/5]"
            />
          </Reveal>

          {/* Fornecimento exclusivo */}
          <Reveal className="mt-20">
            <span className="font-display text-sm font-bold text-primary">03</span>
            <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-4xl">
              Fornecimento exclusivo
            </h3>
            <p className="mt-5 max-w-2xl font-display text-lg font-bold sm:text-2xl">
              Você não compra estoque e não precisa se preocupar com produção.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-14">
              <ol className="lg:col-span-7">
                {FLOW.map((step, i) => (
                  <li key={step}>
                    <div className="flex items-center gap-4 rounded-2xl border border-border bg-[color-mix(in_oklab,var(--surface)_70%,transparent)] px-5 py-4">
                      <span className="font-display text-xs font-bold text-primary tabular-nums">
                        0{i + 1}
                      </span>
                      <span className="font-display text-sm font-bold tracking-wide sm:text-base">
                        {step}
                      </span>
                    </div>
                    {i < FLOW.length - 1 && (
                      <div className="flex justify-center py-1.5">
                        <ArrowDown className="h-4 w-4 text-primary/60" />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
              <div className="space-y-4 leading-relaxed text-muted-foreground lg:col-span-5">
                <PhotoSlot id="FOTO_PEDIDOS_PRODUCAO" className="aspect-[4/3]" />
                <p>
                  Você vende, envia o pedido para o nosso time e nós cuidamos de toda a produção
                  e logística.
                </p>
                <p>O Display será enviado diretamente para a sua casa.</p>
                <p>
                  O mesmo processo vale para o seu Display de Demonstração e para os Displays das
                  suas vendas.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Prova social — galeria editorial */}
          <div className="mt-24">
            <Reveal className="max-w-3xl">
              <SectionLabel>Prova social</SectionLabel>
              <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
                Eu não quero que você acredite em mim.{" "}
                <span className="text-primary">Quero que você veja.</span>
              </h2>
            </Reveal>

            <Reveal delay={80} className="mt-12 columns-2 gap-3 sm:gap-4 lg:columns-3">
              {[
                { id: "FOTO_PROVA_01", ratio: "aspect-[4/5]" },
                { id: "FOTO_PROVA_02", ratio: "aspect-square" },
                { id: "FOTO_PROVA_03", ratio: "aspect-[3/4]" },
                { id: "FOTO_PROVA_04", ratio: "aspect-[4/3]" },
                { id: "FOTO_PROVA_05", ratio: "aspect-[9/16]" },
              ].map((p) => (
                <div key={p.id} className="mb-3 break-inside-avoid sm:mb-4">
                  <PhotoSlot id={p.id} className={`${p.ratio} rounded-3xl`} />
                </div>
              ))}
            </Reveal>
          </div>

          {/* Mentorias + Materiais */}
          <div className="mt-20 grid gap-10 border-t border-border pt-12 sm:grid-cols-2 sm:gap-14">
            <Reveal>
              <span className="font-display text-sm font-bold text-primary">04</span>
              <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                Mentorias ao vivo
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Encontros semanais para tirar suas dúvidas, analisar suas abordagens e ajudar
                você a destravar suas primeiras vendas.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <span className="font-display text-sm font-bold text-primary">05</span>
              <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                Materiais e organização
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Planilhas e ferramentas para controlar suas abordagens, vendas e ganhos.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ 05 — OFERTA ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/4 h-[420px] opacity-[0.18]"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, var(--lime), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <Reveal className="text-center">
            <h2 className="mx-auto max-w-3xl font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-5xl">
              Quanto você pagaria para aprender um método que pode colocar{" "}
              <span className="text-lime-glow">R$1.000</span> no seu bolso?
            </h2>
          </Reveal>

          <Reveal delay={80} className="mt-12">
            <div className="surface-panel rounded-[2rem] p-6 shadow-[var(--shadow-deep)] sm:p-10">
              <div className="text-center">
                <span className="inline-flex rounded-full border border-primary/30 bg-[color-mix(in_oklab,var(--lime)_8%,transparent)] px-4 py-2 text-[10px] font-semibold tracking-[0.16em] text-primary uppercase sm:text-[11px]">
                  🏅 Condição especial de Aluno Fundador
                </span>
                <p className="mt-7 text-muted-foreground">Os primeiros 100 alunos entram por:</p>
                <p className="text-lime-glow mt-2 font-display text-6xl leading-none font-extrabold sm:text-8xl">
                  R$37
                  <span className="font-display text-2xl font-bold sm:text-3xl">/mês</span>
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Próximo lote:{" "}
                  <span className="text-foreground/80 line-through decoration-muted-foreground/60">
                    R$57/mês
                  </span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  O preço de R$37 fica congelado para quem entrar como Aluno Fundador.
                </p>
              </div>

              {/* Ancoragem */}
              <div className="mt-12 border-t border-border pt-10">
                <h3 className="text-center font-display text-2xl font-extrabold sm:text-3xl">
                  E tem mais.
                </h3>

                <div className="mt-8 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-6">
                    <div className="space-y-1.5">
                      {[
                        { l: "DISPLAY INTERATIVO", v: "R$67" },
                        { l: "COMUNIDADE", v: "R$37/mês" },
                        { l: "DISPLAY DE R$67 COMO BÔNUS", v: "✓" },
                      ].map((row, i, arr) => (
                        <div key={row.l}>
                          <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-[color-mix(in_oklab,var(--ink)_60%,transparent)] px-5 py-4">
                            <span className="font-display text-xs font-bold tracking-wide sm:text-sm">
                              {row.l}
                            </span>
                            <span className="font-display font-extrabold text-primary">
                              {row.v}
                            </span>
                          </div>
                          {i < arr.length - 1 && (
                            <div className="flex justify-center py-1">
                              <ArrowDown className="h-4 w-4 text-primary/60" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 leading-relaxed text-muted-foreground">
                      Você entra na comunidade por R$37/mês e recebe 1 Display de Demonstração
                      como bônus, pagando apenas o frete.
                    </p>
                    <p className="mt-4 font-display text-lg font-extrabold sm:text-xl">
                      Você paga <span className="text-primary">R$37</span> e recebe um produto
                      vendido por <span className="text-primary">R$67</span>.
                    </p>

                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {[
                        "Método de vendas",
                        "Fornecimento exclusivo",
                        "Materiais de apoio",
                        "Mentorias ao vivo",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm">
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-6">
                    <PhotoSlot id="FOTO_DISPLAY_OFERTA" className="aspect-[4/3]" />
                    <p className="mt-5 font-display text-xl leading-snug font-extrabold sm:text-2xl">
                      Você já entra lucrando em{" "}
                      <span className="text-lime-glow">valor de produto</span>.
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col items-center">
                  <CtaButton className="max-w-md">QUERO ENTRAR NO LOTE 1</CtaButton>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Sem fidelidade. Cancele quando quiser.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 06 — GARANTIA ============ */}
      <section className="relative px-4 py-16 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionLabel>Garantia</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-[1.08] font-extrabold text-balance sm:text-4xl">
              🤝 Você não precisa assumir o risco sozinho.
            </h2>
          </Reveal>
          <Reveal delay={90} className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-[color-mix(in_oklab,var(--surface)_75%,transparent)] p-6 sm:p-9">
              <h3 className="font-display text-xl font-extrabold text-primary sm:text-2xl">
                Garantia Incondicional de 7 Dias
              </h3>
              <div className="mt-4 space-y-3 leading-relaxed text-muted-foreground">
                <p>Entrou, conheceu a comunidade e decidiu que não é para você?</p>
                <p>Peça o reembolso dentro do prazo e devolvemos seu dinheiro.</p>
                <p>Sem burocracia.</p>
              </div>

              <div className="hairline my-8" />

              <p className="font-display text-lg font-extrabold tracking-tight sm:text-xl">
                E EU VOU ALÉM.
              </p>
              <p className="mt-4 text-muted-foreground">Se você:</p>
              <ul className="mt-3 space-y-2.5">
                {[
                  "assistir às aulas;",
                  "utilizar seu Display de Demonstração;",
                  "seguir o método;",
                  "fizer as abordagens durante 7 dias;",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground">
                e mesmo assim não conseguir vender nenhum Display para recuperar o valor da
                assinatura...
              </p>
              <p className="text-lime-glow mt-6 font-display text-2xl font-extrabold sm:text-3xl">
                eu devolvo o seu dinheiro.
              </p>
              <p className="mt-2 font-display text-lg font-bold">O risco é meu.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 07 — FAQ ============ */}
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

      {/* ============ 08 — CTA FINAL ============ */}
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
              Você pode continuar esperando o próximo salário.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">
              Ou pode começar hoje a construir uma renda extra vendendo Display Interativo.
            </p>
          </Reveal>

          <Reveal delay={90} className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              { n: "1 HORA", t: "por dia" },
              { n: "R$47", t: "de lucro bruto por Display" },
              { n: "R$1.000", t: "primeiro objetivo" },
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
              🏅 Entre como Aluno Fundador por R$37/mês
            </span>
            <div className="mt-7 w-full max-w-md">
              <CtaButton>QUERO LUCRAR MEUS PRIMEIROS R$1.000</CtaButton>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Sem fidelidade • Cancele quando quiser • Garantia de 7 dias
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ 09 — FOOTER ============ */}
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
            Os resultados descritos podem variar de pessoa para pessoa de acordo com a aplicação
            das estratégias, dedicação, quantidade de abordagens realizadas e outros fatores
            individuais.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/70">
            Todos os direitos reservados — Daniel Rodrigues.
          </p>
        </div>
      </footer>

      <StickyMobileCta />
    </main>
  );
}
