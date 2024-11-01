"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { AlertCircle } from "lucide-react";

interface EmoteCardProps {
  emote: {
    id: string;
    name: string;
    animated: boolean;
  };
}

export function EmoteCard({ emote }: EmoteCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const copyEmoteCode = () => {
    navigator.clipboard.writeText(`:${emote.name}:`);
    toast.success("Emote code copied!");
  };

  if (imageError) {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
      >
        <div className="aspect-square flex items-center justify-center bg-red-50">
          <AlertCircle className="w-8 h-8 text-red-500" />
        </div>
        <p className="text-center mt-2 text-sm text-red-500">Failed to load</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={copyEmoteCode}
    >
      <div className="aspect-square relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <img
          src={`${process.env.NEXT_PUBLIC_API_URL}/emotes/${emote.id}/image`}
          alt={emote.name}
          className={`w-full h-full object-contain transition-opacity duration-200 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setImageError(true);
            setIsLoading(false);
          }}
        />
      </div>
      <p className="text-center mt-2 text-sm">:{emote.name}:</p>
    </motion.div>
  );
} 