"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I add Motey to my Discord server?",
      answer: "Simply click the 'Add to Discord' button and follow the authorization process. You'll be able to start using Motey in your server right away!"
    },
    {
      question: "How many emotes can I upload?",
      answer: "Each server can upload up to 50 custom emotes. Premium servers can upload up to 200 emotes!"
    },
    {
      question: "What file types are supported?",
      answer: "We support PNG, GIF, and JPEG files. Maximum file size is 256KB for regular emotes and 1MB for animated emotes."
    },
    {
      question: "How do I manage emote permissions?",
      answer: "Server administrators can manage emote permissions through the Motey dashboard or using commands directly in Discord."
    }
  ];

  return (
    <section className="py-24 bg-[#36393F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Got <span className="text-[#FFD836]">Questions?</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-[#2C2F33] p-6 rounded-2xl text-left group hover:bg-[#32353B] transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#5865F2] transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-white/70">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 