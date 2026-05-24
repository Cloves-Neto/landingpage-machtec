import { motion } from 'motion/react';
import { Icon } from '@iconify/react';

export function BackgroundGears() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 text-primary"
      >
        <Icon icon="mdi:cog" width="300" height="300" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 left-32 text-secondary opacity-50"
      >
        <Icon icon="mdi:cog-outline" width="150" height="150" />
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -right-20 text-primary"
      >
        <Icon icon="mdi:cog" width="400" height="400" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-10 text-gray-500 opacity-30"
      >
        <Icon icon="mdi:cog-outline" width="200" height="200" />
      </motion.div>
      
      {/* Decorative technical lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-300 opacity-20" />
          <circle cx="60" cy="60" r="1.5" fill="currentColor" className="text-primary opacity-50" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#tech-grid)" />
      </svg>
    </div>
  );
}
