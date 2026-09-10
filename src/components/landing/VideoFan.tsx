import { motion } from "framer-motion";

const heroCards = [
  { id: 1, src: "/images/hero-1.jpg", rotate: -18, y: 35, x: 25 },
  { id: 2, src: "/images/hero-2.jpg", rotate: -10, y: 12, x: 10 },
  { id: 3, src: "/images/hero-3.jpg", rotate: -3, y: 0, x: 0 },
  { id: 4, src: "/images/hero-4.jpg", rotate: 4, y: 0, x: 0 },
  { id: 5, src: "/images/hero-5.jpg", rotate: 11, y: 12, x: -10 },
  { id: 6, src: "/images/hero-6.jpg", rotate: 19, y: 35, x: -25 },
];

export function HeroFan() {
  return (
    <div className="relative flex items-center justify-center pt-8 pb-4 overflow-visible w-full max-w-5xl mx-auto h-[320px] sm:h-[380px] md:h-[420px]">
      <div className="flex items-center justify-center -space-x-10 sm:-space-x-12 md:-space-x-16">
        {heroCards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ rotate: 0, y: 40, opacity: 0, scale: 0.9 }}
            animate={{
              rotate: card.rotate,
              y: card.y,
              x: card.x,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.08,
              y: card.y - 15,
              zIndex: 50,
              transition: { duration: 0.2 },
            }}
            style={{ zIndex: i + 1 }}
            className="w-28 sm:w-36 md:w-44 aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 flex-shrink-0 cursor-pointer origin-bottom"
          >
            <img
              src={card.src}
              alt="Display interativo em operação"
              className="w-full h-full object-cover select-none pointer-events-none"
              loading="eager"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const VideoFan = HeroFan;
export default HeroFan;