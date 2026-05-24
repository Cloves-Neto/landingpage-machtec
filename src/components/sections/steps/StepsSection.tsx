import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const steps = [
  {
    title: 'Solicite Atendimento',
    description: 'Entre em contato pelo WhatsApp e agende uma visita técnica no melhor horário para você.',
    icon: 'mdi:calendar-clock',
  },
  {
    title: 'Receba o Diagnóstico',
    description: 'Nosso especialista avalia o aparelho na sua casa e apresenta o orçamento de forma clara.',
    icon: 'mdi:magnify-scan',
  },
  {
    title: 'Aparelho Consertado',
    description: 'Realizamos o conserto na hora (na maioria dos casos) com peças originais e garantia.',
    icon: 'mdi:check-decagram-outline',
  }
];

export function StepsSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-dark mb-6"
          >
            Veja <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Como Funciona</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Simplificamos o processo para você voltar à rotina normal o mais rápido possível.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 shadow-xl flex items-center justify-center mb-6 text-gray-400 group-hover:text-primary group-hover:border-primary/20 transition-all duration-300">
                <Icon icon={step.icon} className="text-4xl" />
              </div>
              <div className="w-8 h-8 rounded-full bg-dark text-white font-bold flex items-center justify-center absolute top-0 right-1/2 translate-x-12 -translate-y-2 border-4 border-white">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
