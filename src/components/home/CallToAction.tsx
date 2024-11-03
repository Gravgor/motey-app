"use client";
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-24 bg-[#2C2F33] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] to-[#FF73FA] opacity-10" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Make Discord{' '}
            <span className="text-[#FFD836]">More Fun?</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-12">
            Join thousands of servers already using Motey to enhance their Discord experience!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white px-8 py-4 rounded-xl font-semibold text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all duration-300">
              <span className="flex items-center gap-2">
                Add to Discord
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all duration-300">
              <span className="flex items-center gap-2">
                Learn More
                <Sparkles className="w-4 h-4" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 