import { cn } from "@/lib/utils";

/**
 * ========= COMO SUBSTITUIR PELOS ARQUIVOS REAIS =========
 * 1. Coloque os arquivos em `public/media/` (ex: public/media/VIDEO_PROVA_01.mp4).
 * 2. Preencha o caminho no mapa abaixo (ex: VIDEO_PROVA_01: "/media/VIDEO_PROVA_01.mp4").
 * 3. Pronto — o placeholder some e o arquivo real aparece automaticamente.
 */
export const MEDIA: Record<string, string | null> = {
  VIDEO_PROVA_01: null,
  VIDEO_PROVA_02: null,
  VIDEO_PROVA_03: null,
  VIDEO_PROVA_04: null,
  VIDEO_PROVA_05: null,
  VIDEO_PROVA_06: null,
  VIDEO_PROVA_07: null,

  FOTO_PROVA_01: null,
  FOTO_PROVA_02: null,
  FOTO_PROVA_03: null,
  FOTO_PROVA_04: null,
  FOTO_PROVA_05: null,

  FOTO_DISPLAY_DEMONSTRACAO: null,
  FOTO_ABORDAGEM: null,
  FOTO_PEDIDOS_PRODUCAO: null,
  FOTO_DISPLAY_OFERTA: null,
};

function Placeholder({ id }: { id: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[var(--surface)] p-3 text-center">
      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
      <span className="font-display text-[10px] leading-tight font-semibold tracking-[0.16em] text-muted-foreground uppercase sm:text-[11px]">
        {id}
      </span>
    </div>
  );
}

export function VideoSlot({ id, className }: { id: string; className?: string }) {
  const src = MEDIA[id];
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-[var(--surface)]",
        className,
      )}
    >
      {src ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={id}
          className="h-full w-full object-cover"
        />
      ) : (
        <Placeholder id={id} />
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 ring-inset" />
    </div>
  );
}

export function PhotoSlot({
  id,
  className,
  alt,
}: {
  id: string;
  className?: string;
  alt?: string;
}) {
  const src = MEDIA[id];
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-[var(--surface)]",
        className,
      )}
    >
      {src ? (
        <img src={src} alt={alt ?? id} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <Placeholder id={id} />
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 ring-inset" />
    </div>
  );
}
