import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

export function CTASection() {
  return (
    <section id="contact" className="py-24 px-4 md:px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-[90rem] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl md:rounded-[3rem] overflow-hidden bg-dark p-6 md:p-16 lg:p-24 shadow-2xl shadow-dark/20 isolate"
        >
          {/* Abstract Glowing Background Orbs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/40 rounded-full mix-blend-screen filter blur-[120px] opacity-60 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/40 rounded-full mix-blend-screen filter blur-[120px] opacity-60 translate-x-1/2 translate-y-1/2"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at right center, rgba(10,25,47,0.4) 0%, #0A192F 100%)' }}></div>

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-stretch justify-between gap-16 xl:gap-24">
            
            {/* Left Side: Copywriting */}
            <div className="flex-1 text-center xl:text-left flex flex-col items-center xl:items-start justify-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight leading-[1.05] max-w-3xl">
                Quebrou? <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Nos chame!</span>
              </h2>
              
              <p className="text-base md:text-xl text-gray-400 max-w-xl font-medium leading-relaxed">
                Atendimento ultrarrápido em domicílio. Peças originais e garantia total em todos os serviços prestados.
              </p>
            </div>

            {/* Right Side: Conversion Zone — aligned bottom-right on desktop */}
            <div className="w-full xl:w-auto shrink-0 flex flex-col items-center xl:items-end xl:justify-end">
              <a 
                href="https://wa.me/5511982822443?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center px-8 md:px-12 py-4 md:py-7 font-black text-base md:text-2xl text-white transition-all duration-300 bg-[#25D366] rounded-xl md:rounded-full hover:bg-[#1DB954] overflow-hidden shadow-[0_0_50px_rgba(37,211,102,0.35)] hover:shadow-[0_0_80px_rgba(37,211,102,0.6)] hover:-translate-y-2 w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-full h-full rounded-full opacity-20 bg-gradient-to-b from-white/30 to-transparent"></span>
                <span className="relative flex items-center gap-3">
                  <Icon icon="mdi:whatsapp" className="text-2xl md:text-5xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  <span className="hidden sm:inline">SOLICITAR </span>ORÇAMENTO
                </span>
              </a>
              
              <p className="mt-6 text-sm text-gray-500 font-medium flex items-center justify-center gap-2">
                <Icon icon="mdi:check-circle" className="text-[#25D366]" /> Resposta ultrarrápida no WhatsApp.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
