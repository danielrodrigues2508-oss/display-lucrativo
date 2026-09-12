import { useEffect, useRef, useState } from "react";
import { ArrowDown, Minus, Plus } from "lucide-react";
import { LUCRO_POR_DISPLAY, brl } from "@/lib/landing";
import { cn } from "@/lib/utils";

function useAnimatedNumber(value: number) {
  const [display, setDisplay] = useState(value);
  const raf = useRef<number | null>(null);
  const from = useRef(value);

  useEffect(() => {
    const start = performance.now();
    const initial = from.current;
    const delta = value - initial;
    const duration = 450;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(initial + delta * eased));
      if (t < 1) raf.current = requestAnimationFrame(tick);
      else from.current = value;
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      from.current = value;
    };
  }, [value]);

  return display;
}

function Stepper({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
}) {
  const btn =
    "flex h-12 w-12 items-center justify-center rounded-full border border-border bg-[var(--surface-2)] text-foreground transition-colors hover:border-primary/60 hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground";
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs sm:text-sm font-bold tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </span>
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-[color-mix(in_oklab,var(--ink)_70%,transparent)] p-2">
        <button
          type="button"
          aria-label={`Diminuir ${label}`}
          className={btn}
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="font-display text-3xl font-extrabold tabular-nums">{value}</span>
        <button
          type="button"
          aria-label={`Aumentar ${label}`}
          className={btn}
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

const PRESETS = [
  { d: 1, days: 26 },
  { d: 2, days: 26 },
  { d: 3, days: 26 },
  { d: 5, days: 26 },
  { d: 10, days: 26 },
];

export function Simulator() {
  const [perDay, setPerDay] = useState(3);
  const [days, setDays] = useState(26);

  const total = perDay * days;
  const profit = total * LUCRO_POR_DISPLAY;
  const animTotal = useAnimatedNumber(total);
  const animProfit = useAnimatedNumber(profit);

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--lime), transparent 70%)" }}
      />
      <div className="surface-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-[var(--shadow-deep)]">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-primary uppercase">
            Simulador de lucro
          </span>
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_var(--lime)]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
          <Stepper
            label="Displays por dia"
            value={perDay}
            onChange={setPerDay}
            min={1}
            max={30}
          />
          <Stepper label="Dias no mês" value={days} onChange={setDays} min={1} max={30} />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-3">
          <div className="rounded-2xl border border-border bg-[color-mix(in_oklab,var(--ink)_70%,transparent)] p-3 sm:p-5">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-muted-foreground uppercase">
              Displays vendidos
            </p>
            <p className="mt-1 font-display text-2xl font-extrabold tabular-nums sm:mt-2 sm:text-4xl">{animTotal}</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-primary/35 bg-[color-mix(in_oklab,var(--lime)_8%,var(--ink))] p-3 sm:p-5">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.18em] text-primary/90 uppercase">
              Lucro bruto
            </p>
            <p className="text-lime-glow mt-1 font-display text-2xl font-extrabold tabular-nums sm:mt-2 sm:text-4xl lg:text-5xl">
              {brl(animProfit)}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-primary/30 bg-[color-mix(in_oklab,var(--lime)_7%,var(--ink))] p-4">
          <p className="font-display text-base font-extrabold sm:text-lg">
            Cada Display vendido = <span className="text-lime-glow">R$ 52 a R$ 62</span> de lucro bruto.
          </p>
        </div>

        <div className="mt-3 rounded-2xl border border-border bg-[color-mix(in_oklab,var(--surface-2)_80%,transparent)] p-4">
          <p className="text-xs sm:text-sm font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Meta Recomendada
          </p>
          <p className="mt-1 font-display text-lg font-extrabold tabular-nums sm:text-xl">
            78 Displays (3/dia em 26 dias) → <span className="text-lime-glow">R$ 3.666</span>
          </p>
          <p className="mt-1 text-sm text-zinc-300">
            Mais de R$ 3.600 limpos no seu bolso dedicando 1 a 2 horas no fim do dia.
          </p>
        </div>

        <div className="mt-6">
          <p className="text-xs sm:text-sm font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Simulação rápida (26 dias úteis)
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {PRESETS.map((p) => {
              const active = p.d === perDay && p.days === days;
              return (
                <button
                  key={`${p.d}x${p.days}`}
                  type="button"
                  onClick={() => {
                    setPerDay(p.d);
                    setDays(p.days);
                  }}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold tabular-nums transition-all duration-300 cursor-pointer",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-[var(--surface-2)] text-muted-foreground hover:border-primary/50 hover:text-foreground",
                  )}
                >
                  {p.d} × {p.days}d ={" "}
                  <span className={active ? "" : "text-foreground"}>
                    {brl(p.d * p.days * LUCRO_POR_DISPLAY)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Micro-CTA de Conversão Secundário */}
        <div className="mt-6 pt-2">
          <a
            href="#oferta"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("oferta") || document.getElementById("checkout");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/50 bg-primary/10 px-6 py-4 font-display text-sm font-extrabold text-primary shadow-[0_0_30px_-10px_var(--lime)] transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_50px_-8px_var(--lime)] hover:scale-[1.02] sm:text-base cursor-pointer"
          >
            <span>QUERO COMEÇAR A LUCRAR AGORA →</span>
          </a>
        </div>

        <p className="mt-4 text-xs text-muted-foreground/80 text-center">
          Simulação baseada na quantidade de vendas realizadas. Os resultados reais podem variar.
        </p>
      </div>
    </div>
  );
}
