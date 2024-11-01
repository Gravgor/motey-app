import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-dark to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Elevate Your Discord Experience
              <span className="text-accent">with Custom Emotes</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8">
              Transform your Discord messages with personalized emotes. 
              Express yourself better, make conversations more fun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-accent">
                Add to Discord
              </button>
              <button className="btn-primary">
                Browse Emotes
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square">
              <Image
                src="/hero-preview.png"
                alt="Discord chat preview"
                fill
                className="object-contain"
              />
            </div>
            {/* Floating emotes animation */}
            <div className="absolute -z-10 w-full h-full">
              {/* Add floating emotes animation here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 