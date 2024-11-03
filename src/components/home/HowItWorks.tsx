"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Rocket, Upload, Wand2 } from 'lucide-react';

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  

  const steps = [
    {
      icon: Wand2,
      number: "01",
      title: "Add Motey to Discord",
      description: "One click to invite Motey and unlock endless possibilities! ✨",
      color: "from-[#5865F2] to-[#7289DA]",
      preview: "/previews/add-to-discord.png"
    },
    {
      icon: Upload,
      number: "02",
      title: "Upload Your Emotes",
      description: "Drag & drop your favorite emotes or browse our massive collection! 🎨",
      color: "from-[#FF73FA] to-[#FF4ECD]",
      preview: "/previews/upload-emotes.png"
    },
    {
      icon: Rocket,
      number: "03",
      title: "Start the Fun!",
      description: "Use your new emotes anywhere in your server! 🚀",
      color: "from-[#FFD836] to-[#FFA524]",
      preview: "/previews/chat-preview.png"
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-[#2C2F33] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.5]) }}
          className="absolute inset-0 bg-gradient-to-b from-[#5865F2]/20 via-transparent to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Started <span className="text-[#FFD836]">in Minutes</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Setting up Motey is as easy as 1-2-3! Follow these simple steps and transform your Discord experience.
          </p>
        </motion.div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 bottom-0 w-1 h-32 bg-gradient-to-b from-white/10 to-transparent -mb-32 hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 text-center md:text-left"
                >
                  {/* Step number badge */}
                  <div className={`inline-block bg-gradient-to-r ${step.color} p-0.5 rounded-full mb-6`}>
                    <div className="bg-[#2C2F33] px-4 py-1 rounded-full">
                      <span className="text-white font-bold">Step {step.number}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6 inline-block group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                    <div className="relative w-16 h-16 bg-[#36393F] rounded-2xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/70 text-lg">{step.description}</p>

                  {/* Action button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-6 bg-gradient-to-r ${step.color} px-6 py-2 rounded-xl font-semibold text-white inline-flex items-center gap-2 group`}
                  >
                    Learn More
                    <Sparkles className="w-4 h-4 transform group-hover:rotate-12 transition-transform" />
                  </motion.button>
                </motion.div>

                {/* Preview image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex-1"
                >
                  <div className="relative">
                    {/* Decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/20 to-transparent rounded-2xl transform rotate-3" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/20 to-transparent rounded-2xl transform -rotate-3" />
                    
                    {/* Main preview */}
                    <div className="relative bg-[#36393F] rounded-2xl p-2 transform hover:scale-105 transition-transform duration-300">
                      <img
                        src={step.preview}
                        alt={step.title}
                        className="rounded-xl w-full"
                      />
                      
                      {/* Floating elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#5865F2] to-[#FF73FA] rounded-full animate-bounce" />
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#FFD836] to-[#FFA524] rounded-full animate-bounce delay-150" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 