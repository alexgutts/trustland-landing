import { motion } from 'framer-motion';

export default function HeroIllustration() {
  return (
    <svg
      className="absolute bottom-0 right-0 w-full h-auto max-w-2xl lg:max-w-4xl opacity-15"
      viewBox="0 0 1000 700"
      fill="none"
    >
      {/* Mountains in background */}
      <path d="M0 450 L150 250 L300 380 L450 200 L600 350 L750 180 L900 320 L1000 280 L1000 700 L0 700 Z" fill="url(#mountain-gradient-1)" />
      <path d="M100 480 L250 300 L400 420 L550 250 L700 400 L850 230 L1000 350 L1000 700 L100 700 Z" fill="url(#mountain-gradient-2)" />

      {/* Buildings - complex architecture */}
      <g opacity="0.9">
        {/* Tall building left */}
        <rect x="50" y="300" width="100" height="400" fill="#1e40af" />
        <rect x="60" y="310" width="80" height="380" fill="#1e3a8a" />
        {[...Array(15)].map((_, i) => (
          <g key={`left-${i}`}>
            <rect x="70" y={320 + i * 25} width="15" height="18" fill="#93c5fd" fillOpacity="0.6" />
            <rect x="95" y={320 + i * 25} width="15" height="18" fill="#93c5fd" fillOpacity="0.6" />
            <rect x="120" y={320 + i * 25} width="15" height="18" fill="#93c5fd" fillOpacity="0.6" />
          </g>
        ))}

        {/* Mid building */}
        <rect x="200" y="380" width="120" height="320" fill="#2563eb" />
        <rect x="210" y="390" width="100" height="300" fill="#1e40af" />
        {[...Array(12)].map((_, i) => (
          <g key={`mid-${i}`}>
            <rect x="220" y={400 + i * 25} width="18" height="18" fill="#bfdbfe" fillOpacity="0.7" />
            <rect x="248" y={400 + i * 25} width="18" height="18" fill="#bfdbfe" fillOpacity="0.7" />
            <rect x="276" y={400 + i * 25} width="18" height="18" fill="#bfdbfe" fillOpacity="0.7" />
          </g>
        ))}

        {/* Tall building right */}
        <rect x="370" y="250" width="110" height="450" fill="#1e3a8a" />
        <rect x="380" y="260" width="90" height="430" fill="#1e40af" />
        <polygon points="425,250 380,260 470,260" fill="#0c4a6e" />
        {[...Array(18)].map((_, i) => (
          <g key={`right-${i}`}>
            <rect x="390" y={270 + i * 24} width="16" height="18" fill="#60a5fa" fillOpacity="0.8" />
            <rect x="416" y={270 + i * 24} width="16" height="18" fill="#60a5fa" fillOpacity="0.8" />
            <rect x="442" y={270 + i * 24} width="16" height="18" fill="#60a5fa" fillOpacity="0.8" />
          </g>
        ))}

        {/* Small buildings */}
        <rect x="520" y="450" width="80" height="250" fill="#3b82f6" />
        <rect x="530" y="460" width="60" height="230" fill="#2563eb" />
        {[...Array(9)].map((_, i) => (
          <g key={`small-${i}`}>
            <rect x="540" y={470 + i * 25} width="18" height="18" fill="#93c5fd" fillOpacity="0.6" />
            <rect x="562" y={470 + i * 25} width="18" height="18" fill="#93c5fd" fillOpacity="0.6" />
          </g>
        ))}
      </g>

      {/* Animated birds */}
      {[...Array(6)].map((_, i) => (
        <motion.path
          key={`bird-${i}`}
          d={`M${150 + i * 80} ${180 + i * 30} Q${155 + i * 80} ${175 + i * 30} ${160 + i * 80} ${180 + i * 30}`}
          stroke="#64748b"
          strokeWidth="3"
          fill="none"
          animate={{
            x: [0, 100, 200],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Sun with glow */}
      <circle cx="200" cy="150" r="60" fill="#fbbf24" opacity="0.6" />
      <circle cx="190" cy="140" r="60" fill="#fef3c7" opacity="0.4" />
      <circle cx="185" cy="135" r="50" fill="#fde047" opacity="0.8" />

      <defs>
        <linearGradient id="mountain-gradient-1" x1="0" y1="200" x2="1000" y2="700">
          <stop offset="0" stopColor="#93c5fd" stopOpacity="0.3" />
          <stop offset="1" stopColor="#3b82f6" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="mountain-gradient-2" x1="0" y1="250" x2="1000" y2="700">
          <stop offset="0" stopColor="#60a5fa" stopOpacity="0.2" />
          <stop offset="1" stopColor="#2563eb" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
