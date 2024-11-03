import Image from "next/image";
import { AnimatedBackground } from "../ui/AnimatedBackground";
import { Sparkles, Wand2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block animate-bounce-slow mb-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 flex items-center gap-2">
                <Wand2 className="w-4 h-4 text-[#FFD836]" />
                <span className="text-white/90 text-sm">The Ultimate Emote Bot</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Make Discord
              <span className="block text-[#FFD836] mt-2 relative">
                More Fun!
                {/* @ts-ignore */}
                <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 100 12" className="text-[#FFD836]">
                  <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Level up your server with awesome custom emotes! Express yourself in ways you never imagined 
              <span className="inline-block animate-bounce mx-1">✨</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-white rounded-2xl font-bold text-[#5865F2] transform hover:scale-105 transition-all duration-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] to-[#7289DA] opacity-0 group-hover:opacity-10 transition-opacity" />
                <span className="flex items-center gap-2">
                  Add to Discord
                  <Sparkles className="w-4 h-4" />
                </span>
              </button>
              
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl font-bold text-white transform hover:scale-105 transition-all duration-200">
                Browse Emotes
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { number: "500K+", label: "Users" },
                { number: "10K+", label: "Servers" },
                { number: "1M+", label: "Emotes" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 backdrop-blur-lg rounded-2xl p-4">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full aspect-square">
              {/* Discord chat preview with floating emotes */}
              <div className="absolute inset-0 bg-[#2C2F33]/50 backdrop-blur-xl rounded-2xl transform rotate-3 scale-95" />
              <div className="absolute inset-0 bg-[#2C2F33] rounded-2xl -rotate-3">
                <Image
                  src="/hero-preview.png"
                  alt="Discord chat preview"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating emotes */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-12 h-12 rounded-full bg-white shadow-lg animate-float-${(i % 3) + 1}`}
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                >
                  <Image
                    src={`/emotes/emote${i + 1}.gif`}
                    alt={`Floating emote ${i + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 