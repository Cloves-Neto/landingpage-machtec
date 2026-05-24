import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from '@iconify/react';

type DropdownItem = { label: string; href: string };

const navItems: { label: string; href: string; dropdown?: DropdownItem[] }[] = [
  {
    label: 'MachTec',
    href: '#differentials',
    dropdown: [{ label: 'Por que a MachTec?', href: '#differentials' }]
  },
  {
    label: 'Soluções',
    href: '#services',
    dropdown: [{ label: 'Soluções Específicas para Cada Aparelho', href: '#services' }]
  },
  {
    label: 'Serviços',
    href: '#services',
    dropdown: [{ label: 'Serviços com Precisão Técnica', href: '#services' }]
  },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Avaliações', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md border-b border-gray-200/80 px-6 py-3'
            : 'px-4 md:px-8 py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Logo Pill */}
          <a
            href="#"
            className={`flex items-center justify-center gap-2 transition-all duration-300 rounded-full`}
          >
            <div className={`rounded-md px-3 py-1 flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'bg-white border border-gray-200 shadow-sm' : 'bg-white'
            }`}>
              <span className="text-2xl font-black tracking-tighter text-primary">MACHTEC</span>
            </div>
          </a>

          {/* Nav Links Pill — Desktop */}
          <nav className={`hidden md:flex items-center gap-1 transition-all duration-300 rounded-full px-2 py-2`}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-1.5 rounded-full transition-all text-base font-semibold ${
                    scrolled
                      ? 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <Icon
                      icon="mdi:chevron-down"
                      className={`text-base transition-transform duration-200 ${
                        scrolled ? 'text-gray-500' : 'text-gray-400'
                      }`}
                      style={{ transform: activeDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  )}
                </a>
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full left-0 mt-2 border rounded-2xl shadow-xl overflow-hidden min-w-[240px] z-50 ${
                        scrolled
                          ? 'bg-white border-gray-200 text-gray-700'
                          : 'bg-black/90 backdrop-blur-lg border-white/10 text-gray-300'
                      }`}
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors ${
                            scrolled
                              ? 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                              : 'text-gray-300 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                          {sub.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <a
              href="#contact"
              className={`px-5 py-1.5 rounded-full transition-all text-base font-semibold ml-1 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-primary/90 shadow-sm'
                  : 'bg-dark text-white hover:bg-primary'
              }`}
            >
              Orçamento
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden w-10 h-10 border rounded-full flex items-center justify-center shadow-sm transition-all duration-300 ${
              scrolled
                ? 'bg-white border-gray-200 text-dark hover:bg-gray-50'
                : 'bg-black/80 border-white/10 text-white'
            }`}
          >
            <Icon icon="mdi:menu" className="text-2xl" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-sm z-[120] bg-dark shadow-2xl flex flex-col md:hidden"
            >
              {/* Header do Drawer */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="bg-white rounded-md px-3 py-1 flex items-center justify-center">
                  <span className="text-2xl font-black tracking-tighter text-primary">MACHTEC</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Icon icon="mdi:close" className="text-xl" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-gray-300 font-semibold hover:bg-white/5 hover:text-white transition-colors text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    {item.dropdown ? item.dropdown[0].label : item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#25D366] text-white font-black text-base hover:bg-[#1DB954] transition-colors"
                >
                  <Icon icon="mdi:whatsapp" className="text-2xl" />
                  Solicitar Orçamento
                </a>
              </nav>

              {/* Footer do Drawer */}
              <div className="px-6 py-5 border-t border-white/10 bg-dark/50">
                <div className="bg-white rounded-md px-2.5 py-1 inline-flex items-center justify-center mb-2">
                  <span className="text-xl font-black tracking-tighter text-primary">MACHTEC</span>
                </div>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Assistência técnica de excelência.<br />Sua máquina em boas mãos.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
