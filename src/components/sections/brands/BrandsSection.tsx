import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const brands = [
  'CONSUL', 'ELECTROLUX', 'SAMSUNG', 'LG', 'BRASTEMP', 'MIDEA'
];

export function BrandsSection() {
  return (
    <section className="py-20 bg-dark overflow-hidden relative border-y border-white/10">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 blur-3xl rounded-[100%] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 px-4"
        >
          <h3 className="text-3xl md:text-5xl font-black text-white max-w-2xl mx-auto leading-tight">
            Especialistas nas <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">principais marcas</span> do mercado
          </h3>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="w-full flex overflow-hidden mask-horizontal group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex items-center whitespace-nowrap gap-16 pr-16"
          >
            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="flex items-center gap-6 group-hover:opacity-100 opacity-60 transition-opacity"
              >
                <Icon icon="mdi:asterisk" className="text-primary/50 text-sm" />
                <span className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 uppercase tracking-tight">
                  {brand}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
