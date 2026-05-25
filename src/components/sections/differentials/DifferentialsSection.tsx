import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

const differentials = [
  {
    title: 'Atendimento Rápido',
    description: 'Sem demora e sem enrolação. O serviço é realizado com máxima precisão e agilidade.',
    icon: 'mdi:rocket-launch-outline',
    colSpan: 'md:col-span-2 lg:col-span-1',
    color: 'group-hover:text-primary'
  },
  {
    title: 'Técnico Especializado',
    description: 'Profissional altamente treinado e atualizado com as mais novas tecnologias do mercado.',
    icon: 'mdi:account-hard-hat-outline',
    colSpan: 'md:col-span-1 lg:col-span-2',
    color: 'group-hover:text-secondary'
  },
  {
    title: 'Peças Originais',
    description: 'Trabalhamos com peças originais de fábrica e também oferecemos opções com excelente custo-benefício para os clientes.',
    icon: 'mdi:cog-box',
    colSpan: 'md:col-span-1 lg:col-span-2',
    color: 'group-hover:text-primary'
  },
  {
    title: 'Garantia no Serviço',
    description: 'Total respaldo pós-manutenção para que você não tenha preocupações.',
    icon: 'mdi:shield-check-outline',
    colSpan: 'md:col-span-2 lg:col-span-1',
    color: 'group-hover:text-secondary'
  },
];

export function DifferentialsSection() {
  return (
    <section id="differentials" className="py-24 px-4 md:px-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Area Centered */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight"
           >
             Por que a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MachTec?</span>
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-xl text-gray-600"
           >
             Elevamos o padrão da assistência técnica. Esqueça os serviços demorados e amadores; nossa missão é devolver a eficiência para a sua rotina com excelência.
           </motion.p>
        </div>

        {/* Bento Grid Area */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Regular Cards */}
           {differentials.map((item, index) => {
              let newColSpan = "col-span-1";
              const activeColor = item.color.replace('group-hover:', '');

              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, type: 'spring' }}
                className={`group relative bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:border-transparent transition-all duration-300 overflow-hidden ${newColSpan}`}
              >
                 {/* Hover Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
                 
                 <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                    <Icon 
                       icon={item.icon} 
                       className={`text-5xl transition-colors duration-300 ${activeColor} md:text-gray-300 md:${item.color}`}
                    />
                    <div>
                      <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                      <p className="text-gray-500 text-sm font-medium leading-relaxed">{item.description}</p>
                    </div>
                 </div>
              </motion.div>
              );
           })}

         </div>

      </div>
    </section>
  );
}
