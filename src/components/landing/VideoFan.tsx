import { cn } from "@/lib/utils";

type FanCard = {
  id: string;
  src: string;
  title: string;
  x: number; // px offset final (desktop)
  y: number;
  rot: number;
  scale: number;
  z: number;
  mobile?: { x: number; y: number; rot: number; scale: number } | null;
};

const CARDS: FanCard[] = [
  {
    id: "card-1",
    src: "/videos/card1.mp4",
    title: "Display Lucrativo 1",
    x: -390,
    y: 44,
    rot: -15,
    scale: 0.88,
    z: 1,
    mobile: { x: -110, y: 32, rot: -14, scale: 0.78 },
  },
  {
    id: "card-2",
    src: "/videos/card2.mp4",
    title: "Display Lucrativo 2",
    x: -235,
    y: 12,
    rot: -9,
    scale: 0.94,
    z: 2,
    mobile: { x: -56, y: 10, rot: -7, scale: 0.88 },
  },
  {
    id: "card-3",
    src: "/videos/card3.mp4",
    title: "Display Lucrativo 3",
    x: -78,
    y: -8,
    rot: -3,
    scale: 1,
    z: 4,
    mobile: null,
  },
  {
    id: "card-4",
    src: "/videos/card4.mp4",
    title: "Display Lucrativo 4",
    x: 78,
    y: -8,
    rot: 3,
    scale: 1,
    z: 4,
    mobile: { x: 0, y: -6, rot: 0, scale: 1 },
  },
  {
    id: "card-5",
    src: "/videos/card5.mp4",
    title: "Display Lucrativo 5",
    x: 235,
    y: 12,
    rot: 9,
    scale: 0.94,
    z: 2,
    mobile: { x: 56, y: 10, rot: 7, scale: 0.88 },
  },
  {
    id: "card-6",
    src: "/videos/card6.mp4",
    title: "Display Lucrativo 6",
    x: 390,
    y: 44,
    rot: 15,
    scale: 0.88,
    z: 1,
    mobile: { x: 110, y: 32, rot: 14, scale: 0.78 },
  },
];

export function VideoFan() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[1100px] select-none sm:h-[360px] lg:h-[440px]">
      {/* Halo verde sutil no fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[min(760px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[90px]"
        style={{
          background: "radial-gradient(closest-side, var(--lime), transparent 70%)",
        }}
      />

      {CARDS.map((card, i) => {
        const hiddenOnMobile = card.mobile === null;
        const m = card.mobile ?? {
          x: card.x,
          y: card.y,
          rot: card.rot,
          scale: card.scale,
        };

        return (
          <div
            key={card.id}
            className={cn(
              "group animate-fan-in absolute top-1/2 left-1/2 cursor-pointer transition-[z-index] duration-200 hover:z-50",
              hiddenOnMobile ? "hidden lg:block" : ""
            )}
            style={
              {
                zIndex: card.z,
                animationDelay: `${80 + Math.abs(i - 2.5) * 70}ms`,
                "--fan-x": `${m.x}px`,
                "--fan-y": `${m.y}px`,
                "--fan-rot": `${m.rot}deg`,
                "--fan-scale": `${m.scale}`,
                "--fan-x-lg": `${card.x}px`,
                "--fan-y-lg": `${card.y}px`,
                "--fan-rot-lg": `${card.rot}deg`,
                "--fan-scale-lg": `${card.scale}`,
                "--fan-transform":
                  "translate(-50%, -50%) translate(var(--fx), var(--fy)) rotate(var(--fr)) scale(var(--fs))",
              } as React.CSSProperties
            }
          >
            {/* Card com elevação, escala suave e iluminação ao passar o mouse */}
            <div className="aspect-[9/16] w-[130px] rounded-2xl border border-border/80 bg-surface/90 shadow-[var(--shadow-deep)] backdrop-blur-xs transition-all duration-300 ease-out group-hover:-translate-y-5 group-hover:scale-110 group-hover:border-primary/70 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(163,230,53,0.35)] sm:w-[150px] lg:w-[190px]">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black">
                <video
                  src={card.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  disablePictureInPicture
                  preload="auto"
                  aria-label={card.title}
                  className="h-full w-full rounded-2xl object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 ring-inset group-hover:ring-primary/40" />
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        .animate-fan-in {
          --fx: var(--fan-x);
          --fy: var(--fan-y);
          --fr: var(--fan-rot);
          --fs: var(--fan-scale);
        }
        @media (min-width: 1024px) {
          .animate-fan-in {
            --fx: var(--fan-x-lg);
            --fy: var(--fan-y-lg);
            --fr: var(--fan-rot-lg);
            --fs: var(--fan-scale-lg);
          }
        }
      `}</style>
    </div>
  );
}
