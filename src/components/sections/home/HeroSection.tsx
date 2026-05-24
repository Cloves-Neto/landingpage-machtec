import { motion } from 'motion/react';
import { Icon } from '@iconify/react';
import { useRef, useState, useEffect } from 'react';
import { SaturnRingText } from '../../shared/SaturnRingText';

const stats = [
  { value: '+21', label: 'Anos de Mercado', icon: 'mdi:calendar-star' },
  { value: '+30k', label: 'Atendimentos', icon: 'mdi:check-decagram' },
  { value: 'Até 90 dias', label: 'Garantia', icon: 'mdi:shield-check' },
  { value: 'Ágil', label: 'Atendimento', icon: 'mdi:lightning-bolt' },
];

export function HeroSection() {
  const ringContainerRef = useRef<HTMLDivElement>(null);
  const [ringSize, setRingSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ringContainerRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const w = Math.round(rect.width  || el.offsetWidth);
      const h = Math.round(rect.height || el.offsetHeight);
      if (w > 0) setRingSize({ w, h });
    };

    measure(); // initial read
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-dark overflow-hidden flex flex-col">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center max-w-8xl md:px-38 mx-auto px-6 md:px-0 pt-28 md:pt-36 pb-8 gap-10 w-full">

        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.75rem,6vw,5.5rem)] font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Assistência Técnica <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Rápida e Garantida.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg font-medium leading-relaxed"
          >
            Atendimento rápido em domicílio, técnicos altamente qualificados e garantia total no conserto das suas máquinas desde <span className="text-white font-bold">2004</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-row gap-3 justify-center md:justify-start"
          >
            <a
              href="#solucoes"
              className="px-6 py-3 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group text-sm md:text-base"
            >
              <Icon icon="mdi:apps" className="text-base" />
              Soluções
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 text-white rounded-full font-bold border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <Icon icon="logos:whatsapp-icon" className="text-lg" />
              WhatsApp
            </a>
          </motion.div>
        </div>

      </div>

      {/* ── Right side: Image + Saturn Ring (shared center) ─────────── */}
      <motion.div
        ref={ringContainerRef}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="hidden md:flex absolute pointer-events-none"
        style={{
          right: '15%',
          top: 0,
          bottom: '120px',          // above stats bar
          width: 'min(46vw, 560px)',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          zIndex: 5,
        }}
      >
        {/* Saturn Ring canvases (back z:0, front z:20) */}
        {ringSize.w > 0 && (
          <SaturnRingText
            width={ringSize.w}
            height={ringSize.h}
            radius={Math.min(ringSize.w, ringSize.h) * 0.42}
          />
        )}

        {/* Technician — bottom of container, z:10, between back and front canvas */}
        <img
          src="/images/hero-tecnico.png"
          alt="Técnico Especializado"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full object-contain object-bottom drop-shadow-2xl"
          style={{ zIndex: 10 }}
        />
      </motion.div>

      {/* Stats Bar */}
      <div className="relative z-20 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className={`flex items-center gap-3 ${i < stats.length - 1 ? 'md:border-r md:border-white/10 md:pr-8' : ''} ${i > 0 ? 'md:pl-8' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon icon={stat.icon} className="text-2xl text-primary" />
                </div>
                <div>
                  <p className="text-white font-black text-xl leading-tight">{stat.value}</p>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
