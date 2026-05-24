import { Icon } from '@iconify/react';
import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  return (
    <motion.a 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      href="https://wa.me/5511982822443"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-[100] w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group"
    >
      <Icon icon="mdi:whatsapp" className="text-3xl text-white" />
      <span className="absolute right-full mr-4 bg-white text-dark text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale com um técnico
      </span>
    </motion.a>
  );
}
