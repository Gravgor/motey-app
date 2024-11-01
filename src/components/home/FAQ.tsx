"use client";
import { useState } from 'react';
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
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="px-6 py-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 