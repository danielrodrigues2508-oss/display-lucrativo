import { VideoSlot } from "./Media";

type FanItem = {
  id: string;
  x: number; // px offset final (desktop)
  y: number;
  rot: number;
  scale: number;
  z: number;
  mobile?: { x: number; y: number; rot: number; scale: number } | null;
};

const ITEMS: FanItem[] = [
  {
    id: "VIDEO_PROVA_01",
    x: -400,
    y: 46,
    rot: -15,
    scale: 0.86,
    z: 1,
    mobile: { x: -112, y: 34, rot: -14, scale: 0.78 },
  },
  {
    id: "VIDEO_PROVA_02",
    x: -240,
    y: 12,
    rot: -9,
    scale: 0.93,
    z: 2,
    mobile: { x: -58, y: 10, rot: -7, scale: 0.88 },
  },
  {
    id: "VIDEO_PROVA_03",
    x: -80,
    y: -8,
    rot: -3,
    scale: 1,
    z: 4,
    mobile: null,
  },
  {
    id: "VIDEO_PROVA_04",
    x: 80,
    y: -8,
    rot: 3,
    scale: 1,
    z: 4,
    mobile: { x: 0, y: -6, rot: 0, scale: 1 },
  },
  {
    id: "VIDEO_PROVA_05",
    x: 240,
    y: 12,
    rot: 9,
    scale: 0.93,
    z: 2,
    mobile: { x: 58, y: 10, rot: 7, scale: 0.88 },
  },
  {
    id: "VIDEO_PROVA_07",
    x: 400,
    y: 46,
    rot: 15,
    scale: 0.86,
    z: 1,
    mobile: { x: 112, y: 34, rot: 14, scale: 0.78 },
  },
];

export function VideoFan() {
  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[1100px] sm:h-[360px] lg:h-[440px]">
      {/* halo verde muito sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[min(760px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[90px]"
        style={{ background: "radial-gradient(closest-side, var(--lime), transparent 70%)" }}
      />

      {ITEMS.map((item, i) => {
        const hiddenOnMobile = item.mobile === null;
        const m = item.mobile ?? { x: item.x, y: item.y, rot: item.rot, scale: item.scale };
        return (
          <div
            key={item.id}
            className={`animate-fan-in absolute top-1/2 left-1/2 ${hiddenOnMobile ? "hidden lg:block" : ""}`}
            style={
              {
                zIndex: item.z,
                animationDelay: `${80 + Math.abs(i - 2.5) * 70}ms`,
                "--fan-x": `${m.x}px`,
                "--fan-y": `${m.y}px`,
                "--fan-rot": `${m.rot}deg`,
                "--fan-scale": `${m.scale}`,
                "--fan-x-lg": `${item.x}px`,
                "--fan-y-lg": `${item.y}px`,
                "--fan-rot-lg": `${item.rot}deg`,
                "--fan-scale-lg": `${item.scale}`,
                "--fan-transform":
                  "translate(-50%, -50%) translate(var(--fx), var(--fy)) rotate(var(--fr)) scale(var(--fs))",
              } as React.CSSProperties
            }
          >
            <div className="fan-slot">
              <VideoSlot
                id={item.id}
                className="aspect-[9/16] w-[130px] shadow-[var(--shadow-deep)] sm:w-[150px] lg:w-[190px]"
              />
            </div>
          </div>
        );
      })}

      <style>{`
        .animate-fan-in { --fx: var(--fan-x); --fy: var(--fan-y); --fr: var(--fan-rot); --fs: var(--fan-scale); }
        @media (min-width: 1024px) {
          .animate-fan-in { --fx: var(--fan-x-lg); --fy: var(--fan-y-lg); --fr: var(--fan-rot-lg); --fs: var(--fan-scale-lg); }
        }
      `}</style>
    </div>
  );
}
