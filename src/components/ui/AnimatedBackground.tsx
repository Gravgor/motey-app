export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#404EED] via-[#5865F2] to-[#7289DA] animate-gradient" />
      
      {/* Floating shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`
              absolute rounded-full mix-blend-multiply filter blur-xl opacity-70
              animate-float-${(i % 3) + 1}
            `}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              backgroundColor: ['#FFD836', '#FF73FA', '#5865F2'][i % 3],
            }}
          />
        ))}
      </div>
    </div>
  );
} 