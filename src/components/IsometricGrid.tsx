

export function IsometricGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Paper texture with slight grain */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Isometric grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="isometric" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
            {/* Isometric lines */}
            <line x1="0" y1="20" x2="20" y2="10" stroke="currentColor" strokeWidth="0.3" />
            <line x1="20" y1="10" x2="40" y2="20" stroke="currentColor" strokeWidth="0.3" />
            <line x1="20" y1="10" x2="20" y2="50" stroke="currentColor" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isometric)" />
      </svg>

      {/* Construction lines - horizontal */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="construction-h" width="100" height="50" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#construction-h)" />
      </svg>

      {/* Construction lines - vertical */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="construction-v" width="50" height="100" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#construction-v)" />
      </svg>

      {/* Border frame like technical drawing */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="20"
          y="20"
          width="calc(100% - 40px)"
          height="calc(100% - 40px)"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/[0.03]"
        />
        <rect
          x="30"
          y="30"
          width="calc(100% - 60px)"
          height="calc(100% - 60px)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white/[0.05]"
        />
      </svg>

      {/* Vignette effect */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)'
      }} />
    </div>
  );
}
