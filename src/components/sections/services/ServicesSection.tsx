import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const services = [
  {
    title: 'Diagnóstico Técnico',
    description: 'Identificação precisa de problemas com ferramentas profissionais para evitar gastos desnecessários.',
    icon: 'mdi:tools',
    image: '/images/service-2.jpeg',
  },
  {
    title: 'Manutenção Corretiva',
    description: 'Consertos rápidos e precisos para fazer seu aparelho voltar a funcionar no mesmo dia.',
    icon: 'mdi:wrench',
    image: '/images/service-3.jpeg',
  },
  {
    title: 'Reparo de Placas',
    description: 'Recuperação de módulos eletrônicos e painéis, evitando a troca completa de peças caras.',
    icon: 'mdi:cpu-64-bit',
    image: '/images/service-1.jpeg',
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Limpeza e revisão completa para aumentar a vida útil e prevenir falhas no seu eletrodoméstico.',
    icon: 'mdi:shield-refresh',
    image: '/images/service_preventiva.png',
  },
  {
    title: 'Instalação Padrão',
    description: 'Instalação profissional seguindo rigorosamente os manuais e normas das fabricantes.',
    icon: 'mdi:power-plug',
    image: '/images/service_instalacao.png',
  },
  {
    title: 'Peças Originais',
    description: 'Trabalhamos exclusivamente com componentes genuínos para garantir performance e durabilidade.',
    icon: 'mdi:package-variant-closed-check',
    image: '/images/service_pecas.png',
  },
];

const CARD_WIDTH = 420;
const CARD_HEIGHT = 500;
const RADIUS = 560;

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  // Mobile carousel
  const [mobileIndex, setMobileIndex] = useState(0);

  const total = services.length;
  const angleStep = 360 / total;

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-rotate
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [isPlaying, next]);

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/60 to-white pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-dark mb-6"
          >
            Serviços com Precisão{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Técnica</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Nossa equipe técnica é formada por especialistas que resolvem o problema do seu aparelho na primeira visita.
          </motion.p>
        </div>

        {/* ── DESKTOP 3D Carousel ── */}
        <div className="hidden md:block relative">
          {/* Scene */}
          <div
            className="relative mx-auto"
            style={{ width: CARD_WIDTH, height: CARD_HEIGHT + 80 }}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {/* 3D Stage */}
            <div
              className="absolute inset-0"
              style={{ perspective: '1100px', perspectiveOrigin: '50% 50%' }}
            >
              <div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {services.map((service, idx) => {
                  const angle = (idx - activeIndex) * angleStep;
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.sin(rad) * RADIUS;
                  const z = Math.cos(rad) * RADIUS - RADIUS;
                  const isActive = idx === activeIndex;
                  const opacity = 1;
                  const scale = isActive ? 1 : Math.max(0.72, (Math.cos(rad) + 1) / 2 * 0.4 + 0.6);

                  return (
                    <div
                      key={idx}
                      onClick={() => { setActiveIndex(idx); setIsPlaying(false); }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        width: CARD_WIDTH,
                        height: CARD_HEIGHT,
                        marginLeft: -CARD_WIDTH / 2,
                        transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                        opacity,
                        transition: 'transform 0.7s cubic-bezier(0.25,0.8,0.25,1), opacity 0.7s ease',
                        cursor: isActive ? 'default' : 'pointer',
                        zIndex: isActive ? 10 : Math.round(opacity * 8),
                      }}
                    >
                      <div
                        className={`w-full h-full rounded-3xl overflow-hidden border flex flex-col shadow-xl transition-shadow duration-300 ${isActive
                          ? 'border-gray-200 shadow-2xl shadow-gray-300/50'
                          : 'border-gray-100 shadow-lg'
                          }`}
                      >
                        {/* Image Area */}
                        <div className="relative h-[55%] shrink-0 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Subtle overlay */}
                          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
                          {/* Icon — top left, white bg, red icon */}
                          <div className="absolute top-3 left-3 w-9 h-9 bg-white rounded-sm flex items-center justify-center shadow-md">
                            <Icon icon={service.icon} className="text-xl text-red-600" />
                          </div>
                        </div>

                        {/* Text Area */}
                        <div className="flex-1 bg-white px-6 py-5 flex flex-col justify-center">
                          <h3 className="text-xl font-black mb-2 leading-snug bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{service.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                          {isActive && (
                            <div className="h-0.5 w-10 rounded-full bg-primary mt-3" />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={() => { prev(); setIsPlaying(false); }}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dark hover:bg-gray-50 hover:text-primary hover:border-primary transition-all shadow-md active:scale-95"
            >
              <Icon icon="mdi:chevron-left" className="text-2xl" />
            </button>

            <div className="flex gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setActiveIndex(idx); setIsPlaying(false); }}
                  className={`transition-all duration-300 rounded-full ${idx === activeIndex ? 'w-8 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'
                    }`}
                  aria-label={`Serviço ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => { next(); setIsPlaying(false); }}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dark hover:bg-gray-50 hover:text-primary hover:border-primary transition-all shadow-md active:scale-95"
            >
              <Icon icon="mdi:chevron-right" className="text-2xl" />
            </button>
          </div>
        </div>

        {/* ── MOBILE Carousel ── */}
        <div className="md:hidden relative z-10 w-full">
          <div className="overflow-hidden w-full pb-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
            >
              {services.map((service, idx) => (
                <div key={idx} className="w-full shrink-0 px-4">
                  <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl flex flex-col bg-white">
                    {/* Image */}
                    <div className="relative h-48 shrink-0 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/35" />
                      {/* Icon */}
                      <div className="absolute top-3 left-3 w-10 h-10 bg-white rounded-sm flex items-center justify-center shadow-md">
                        <Icon icon={service.icon} className="text-xl text-red-600" />
                      </div>
                    </div>
                    {/* Text */}
                    <div className="px-6 py-5">
                      <h3 className="text-xl font-black mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-6">
            <button
              onClick={() => setMobileIndex((p) => (p - 1 + total) % total)}
              className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dark hover:text-primary hover:border-primary transition-all shadow-md active:scale-95"
            >
              <Icon icon="mdi:chevron-left" className="text-3xl" />
            </button>
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${idx === mobileIndex ? 'w-8 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-gray-200'}`}
                  aria-label={`Ir para o serviço ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setMobileIndex((p) => (p + 1) % total)}
              className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dark hover:text-primary hover:border-primary transition-all shadow-md active:scale-95"
            >
              <Icon icon="mdi:chevron-right" className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
