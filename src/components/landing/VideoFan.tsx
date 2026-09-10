import { cn } from "@/lib/utils";

const FAN_CARDS = [
  {
    id: "fan-1",
    src: "/videos/card1.mp4",
    title: "Display Lucrativo 1",
    className: "rotate-[-12deg] -translate-y-2 -mr-6 sm:-mr-8 z-10 fan-card-1",
  },
  {
    id: "fan-2",
    src: "/videos/card2.mp4",
    title: "Display Lucrativo 2",
    className: "rotate-[-6deg] -translate-y-5 -mr-6 sm:-mr-8 z-20 fan-card-2",
  },
  {
    id: "fan-3",
    src: "/videos/card3.mp4",
    title: "Display Lucrativo 3",
    className: "rotate-0 -translate-y-8 z-30 scale-105 fan-card-3",
  },
  {
    id: "fan-4",
    src: "/videos/card4.mp4",
    title: "Display Lucrativo 4",
    className: "rotate-[6deg] -translate-y-5 -ml-6 sm:-ml-8 z-20 fan-card-4",
  },
  {
    id: "fan-5",
    src: "/videos/card5.mp4",
    title: "Display Lucrativo 5",
    className: "rotate-[12deg] -translate-y-2 -ml-6 sm:-ml-8 z-10 fan-card-5",
  },
];

export function VideoFan() {
  return (
    <div className="relative mx-auto w-full max-w-5xl select-none pt-10 pb-6">
      {/* Halo verde de destaque ao fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[260px] w-[min(650px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[80px]"
        style={{
          background: "radial-gradient(closest-side, var(--lime), transparent 70%)",
        }}
      />

      {/* Conjunto central dos 5 cards em leque */}
      <div className="relative flex items-center justify-center">
        {FAN_CARDS.map((card) => (
          <div
            key={card.id}
            className={cn(
              "group relative cursor-pointer origin-bottom transition-all duration-300 ease-out hover:z-50",
              card.className
            )}
          >
            <div className="w-28 sm:w-44 md:w-52 aspect-[9/16] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/90 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-3 group-hover:border-primary/80 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(163,230,53,0.35)]">
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
        ))}
      </div>

      <style>{`
        @keyframes fan-spread-1 {
          0% { transform: rotate(0deg) translateY(0) scale(0.95); opacity: 0; }
          100% { transform: rotate(-12deg) translateY(-8px) scale(1); opacity: 1; }
        }
        @keyframes fan-spread-2 {
          0% { transform: rotate(0deg) translateY(0) scale(0.95); opacity: 0; }
          100% { transform: rotate(-6deg) translateY(-20px) scale(1); opacity: 1; }
        }
        @keyframes fan-spread-3 {
          0% { transform: rotate(0deg) translateY(0) scale(0.95); opacity: 0; }
          100% { transform: rotate(0deg) translateY(-32px) scale(1.05); opacity: 1; }
        }
        @keyframes fan-spread-4 {
          0% { transform: rotate(0deg) translateY(0) scale(0.95); opacity: 0; }
          100% { transform: rotate(6deg) translateY(-20px) scale(1); opacity: 1; }
        }
        @keyframes fan-spread-5 {
          0% { transform: rotate(0deg) translateY(0) scale(0.95); opacity: 0; }
          100% { transform: rotate(12deg) translateY(-8px) scale(1); opacity: 1; }
        }

        .fan-card-1 {
          animation: fan-spread-1 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 80ms;
        }
        .fan-card-2 {
          animation: fan-spread-2 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 160ms;
        }
        .fan-card-3 {
          animation: fan-spread-3 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 240ms;
        }
        .fan-card-4 {
          animation: fan-spread-4 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 160ms;
        }
        .fan-card-5 {
          animation: fan-spread-5 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
          animation-delay: 80ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .fan-card-1, .fan-card-2, .fan-card-3, .fan-card-4, .fan-card-5 {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default VideoFan;