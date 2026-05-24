import { Icon } from '@iconify/react';

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-8 px-6 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24 relative z-10">
        
        {/* Brand & Contact (Span 4) */}
        <div className="flex flex-col gap-8 lg:col-span-4 pr-0 lg:pr-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-md px-3.5 py-1.5 flex items-center justify-center">
                <span className="text-3xl font-black tracking-tighter text-primary">
                  MACHTEC
                </span>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed mt-2">
              Elevando o padrão da assistência técnica. Consertos definitivos para seus eletrodomésticos com rapidez, transparência e garantia.
            </p>
          </div>
          
          <div className="space-y-4 text-gray-300 mt-4">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="flex items-center gap-4 group hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <Icon icon="mdi:whatsapp" className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">WhatsApp</p>
                <p className="font-medium text-lg">(11) 99999-9999</p>
              </div>
            </a>
            <a href="tel:01133333333" className="flex items-center gap-4 group hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <Icon icon="mdi:phone-outline" className="text-xl" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Central de Atendimento</p>
                <p className="font-medium text-lg">(11) 3333-3333</p>
              </div>
            </a>
          </div>
        </div>

        {/* Navegação (Span 4) */}
        <div className="lg:col-span-4 lg:pl-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0">
          <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
            <Icon icon="mdi:compass-outline" className="text-primary" /> Navegação
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <a href="#services" className="hover:text-white hover:translate-x-1 inline-flex transition-all items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Nossos Serviços
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-white hover:translate-x-1 inline-flex transition-all items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Como Funciona
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white hover:translate-x-1 inline-flex transition-all items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Clientes Satisfeitos
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white hover:translate-x-1 inline-flex transition-all items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Dúvidas Frequentes
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white hover:translate-x-1 inline-flex transition-all items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span> Orçamento / Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Atendimento & Horários (Span 4) */}
        <div className="lg:col-span-4 lg:pl-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0">
          <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
            <Icon icon="mdi:clock-outline" className="text-primary" /> Funcionamento
          </h4>
          <ul className="space-y-4 text-gray-400 mb-8">
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Segunda a Sexta</span>
              <span className="font-semibold text-white">08:00 - 18:00</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
              <span>Sábados</span>
              <span className="font-semibold text-white">08:00 - 14:00</span>
            </li>
            <li className="flex justify-between text-primary font-semibold">
              <span>Domingo</span>
              <span>Fechado</span>
            </li>
          </ul>
          
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h5 className="font-bold text-white mb-2 text-sm uppercase tracking-wider text-primary">Regiões Atendidas:</h5>
            <p className="text-sm text-gray-400 leading-relaxed">
              São Paulo (Centro, Zonas Norte, Sul, Leste, Oeste) e todo o ABC Paulista.
            </p>
          </div>
        </div>
      </div>

      {/* Massive Bottom Text */}
      <div className="relative w-full overflow-hidden flex items-center justify-center opacity-[0.03] pointer-events-none select-none mb-4">
        <h2 className="text-[15vw] font-black leading-none whitespace-nowrap tracking-[0.1em]">
          MACHTEC
        </h2>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} MachTec. Todos os direitos reservados.</p>
        <div className="font-medium">
          CNPJ: 00.000.000/0001-00
        </div>
      </div>
    </footer>
  );
}
