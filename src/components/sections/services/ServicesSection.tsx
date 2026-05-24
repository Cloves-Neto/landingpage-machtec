import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
  tag: string;
  chips: string[];
}

const services: Service[] = [
  {
    title: 'Diagnóstico Técnico',
    description: 'Identificação precisa de problemas com ferramentas profissionais para evitar gastos desnecessários.',
    icon: 'mdi:tools',
    image: '/images/service-2.jpeg',
    tag: 'Orçamento',
    chips: ['⭐ 5.0', 'Ágil', 'Preventivo'],
  },
  {
    title: 'Manutenção Corretiva',
    description: 'Consertos rápidos e precisos para fazer seu aparelho voltar a funcionar no mesmo dia com garantia.',
    icon: 'mdi:wrench',
    image: '/images/service-3.jpeg',
    tag: 'Mais Procurado',
    chips: ['⭐ 5.0', 'Garantia 90d', 'Rápido'],
  },
  {
    title: 'Reparo de Placas',
    description: 'Recuperação de módulos eletrônicos e painéis, evitando a troca completa de peças caras.',
    icon: 'mdi:cpu-64-bit',
    image: '/images/service-1.jpeg',
    tag: 'Eletrônica',
    chips: ['⭐ 4.9', 'Original', 'Laboratório'],
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Limpeza e revisão completa para aumentar a vida útil e prevenir falhas no seu eletrodoméstico.',
    icon: 'mdi:shield-refresh',
    image: '/images/service_preventiva.png',
    tag: 'Prevenção',
    chips: ['⭐ 5.0', 'Limpeza', 'Segurança'],
  },
  {
    title: 'Instalação Padrão',
    description: 'Instalação profissional seguindo rigorosamente os manuais e normas das fabricantes.',
    icon: 'mdi:power-plug',
    image: '/images/service_instalacao.png',
    tag: 'Padrão Fábrica',
    chips: ['⭐ 5.0', 'Norma ABNT', 'Seguro'],
  },
  {
    title: 'Peças Originais',
    description: 'Trabalhamos exclusivamente com componentes genuínos para garantir performance e durabilidade.',
    icon: 'mdi:package-variant-closed-check',
    image: '/images/service_pecas.png',
    tag: 'Garantia',
    chips: ['⭐ 5.0', 'Genuínas', 'Estoque'],
  },
];

const CARD_WIDTH = 400;
const CARD_HEIGHT = 540;
const RADIUS = 560;

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mobileIndex, setMobileIndex] = useState(0);

  const total = services.length;
  const angleStep = 360 / total;

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(next, 3500);
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
                        className={`w-full h-full rounded-[2.5rem] flex flex-col shadow-2xl transition-all duration-300 bg-white border overflow-hidden text-dark ${isActive
                          ? 'border-gray-200/80 shadow-2xl shadow-gray-300/80 scale-100'
                          : 'opacity-70 scale-95 border-gray-100'
                          }`}
                      >
                        {/* Image Area — full bleed, rounded at top via parent overflow-hidden */}
                        <div className="relative h-[48%] w-full shrink-0 overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Icon — top right, glass bg, dark icon */}
                          <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white border border-gray-200 text-dark rounded-full flex items-center justify-center backdrop-blur-md shadow-md transition-all">
                            <Icon icon={service.icon} className="text-xl" />
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-grow flex flex-col justify-between p-6 pt-5 bg-white">
                          <div>
                            {/* Title + Tag Row */}
                            <div className="flex items-center justify-between gap-4">
                              <h3 className="text-xl font-bold tracking-tight text-dark leading-snug">{service.title}</h3>
                              <span className="shrink-0 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary">
                                {service.tag}
                              </span>
                            </div>
                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-relaxed mt-2.5">{service.description}</p>
                          </div>

                          {/* Chips Row */}
                          <div className="flex flex-wrap gap-2 mt-4">
                            {service.chips.map((chip, cIdx) => (
                              <span key={cIdx} className="px-3 py-1 bg-gray-100 border border-gray-200/60 rounded-full text-xs font-semibold text-gray-600">
                                {chip}
                              </span>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <a
                            href={`https://wa.me/5511982822443?text=Olá! Gostaria de solicitar o serviço de ${encodeURIComponent(service.title)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3.5 bg-dark hover:bg-primary text-white font-bold text-center rounded-full hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base mt-5"
                          >
                            Solicitar agora
                            <Icon icon="mdi:arrow-right" className="text-base" />
                          </a>
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
                  <div className="rounded-[2.5rem] flex flex-col bg-white border border-gray-100 shadow-2xl overflow-hidden text-dark">
                    {/* Image — full bleed */}
                    <div className="relative h-48 w-full shrink-0 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 border border-gray-200 text-dark rounded-full flex items-center justify-center backdrop-blur-md shadow-md">
                        <Icon icon={service.icon} className="text-xl" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-grow flex flex-col justify-between p-6 pt-5 bg-white">
                      <div>
                        {/* Title + Tag Row */}
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-xl font-bold tracking-tight text-dark leading-snug">
                            {service.title}
                          </h3>
                          <span className="shrink-0 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary">
                            {service.tag}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mt-2.5">{service.description}</p>
                      </div>

                      {/* Chips */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {service.chips.map((chip, cIdx) => (
                          <span key={cIdx} className="px-3 py-1 bg-gray-100 border border-gray-200/60 rounded-full text-xs font-semibold text-gray-600">
                            {chip}
                          </span>
                        ))}
                      </div>

                      {/* Button */}
                      <a
                        href={`https://wa.me/5511982822443?text=Olá! Gostaria de solicitar o serviço de ${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 bg-dark hover:bg-primary text-white font-bold text-center rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm mt-5"
                      >
                        Solicitar agora
                        <Icon icon="mdi:arrow-right" className="text-base" />
                      </a>
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
