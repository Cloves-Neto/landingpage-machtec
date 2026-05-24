import { motion } from 'motion/react';
import { Icon } from '@iconify/react';


interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  imageUrl?: string;
}

export function TestimonialsSection() {
  const row1: Testimonial[] = [
    { name: 'Creuza Silva', role: 'Avaliação no Google', content: 'Atendimento maravilhoso do técnico Mariner, muito prestativo e atencioso, resolveu o meu problema rapidinho, estou muito satisfeita.', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Bruna Gastaldo', role: 'Avaliação no Google', content: 'Meu técnico de confiança há mais de 10 anos, serviço excelente de valor justo. Recomendo!', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Renato Marques', role: 'Local Guide - Google', content: 'Profissionais da mais alta qualidade. Serviços corretos com preço justo. Recomendo', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Luciana Rubinho Martins', role: 'Avaliação no Google', content: 'Excelente serviço.. sou cliente há muito tempo e recomendo! Preço justo, rápido e qualidade!!!', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg' }
  ];

  const row2: Testimonial[] = [
    { name: 'Izilda Borges', role: 'Avaliação no Google', content: 'Excelente atendimento e serviço de altíssima qualidade! Recomendo.', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/26.jpg' },
    { name: 'Giovanna Victória', role: 'Avaliação no Google', content: 'Excelente atendimento e presteza na manutenção! Super atenciosos.', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { name: 'Rafael Pittel', role: 'Avaliação no Google', content: 'Fui muito bem atendido pela empresa e no meu caso foi uma máquina de gelo onde já tinha perdido as esperanças do reparo e a empresa conseguiu com grande maestria arrumar.', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Cristiane Isaac', role: 'Avaliação no Google', content: 'Hoje em dia em meio tantos dissabores com prestadores de serviços, venho agradecer e elogiar o atendimento que recebi da Maxtec! Profissionais qualificados e muito educados 😃', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg' }
  ];

  const renderCards = (cards: Testimonial[]) => (
    <>
      {cards.map((test, idx) => (
        <div 
          key={idx}
          className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-3xl w-[280px] md:w-[400px] shrink-0 hover:bg-white/10 transition-colors backdrop-blur-sm flex flex-col"
        >
          <div className="flex text-yellow-400 mb-3 md:mb-4">
            {[...Array(test.rating)].map((_, i) => (
              <Icon key={i} icon="mdi:star" className="text-lg md:text-xl" />
            ))}
          </div>
          <p className="text-gray-300 italic mb-4 md:mb-6 leading-relaxed flex-1 whitespace-normal text-sm md:text-base">"{test.content}"</p>
          <div className="flex items-center gap-3 md:gap-4 mt-auto">
            {test.imageUrl ? (
              <img src={test.imageUrl} alt={test.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full shrink-0 object-cover" />
            ) : (
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-base md:text-lg shrink-0">
                {test.name.charAt(0)}
              </div>
            )}
            <div>
              <h4 className="font-bold text-sm md:text-base whitespace-normal">{test.name}</h4>
              <p className="text-xs md:text-sm text-gray-400">{test.role}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <section id="testimonials" className="py-24 bg-dark relative overflow-hidden text-white border-t border-white/10">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16 px-6"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">Confiança <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Comprovada</span></h2>
          <p className="text-gray-400 max-w-2xl">O que nossos clientes dizem sobre o nosso trabalho.</p>
        </motion.div>

        {/* Marquee Row 1 (Move Left) */}
        <div className="w-full flex overflow-hidden mask-horizontal mb-8 group">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max"
          >
            <div className="flex gap-6 pr-6">
              {renderCards(row1)}
            </div>
            <div className="flex gap-6 pr-6">
              {renderCards(row1)}
            </div>
          </motion.div>
        </div>

        {/* Marquee Row 2 (Move Right) */}
        <div className="w-full flex overflow-hidden mask-horizontal group">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max"
          >
            <div className="flex gap-6 pr-6">
              {renderCards(row2)}
            </div>
            <div className="flex gap-6 pr-6">
              {renderCards(row2)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
