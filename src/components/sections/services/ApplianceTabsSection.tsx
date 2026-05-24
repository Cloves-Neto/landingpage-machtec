import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from '@iconify/react';

type ServiceType = 'geladeiras' | 'lavadoras' | 'microondas';

const serviceDetails = {
  geladeiras: {
    title: 'Geladeiras & Freezers',
    description: 'Manutenção completa em refrigeração. Desde troca de compressores, recarga de gás até reparo de placas eletrônicas e termostatos.',
    features: ['Troca de Borrachas', 'Recarga de Gás', 'Reparo de Motor', 'Limpeza de Sistema'],
    image: '/src/assets/service-fridge.png',
  },
  lavadoras: {
    title: 'Máquinas de Lavar',
    description: 'Consertos rápidos para que sua lavanderia não pare. Trabalhamos com modelos Lava e Seca, abertura frontal e superior.',
    features: ['Troca de Rolamentos', 'Limpeza de Tambor', 'Reparo de Placa', 'Desobstrução'],
    image: '/src/assets/service-washer.png',
  },
  microondas: {
    title: 'Micro-ondas',
    description: 'Assistência técnica especializada em micro-ondas industriais e residenciais, garantindo aquecimento rápido e seguro.',
    features: ['Troca de Magnetron', 'Reparo de Teclado', 'Substituição de Fusível', 'Manutenção de Trafo'],
    image: '/src/assets/service-microwave.png',
  },
};

export function ApplianceTabsSection() {
  const [activeTab, setActiveTab] = useState<ServiceType>('geladeiras');

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
            {(Object.keys(serviceDetails) as ServiceType[]).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 flex flex-col items-center lg:items-start justify-center p-4 lg:p-6 rounded-2xl lg:rounded-[1.5rem] transition-all duration-300 relative overflow-hidden border ${
                    isActive 
                      ? 'bg-gray-50 border-primary/30 shadow-lg shadow-primary/10 scale-105 lg:scale-100 z-10' 
                      : 'bg-white border-gray-200 shadow-sm hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-0 lg:gap-4 lg:mb-1">
                    <div className={`w-14 h-14 lg:w-12 lg:h-12 rounded-2xl lg:rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-primary text-white shadow-md shadow-primary/40' : 'bg-gray-100 text-gray-500'}`}>
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
          <div className="lg:w-2/3 relative h-[450px] lg:h-full rounded-3xl lg:rounded-[2.5rem] overflow-hidden bg-dark border border-gray-100 shadow-2xl group">
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
                    className="text-gray-300 mb-8 max-w-xl text-lg leading-relaxed"
                  >
                    {serviceDetails[activeTab].description}
                  </motion.p>
                  
                  <motion.ul 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    {serviceDetails[activeTab].features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-gray-200 font-medium">
                        <Icon icon="mdi:check-decagram" className="text-secondary text-xl" />
                        {feat}
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
