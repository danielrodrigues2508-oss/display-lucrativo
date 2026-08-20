import { PhotoSlot } from "./Media";

const PHOTOS = [
  "FOTO_PROVA_01",
  "FOTO_PROVA_02",
  "FOTO_PROVA_03",
  "FOTO_PROVA_04",
  "FOTO_PROVA_05",
];

/**
 * Carrossel horizontal automático (marquee) com swipe manual no mobile.
 * Loop infinito duplicando a lista.
 */
export function ProofCarousel() {
  const loop = [...PHOTOS, ...PHOTOS, ...PHOTOS]; // Triple for smoother loop at high speeds

  return (
    <div className="proof-carousel relative -mx-4 overflow-hidden sm:-mx-6">
      <div className="proof-track flex w-max gap-3 overflow-x-auto px-4 pb-2 sm:gap-4 sm:px-6">
        {loop.map((id, i) => (
          <div
            key={`${id}-${i}`}
            className="w-[74vw] shrink-0 snap-center sm:w-[42vw] lg:w-[300px]"
          >
            <PhotoSlot id={id} className="aspect-[4/5] rounded-3xl" />
          </div>
        ))}
      </div>

      <style>{`
        .proof-track {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          animation: proof-marquee 12s linear infinite;
        }
        .proof-track::-webkit-scrollbar { display: none; }
        /* Removed hover pause to ensure continuous autoplay */
        @keyframes proof-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .proof-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
