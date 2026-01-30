import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="drop-shadow-xl">
      <defs>
        <linearGradient id="logo-main-gradient" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="logo-accent-gradient" x1="0" y1="0" x2="20" y2="20">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id="logo-glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background circle with glow */}
      <circle cx="20" cy="20" r="18" fill="url(#logo-main-gradient)" filter="url(#logo-glow)" />

      {/* House structure */}
      <path
        d="M20 7 L28 14 V30 H24 V21 H16 V30 H12 V14 L20 7Z"
        fill="white"
        fillOpacity="0.95"
      />

      {/* Roof detail */}
      <path
        d="M20 7 L28 14 L26 14 L20 9 L14 14 L12 14 L20 7Z"
        fill="white"
        fillOpacity="0.8"
      />

      {/* Door */}
      <rect x="18" y="24" width="4" height="6" rx="0.5" fill="url(#logo-main-gradient)" fillOpacity="0.6" />

      {/* Windows */}
      <rect x="14" y="17" width="3" height="3" rx="0.5" fill="url(#logo-accent-gradient)" fillOpacity="0.8" />
      <rect x="23" y="17" width="3" height="3" rx="0.5" fill="url(#logo-accent-gradient)" fillOpacity="0.8" />

      {/* Trust badge */}
      <circle cx="20" cy="12" r="3" fill="url(#logo-accent-gradient)" />
      <path d="M18.5 12 L19.5 13 L21.5 11" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Decorative base */}
      <rect x="11" y="30" width="18" height="1" rx="0.5" fill="white" fillOpacity="0.3" />
    </svg>
  );
}
