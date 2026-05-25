import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from '@iconify/react';

type ServiceType = 'geladeiras' | 'lavadoras' | 'microondas';

const serviceDetails = {
  geladeiras: {
    title: 'Geladeiras & Freezers',
    description: 'Manutenção completa em refrigeração. Desde diagnóstico preciso de compressores e recarga de gás até substituição de termostatos.',
    features: ['Substituição de Termostato', 'Recarga de Gás', 'Diagnóstico de Compressor', 'Revisão Elétrica'],
    image: '/images/geladeira-freezer.jpeg',
  },
  lavadoras: {
    title: 'Lavadoras & Secadoras',
    description: 'Consertos rápidos para que sua lavanderia não pare. Trabalhamos com modelos Lava e Seca, abertura frontal e superior.',
    features: ['Troca de Rolamentos', 'Alinhamento Mecânico', 'Substituição de Atuador', 'Desobstrução de Bombas'],
    image: '/images/lava-e-seca.jpeg',
  },
  microondas: {
    title: 'Micro-ondas',
    description: 'Assistência técnica especializada em micro-ondas residenciais, garantindo aquecimento rápido e seguro.',
    features: ['Troca de Magnetron', 'Reparo de Teclado', 'Substituição de Fusível', 'Manutenção de Trafo'],
    image: '/images/microondas.jpeg',
  },
};

export function ApplianceTabsSection() {
  const [activeTab, setActiveTab] = useState<ServiceType>('geladeiras');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const tabs: ServiceType[] = ['geladeiras', 'lavadoras', 'microondas'];

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    const currentIdx = tabs.indexOf(activeTab);

    if (isLeftSwipe) {
      const nextIdx = (currentIdx + 1) % tabs.length;
      setActiveTab(tabs[nextIdx]);
    } else if (isRightSwipe) {
      const prevIdx = (currentIdx - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIdx]);
    }
  };

  return (
    <section id="solucoes" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 text-dark"
          >
            Soluções Específicas <br /> para Cada <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Aparelho</span>
          </motion.h2>
        </div>

        {/* Grid Flexbox sem o card wrapper */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:h-[550px]">

          {/* Menu Lateral - Row no mobile, Col no desktop */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-4 lg:h-full justify-between lg:justify-start">
            {tabs.map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 flex flex-col items-center lg:items-start justify-center p-4 lg:p-6 rounded-2xl lg:rounded-[1.5rem] transition-all duration-300 relative overflow-hidden border ${isActive
                    ? 'bg-gray-50 border-sky-300 shadow-lg shadow-sky-100 scale-105 lg:scale-100 z-10'
                    : 'bg-white border-gray-200 shadow-sm hover:bg-gray-50'
                    }`}
                >
                  <div className="flex items-center gap-0 lg:gap-4 lg:mb-1">
                    <div className={`w-14 h-14 lg:w-12 lg:h-12 rounded-2xl lg:rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30' : 'bg-gray-100 text-gray-500'}`}>
                      <Icon
                        icon={
                          key === 'geladeiras' ? 'mdi:fridge-outline' :
                            key === 'lavadoras' ? 'mdi:washing-machine' : 'mdi:microwave'
                        }
                        className="text-3xl lg:text-2xl"
                      />
                    </div>
                    <h3 className={`hidden lg:block text-xl font-bold ${isActive ? 'text-dark' : 'text-gray-500'}`}>
                      {serviceDetails[key].title}
                    </h3>
                  </div>
                  {isActive && (
                    <motion.p
                      layoutId="tab-desc"
                      className="hidden lg:block text-gray-500 text-sm mt-2 ml-16"
                    >
                      Exibindo detalhes técnicos
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Painel de Conteúdo e Imagem - Height full */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="lg:w-2/3 relative h-[450px] lg:h-full rounded-3xl lg:rounded-[2.5rem] overflow-hidden bg-dark border border-gray-100 shadow-2xl group cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={serviceDetails[activeTab].image}
                  alt={serviceDetails[activeTab].title}
                  className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-90 transition-opacity duration-700 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent"></div>

                {/* Informações Sobrepostas */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-white"
                  >
                    {serviceDetails[activeTab].title}
                  </motion.h3>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 mb-0 max-w-xl text-lg leading-relaxed"
                  >
                    {serviceDetails[activeTab].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile Slide Indicators (Bullets) */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {tabs.map((tabKey) => {
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  isActive ? 'w-8 bg-sky-500' : 'w-2.5 bg-gray-300'
                }`}
                aria-label={`Ir para ${serviceDetails[tabKey].title}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
