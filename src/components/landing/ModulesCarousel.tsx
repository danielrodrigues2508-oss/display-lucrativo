import { motion } from 'framer-motion';

const modulesData = [
  { id: '00', src: '/images/modulos/modulo-00.png', alt: 'Módulo 00 - Seu Display Demonstração' },
  { id: '01', src: '/images/modulos/modulo-01.png', alt: 'Módulo 01 - Sem Isso Esquece' },
  { id: '02', src: '/images/modulos/modulo-02.png', alt: 'Módulo 02 - Seus 3Mil Está Aqui' },
  { id: '03', src: '/images/modulos/modulo-03.png', alt: 'Módulo 03 - Display Lucrativo' },
  { id: '04', src: '/images/modulos/modulo-04.png', alt: 'Módulo 04 - Suas 10 Primeiras Vendas' },
  { id: '05', src: '/images/modulos/modulo-05.png', alt: 'Módulo 05 - Display Interativo Nunca Vai Saturar' },
  { id: '06', src: '/images/modulos/modulo-06.png', alt: 'Módulo 06 - Comunidade Display Lucrativo' },
  { id: '08', src: '/images/modulos/modulo-08.png', alt: 'Próximo Nível 08 - Desafio 1K em 7 Dias' },
];

export function ModulesCarousel() {
  // Duplica os 8 itens para loop contínuo infinito
  const fullCards = [...modulesData, ...modulesData];

  return (
    <div className="w-full overflow-hidden py-6 relative">
      {/* Efeito de fade nas bordas */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

      <motion.div
        className="flex gap-4 sm:gap-6 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          ease: 'linear',
          duration: 32,
          repeat: Infinity,
        }}
      >
        {fullCards.map((item, index) => (
          <div
            key={index}
            className="w-[220px] sm:w-[250px] aspect-[9/16] rounded-2xl overflow-hidden flex-shrink-0 border border-zinc-800/80 hover:border-emerald-400/80 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02]"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export const ModulesMarquee = ModulesCarousel;
export default ModulesCarousel;
