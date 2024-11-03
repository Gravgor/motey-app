"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { features } from "@/lib/constants/features";

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#2C2F33] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-white">Awesome</span>{" "}
          <span className="text-[#FFD836]">Features</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] to-[#FF73FA] rounded-2xl opacity-50 blur-xl group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-[#36393F] p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r from-[#5865F2] to-[#FF73FA] p-0.5 mb-6 transform transition-transform duration-300 ${
                  hoveredIndex === index ? 'scale-110 rotate-6' : ''
                }`}>
                  <div className="w-full h-full bg-[#36393F] rounded-xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 