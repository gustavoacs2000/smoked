import React from 'react';

interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon-only';
  themeMode?: 'dark' | 'light' | 'red';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  withMascotGlow?: boolean;
}

export const BrandFlameMascot: React.FC<{ size?: number; className?: string; animated?: boolean }> = ({
  size = 48,
  className = '',
  animated = false
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size * 1.15}
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible ${animated ? 'animate-pulse' : ''}`}
      >
        <defs>
          {/* Flame outer gradient */}
          <linearGradient id="flameGrad" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffb300" />
            <stop offset="45%" stopColor="#ea5b13" />
            <stop offset="90%" stopColor="#a8160b" />
          </linearGradient>

          {/* Inner flame ember gradient */}
          <linearGradient id="innerFlameGrad" x1="50" y1="50" x2="50" y2="105" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffea75" />
            <stop offset="50%" stopColor="#ffb300" />
            <stop offset="100%" stopColor="#ea5b13" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="flameGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Flame Silhouette with smooth organic tips */}
        <path
          d="M50 2 C58 16 68 28 66 42 C71 36 78 35 77 48 C85 49 92 60 91 74 C90 92 73 108 49 108 C25 108 9 92 9 73 C9 57 18 47 25 46 C24 37 31 31 36 38 C35 24 43 14 50 2 Z"
          fill="url(#flameGrad)"
          stroke="#2b2b2b"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner Flame Core (Yellow/Orange layer) */}
        <path
          d="M50 22 C56 32 62 40 60 50 C64 47 68 47 67 56 C72 57 77 64 76 74 C75 87 64 97 50 97 C36 97 24 87 24 73 C24 62 30 55 35 54 C34 47 39 44 42 48 C41 38 46 30 50 22 Z"
          fill="url(#innerFlameGrad)"
        />

        {/* The Characteristic Smiling Eyes from the brand manual */}
        <ellipse cx="38" cy="62" rx="4.5" ry="6" fill="#2b2b2b" />
        <ellipse cx="62" cy="62" rx="4.5" ry="6" fill="#2b2b2b" />
        {/* Eye highlights */}
        <circle cx="36.5" cy="59.5" r="1.8" fill="#ffffff" />
        <circle cx="60.5" cy="59.5" r="1.8" fill="#ffffff" />

        {/* Broad joyous smile with white teeth */}
        <path
          d="M32 74 C34 90 66 90 68 74 Z"
          fill="#ffffff"
          stroke="#2b2b2b"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Inner tongue flame inside the smile */}
        <path
          d="M45 84 C48 78 52 78 55 84 C53 87 47 87 45 84 Z"
          fill="#a8160b"
        />
      </svg>
    </div>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  themeMode = 'dark',
  size = 'md',
  className = '',
  withMascotGlow = true
}) => {
  const isDark = themeMode === 'dark';
  const isRed = themeMode === 'red';

  const textColor = isDark
    ? 'text-white'
    : isRed
    ? 'text-white'
    : 'text-[#2b2b2b]';

  const subTextColor = isDark
    ? 'text-[#ea5b13]'
    : isRed
    ? 'text-[#ffb300]'
    : 'text-[#a8160b]';

  const sizeClasses = {
    sm: { mascot: 28, text: 'text-xl', sub: 'text-xs', gap: 'gap-2' },
    md: { mascot: 42, text: 'text-3xl', sub: 'text-sm', gap: 'gap-3' },
    lg: { mascot: 58, text: 'text-5xl', sub: 'text-lg', gap: 'gap-4' },
    xl: { mascot: 76, text: 'text-6xl', sub: 'text-xl', gap: 'gap-5' }
  }[size];

  if (variant === 'icon-only') {
    return (
      <BrandFlameMascot
        size={sizeClasses.mascot}
        className={className}
        animated={withMascotGlow}
      />
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <BrandFlameMascot
          size={sizeClasses.mascot * 1.2}
          animated={withMascotGlow}
          className="mb-1 drop-shadow-[0_4px_12px_rgba(234,91,19,0.35)]"
        />
        <span
          className={`font-display-rustic font-black tracking-wider leading-none ${sizeClasses.text} ${textColor}`}
        >
          SMOKED
        </span>
        <span
          className={`font-brush tracking-widest uppercase mt-0.5 ${sizeClasses.sub} ${subTextColor}`}
        >
          BY DIGÃO
        </span>
      </div>
    );
  }

  // Horizontal variant: "SM" + Mascot replacing the "O" + "KED" with "BY DIGÃO" right under
  return (
    <div className={`inline-flex items-center ${sizeClasses.gap} ${className}`}>
      <div className="flex items-center">
        <span
          className={`font-display-rustic font-black tracking-wider leading-none ${sizeClasses.text} ${textColor}`}
        >
          SM
        </span>
        <div className="mx-0.5 inline-flex items-center justify-center -translate-y-0.5">
          <BrandFlameMascot
            size={sizeClasses.mascot * 0.9}
            animated={withMascotGlow}
            className="drop-shadow-[0_2px_8px_rgba(234,91,19,0.4)]"
          />
        </div>
        <div className="flex flex-col">
          <span
            className={`font-display-rustic font-black tracking-wider leading-none ${sizeClasses.text} ${textColor}`}
          >
            KED
          </span>
          <span
            className={`font-brush tracking-wider uppercase -mt-1 ${sizeClasses.sub} ${subTextColor}`}
          >
            BY DIGÃO
          </span>
        </div>
      </div>
    </div>
  );
};
