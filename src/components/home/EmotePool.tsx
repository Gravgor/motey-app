"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export function EmotePool() {
  const emotes = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    src: `/emotes/emote${i + 1}.gif`,
    cols: Math.random() > 0.5 ? 2 : 1,
    rows: Math.random() > 0.5 ? 2 : 1,
  }));

  return (
    <section className="py-24 bg-[#36393F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover <span className="text-[#FFD836]">Amazing</span> Emotes
          </h2>
          <p className="text-white/70 text-lg">Browse through thousands of custom emotes</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {emotes.map((emote) => (
            <motion.div
              key={emote.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative group aspect-square ${
                emote.cols === 2 ? 'md:col-span-2' : ''
              } ${emote.rows === 2 ? 'md:row-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2] to-[#FF73FA] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0.5 bg-[#2C2F33] rounded-xl overflow-hidden">
                <Image
                  src={emote.src}
                  alt={`Emote ${emote.id}`}
                  fill
                  className="object-contain p-4 transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-[#5865F2] to-[#FF73FA] px-8 py-3 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-[#5865F2]/50 transition-all duration-300 group">
            <span className="flex items-center gap-2">
              Browse More
              <Sparkles className="w-4 h-4 transform group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
} 