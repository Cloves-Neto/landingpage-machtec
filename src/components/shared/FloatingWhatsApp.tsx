import { Icon } from '@iconify/react';
import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group"
    >
      <Icon icon="mdi:whatsapp" className="text-4xl text-white" />
      <span className="absolute right-full mr-4 bg-white text-dark text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale com um técnico
      </span>
    </motion.a>
  );
}
