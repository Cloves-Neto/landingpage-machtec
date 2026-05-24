import { motion } from 'motion/react';

export function FixedBackgroundGears() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="fixed-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#e5e7eb" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="1.5" fill="#ef4444" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fixed-grid)" />
      </svg>

      {/* Large gear — top left */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-32 -left-32"
        width="420" height="420" viewBox="0 0 100 100"
        fill="#d1d5db"
        opacity="0.6"
      >
        <path d="M43.3 5.8l-3.5.7-1.2 4.1a33.5 33.5 0 0 0-6.5 2.7l-3.8-2-2.5 2.5-2.5 2.5 2 3.8a33.5 33.5 0 0 0-2.7 6.5l-4.1 1.2-.7 3.5-.7 3.5 4.1 1.2a33.5 33.5 0 0 0 2.7 6.5l-2 3.8 2.5 2.5 2.5 2.5 3.8-2a33.5 33.5 0 0 0 6.5 2.7l1.2 4.1 3.5.7 3.5.7 1.2-4.1a33.5 33.5 0 0 0 6.5-2.7l3.8 2 2.5-2.5 2.5-2.5-2-3.8a33.5 33.5 0 0 0 2.7-6.5l4.1-1.2.7-3.5.7-3.5-4.1-1.2a33.5 33.5 0 0 0-2.7-6.5l2-3.8-2.5-2.5-2.5-2.5-3.8 2a33.5 33.5 0 0 0-6.5-2.7l-1.2-4.1zm0 22.7a21.5 21.5 0 1 1 0 43 21.5 21.5 0 0 1 0-43z" />
      </motion.svg>

      {/* Medium gear — top right */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-16 -right-16"
        width="300" height="300" viewBox="0 0 100 100"
        fill="#ef4444"
        opacity="0.12"
      >
        <path d="M43.3 5.8l-3.5.7-1.2 4.1a33.5 33.5 0 0 0-6.5 2.7l-3.8-2-2.5 2.5-2.5 2.5 2 3.8a33.5 33.5 0 0 0-2.7 6.5l-4.1 1.2-.7 3.5-.7 3.5 4.1 1.2a33.5 33.5 0 0 0 2.7 6.5l-2 3.8 2.5 2.5 2.5 2.5 3.8-2a33.5 33.5 0 0 0 6.5 2.7l1.2 4.1 3.5.7 3.5.7 1.2-4.1a33.5 33.5 0 0 0 6.5-2.7l3.8 2 2.5-2.5 2.5-2.5-2-3.8a33.5 33.5 0 0 0 2.7-6.5l4.1-1.2.7-3.5.7-3.5-4.1-1.2a33.5 33.5 0 0 0-2.7-6.5l2-3.8-2.5-2.5-2.5-2.5-3.8 2a33.5 33.5 0 0 0-6.5-2.7l-1.2-4.1zm0 22.7a21.5 21.5 0 1 1 0 43 21.5 21.5 0 0 1 0-43z" />
      </motion.svg>

      {/* Large gear — bottom right */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -right-24"
        width="500" height="500" viewBox="0 0 100 100"
        fill="#d1d5db"
        opacity="0.5"
      >
        <path d="M43.3 5.8l-3.5.7-1.2 4.1a33.5 33.5 0 0 0-6.5 2.7l-3.8-2-2.5 2.5-2.5 2.5 2 3.8a33.5 33.5 0 0 0-2.7 6.5l-4.1 1.2-.7 3.5-.7 3.5 4.1 1.2a33.5 33.5 0 0 0 2.7 6.5l-2 3.8 2.5 2.5 2.5 2.5 3.8-2a33.5 33.5 0 0 0 6.5 2.7l1.2 4.1 3.5.7 3.5.7 1.2-4.1a33.5 33.5 0 0 0 6.5-2.7l3.8 2 2.5-2.5 2.5-2.5-2-3.8a33.5 33.5 0 0 0 2.7-6.5l4.1-1.2.7-3.5.7-3.5-4.1-1.2a33.5 33.5 0 0 0-2.7-6.5l2-3.8-2.5-2.5-2.5-2.5-3.8 2a33.5 33.5 0 0 0-6.5-2.7l-1.2-4.1zm0 22.7a21.5 21.5 0 1 1 0 43 21.5 21.5 0 0 1 0-43z" />
      </motion.svg>

      {/* Medium gear — center left */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 -left-12 -translate-y-1/2"
        width="220" height="220" viewBox="0 0 100 100"
        fill="#ef4444"
        opacity="0.1"
      >
        <path d="M43.3 5.8l-3.5.7-1.2 4.1a33.5 33.5 0 0 0-6.5 2.7l-3.8-2-2.5 2.5-2.5 2.5 2 3.8a33.5 33.5 0 0 0-2.7 6.5l-4.1 1.2-.7 3.5-.7 3.5 4.1 1.2a33.5 33.5 0 0 0 2.7 6.5l-2 3.8 2.5 2.5 2.5 2.5 3.8-2a33.5 33.5 0 0 0 6.5 2.7l1.2 4.1 3.5.7 3.5.7 1.2-4.1a33.5 33.5 0 0 0 6.5-2.7l3.8 2 2.5-2.5 2.5-2.5-2-3.8a33.5 33.5 0 0 0 2.7-6.5l4.1-1.2.7-3.5.7-3.5-4.1-1.2a33.5 33.5 0 0 0-2.7-6.5l2-3.8-2.5-2.5-2.5-2.5-3.8 2a33.5 33.5 0 0 0-6.5-2.7l-1.2-4.1zm0 22.7a21.5 21.5 0 1 1 0 43 21.5 21.5 0 0 1 0-43z" />
      </motion.svg>

      {/* Small gear — center right */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/3 right-20"
        width="170" height="170" viewBox="0 0 100 100"
        fill="#9ca3af"
        opacity="0.3"
      >
        <path d="M43.3 5.8l-3.5.7-1.2 4.1a33.5 33.5 0 0 0-6.5 2.7l-3.8-2-2.5 2.5-2.5 2.5 2 3.8a33.5 33.5 0 0 0-2.7 6.5l-4.1 1.2-.7 3.5-.7 3.5 4.1 1.2a33.5 33.5 0 0 0 2.7 6.5l-2 3.8 2.5 2.5 2.5 2.5 3.8-2a33.5 33.5 0 0 0 6.5 2.7l1.2 4.1 3.5.7 3.5.7 1.2-4.1a33.5 33.5 0 0 0 6.5-2.7l3.8 2 2.5-2.5 2.5-2.5-2-3.8a33.5 33.5 0 0 0 2.7-6.5l4.1-1.2.7-3.5.7-3.5-4.1-1.2a33.5 33.5 0 0 0-2.7-6.5l2-3.8-2.5-2.5-2.5-2.5-3.8 2a33.5 33.5 0 0 0-6.5-2.7l-1.2-4.1zm0 22.7a21.5 21.5 0 1 1 0 43 21.5 21.5 0 0 1 0-43z" />
      </motion.svg>

      {/* Bottom left gear */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 left-16"
        width="200" height="200" viewBox="0 0 100 100"
        fill="#d1d5db"
        opacity="0.45"
      >
        <path d="M43.3 5.8l-3.5.7-1.2 4.1a33.5 33.5 0 0 0-6.5 2.7l-3.8-2-2.5 2.5-2.5 2.5 2 3.8a33.5 33.5 0 0 0-2.7 6.5l-4.1 1.2-.7 3.5-.7 3.5 4.1 1.2a33.5 33.5 0 0 0 2.7 6.5l-2 3.8 2.5 2.5 2.5 2.5 3.8-2a33.5 33.5 0 0 0 6.5 2.7l1.2 4.1 3.5.7 3.5.7 1.2-4.1a33.5 33.5 0 0 0 6.5-2.7l3.8 2 2.5-2.5 2.5-2.5-2-3.8a33.5 33.5 0 0 0 2.7-6.5l4.1-1.2.7-3.5.7-3.5-4.1-1.2a33.5 33.5 0 0 0-2.7-6.5l2-3.8-2.5-2.5-2.5-2.5-3.8 2a33.5 33.5 0 0 0-6.5-2.7l-1.2-4.1zm0 22.7a21.5 21.5 0 1 1 0 43 21.5 21.5 0 0 1 0-43z" />
      </motion.svg>
    </div>
  );
}
