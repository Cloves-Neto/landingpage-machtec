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
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-dark overflow-hidden flex flex-col">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* ══════════════════════════════════════════
          MOBILE LAYOUT (hidden on md+)
      ══════════════════════════════════════════ */}
      <div className="md:hidden flex-1 flex flex-col relative">

        {/* Hero image — full bleed, fades at bottom */}
        <div className="relative w-full h-[55vmax] max-h-[70vh] overflow-hidden pt-16">
          <img
            src="/images/hero-tecnico.png"
            alt="Técnico MachTec"
            className="w-full h-full object-cover object-top"
          />
          {/* bottom fade into dark */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark" />
          {/* top overlay para a navbar */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-dark/60 to-transparent" />

          {/* ── Floating badges — bottom right ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 right-4 flex flex-col items-end gap-1.5"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/40">
              <Icon icon="mdi:shield-check" className="text-xs" />
              Técnico Mariner
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-semibold tracking-wide">
              Assistência Técnica MachTec
            </span>
          </motion.div>

          {/* ── Experience badge top-right ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-20 right-4 w-16 h-16 rounded-2xl bg-primary flex flex-col items-center justify-center shadow-xl shadow-primary/40"
          >
            <span className="text-white font-black text-xl leading-none">21</span>
            <span className="text-white/80 text-[8px] font-bold uppercase tracking-wider text-center leading-tight">anos<br/>de exp.</span>
          </motion.div>
        </div>

        {/* ── Text content below image ── */}
        <div className="relative z-10 px-6 pt-2 pb-6 flex flex-col items-center text-center">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[2.4rem] font-black text-white leading-[1.05] tracking-tight mb-3"
          >
            Assistência Técnica{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Rápida e Garantida.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs"
          >
            <span className="text-white font-bold">Mariner</span> é o responsável técnico — formado em{' '}
            <span className="text-white font-semibold">linha branca</span>, especializado em manutenção de eletrodomésticos e refrigeração.
            Atendimento em domicílio desde <span className="text-white font-bold">2004</span>.
          </motion.p>


          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-3 w-full"
          >
            <a
              href="#solucoes"
              className="flex-1 py-3.5 bg-primary text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
            >
              <Icon icon="mdi:apps" />
              Soluções
            </a>
            <a
              href="https://wa.me/5511982822443"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 bg-[#25D366] text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-green-500/30"
            >
              <Icon icon="logos:whatsapp-icon" className="text-base" />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP LAYOUT (hidden on mobile)
      ══════════════════════════════════════════ */}
      <div className="hidden md:flex flex-1 flex-col">
        <div className="flex-1 flex flex-row items-center max-w-8xl md:px-38 mx-auto md:px-0 pt-36 pb-8 gap-10 w-full">

          {/* Left: Text */}
          <div className="w-1/2 relative z-10 flex flex-col items-start text-left px-12">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-semibold text-gray-300 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Técnico Mariner · Assistência MachTec
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(2.75rem,5.5vw,5.5rem)] font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              Assistência Técnica <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Rápida e Garantida.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-lg font-medium leading-relaxed"
            >
              <span className="text-white font-bold">Mariner</span> é o responsável técnico — formado em{' '}
              <span className="text-white font-semibold">linha branca</span> e especializado em manutenção de eletrodomésticos e refrigeração. Atendimento em domicílio com garantia desde{' '}
              <span className="text-white font-bold">2004</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-row gap-4"
            >
              <a
                href="#solucoes"
                className="px-7 py-3.5 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all flex items-center gap-2 group text-base"
              >
                <Icon icon="mdi:apps" />
                Soluções
              </a>
              <a
                href="https://wa.me/5511982822443"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-white/5 text-white rounded-full font-bold border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all flex items-center gap-2 text-base"
              >
                <Icon icon="logos:whatsapp-icon" className="text-lg" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right: invisible anchor for ring sizing */}
          <div className="w-1/2 self-stretch" />
        </div>
      </div>

      {/* ── Right side: Image + Saturn Ring (desktop only) ── */}
      <motion.div
        ref={ringContainerRef}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="hidden md:flex absolute pointer-events-none"
        style={{
          right: '15%',
          top: 0,
          bottom: '120px',
          width: 'min(46vw, 560px)',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          zIndex: 5,
        }}
      >
        {ringSize.w > 0 && (
          <SaturnRingText
            width={ringSize.w}
            height={ringSize.h}
            radius={Math.min(ringSize.w, ringSize.h) * 0.42}
          />
        )}
        <img
          src="/images/hero-tecnico.png"
          alt="Técnico Especializado"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full object-contain object-bottom drop-shadow-2xl"
          style={{ zIndex: 10 }}
        />
      </motion.div>

      {/* Stats Bar */}
      <div className="relative z-20 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className={`flex items-center gap-3 ${i < stats.length - 1 ? 'md:border-r md:border-white/10 md:pr-8' : ''} ${i > 0 ? 'md:pl-8' : ''}`}
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon icon={stat.icon} className="text-xl md:text-2xl text-primary" />
                </div>
                <div>
                  <p className="text-white font-black text-lg md:text-xl leading-tight">{stat.value}</p>
                  <p className="text-gray-500 text-[10px] md:text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
