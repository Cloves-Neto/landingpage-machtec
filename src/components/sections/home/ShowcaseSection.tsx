import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Center image (Fridge) scales up massively to cover screen
  const centerScale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 3, 10]);
  const centerOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Side images move away and fade out
  const leftX = useTransform(scrollYProgress, [0, 0.4], [0, -500]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  const rightX = useTransform(scrollYProgress, [0, 0.4], [0, 500]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Text rising up effect
  const textY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.4], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="h-[300vh] relative bg-dark">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background dark grid */}
        <div className="absolute inset-0 bg-dark z-0">
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        {/* Text that rises and fades */}
        <motion.div 
          style={{ y: textY, opacity: textOpacity }}
          className="absolute top-1/4 z-30 text-center w-full px-6"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            A Solução <span className="text-primary">Definitiva</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Da manutenção preventiva aos reparos mais complexos.
          </p>
        </motion.div>

        {/* The Appliances Container */}
        <div className="relative w-full max-w-6xl mx-auto h-[60vh] flex items-center justify-center mt-20 z-10">
          
          {/* Left: Washer */}
          <motion.div 
            style={{ x: leftX, opacity: leftOpacity }}
            className="absolute left-4 md:left-12 w-1/3 md:w-1/4 aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10"
          >
            <img src="/src/assets/service-washer.png" alt="Máquina de Lavar" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-dark/40"></div>
          </motion.div>

          {/* Right: Microwave */}
          <motion.div 
            style={{ x: rightX, opacity: rightOpacity }}
            className="absolute right-4 md:right-12 w-1/3 md:w-1/4 aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-10"
          >
            <img src="/src/assets/service-microwave.png" alt="Micro-ondas" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-dark/40"></div>
          </motion.div>

          {/* Center: Fridge (The one that zooms in) */}
          <motion.div 
            style={{ scale: centerScale, opacity: centerOpacity }}
            className="relative w-1/2 md:w-1/3 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(214,40,40,0.3)] border-2 border-primary/50 z-20 origin-center"
          >
            <img src="/src/assets/service-fridge.png" alt="Geladeira" className="w-full h-full object-cover" />
          </motion.div>
          
        </div>
        
        {/* An overlay that appears at the very end of the scroll to transition cleanly to the next section */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]) }}
          className="absolute inset-0 bg-white z-40 pointer-events-none"
        />
      </div>
    </section>
  );
}
