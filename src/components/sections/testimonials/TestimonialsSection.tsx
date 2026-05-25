import { useState } from 'react';
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
  const [mobileIdx, setMobileIdx] = useState(0);

  const allTestimonials: Testimonial[] = [
    { name: 'Creuza Silva', role: 'Avaliação no Google', content: 'Atendimento maravilhoso do técnico Mariner, muito prestativo e atencioso, resolveu o meu problema rapidinho, estou muito satisfeita.', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Bruna Gastaldo', role: 'Avaliação no Google', content: 'Meu técnico de confiança há mais de 10 anos, serviço excelente de valor justo. Recomendo!', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { name: 'Renato Marques', role: 'Local Guide - Google', content: 'Técnico da mais alta qualidade. Serviço correto com preço justo. Recomendo', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Luciana Rubinho Martins', role: 'Avaliação no Google', content: 'Excelente serviço.. sou cliente há muito tempo e recomendo! Preço justo, rápido e qualidade!!!', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/32.jpg' },
    { name: 'Izilda Borges', role: 'Avaliação no Google', content: 'Excelente atendimento e serviço de altíssima qualidade! Recomendo.', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/26.jpg' },
    { name: 'Giovanna Victória', role: 'Avaliação no Google', content: 'Excelente atendimento e presteza na manutenção! Super atencioso.', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { name: 'Cristiane Isaac', role: 'Avaliação no Google', content: 'Hoje em dia em meio tantos dissabores com prestadores de serviços, venho agradecer e elogiar o atendimento que recebi da Maxtec! Profissional qualificado e muito educado 😃', rating: 5, imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg' }
  ];

  const row1 = allTestimonials.slice(0, 4);
  const row2 = allTestimonials.slice(4);

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

  const prevMobile = () => {
    setMobileIdx((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);
  };

  const nextMobile = () => {
    setMobileIdx((prev) => (prev + 1) % allTestimonials.length);
  };

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
          <p className="text-gray-400 max-w-2xl">O que os nossos clientes dizem sobre o trabalho do nosso técnico.</p>
        </motion.div>

        {/* ── DESKTOP ONLY: Marquee rows ── */}
        <div className="hidden md:block">
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

        {/* ── MOBILE ONLY: Testimonial Card with Prev/Next buttons ── */}
        <div className="md:hidden px-6 flex flex-col items-center gap-6">
          <div className="bg-dark border border-white/10 p-6 rounded-3xl w-full max-w-sm flex flex-col min-h-[250px] justify-between">
            <div>
              <div className="flex text-yellow-400 mb-4 justify-center">
                {[...Array(allTestimonials[mobileIdx].rating)].map((_, i) => (
                  <Icon key={i} icon="mdi:star" className="text-lg" />
                ))}
              </div>
              <p className="text-gray-300 italic text-center text-sm leading-relaxed mb-4">
                "{allTestimonials[mobileIdx].content}"
              </p>
            </div>
            
            <div className="flex items-center gap-3 justify-center mt-4 border-t border-white/10 pt-4">
              {allTestimonials[mobileIdx].imageUrl ? (
                <img src={allTestimonials[mobileIdx].imageUrl} alt={allTestimonials[mobileIdx].name} className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-sm">
                  {allTestimonials[mobileIdx].name.charAt(0)}
                </div>
              )}
              <div className="text-left">
                <h4 className="font-bold text-sm">{allTestimonials[mobileIdx].name}</h4>
                <p className="text-xs text-gray-400">{allTestimonials[mobileIdx].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <button 
              onClick={prevMobile}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all"
            >
              <Icon icon="mdi:chevron-left" className="text-xl" />
            </button>
            
            <div className="flex gap-1.5">
              {allTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === mobileIdx ? 'bg-sky-500 w-4' : 'bg-white/30'}`}
                />
              ))}
            </div>

            <button 
              onClick={nextMobile}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all"
            >
              <Icon icon="mdi:chevron-right" className="text-xl" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
