"use client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Smile } from "lucide-react";
import { getGlobalEmotes } from "@/lib/api/emotes";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { EmoteCard } from "@/components/dashboard/EmoteCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { ErrorState } from "@/components/shared/ErrorState";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function GlobalEmotes() {
  const { 
    data: emotes, 
    isLoading, 
    isError, 
    error, 
    refetch 
  } = useQuery({
    queryKey: ["global-emotes"],
    queryFn: getGlobalEmotes,
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Failed to load emotes"
        message={error instanceof Error ? error.message : "Unable to fetch global emotes"}
        retry={() => refetch()}
      />
    );
  }

  if (!emotes || emotes.length === 0) {
    return (
      <EmptyState
        icon={Smile}
        title="No Global Emotes Found"
        description="There are no global emotes available at the moment."
        action={
          <button
            onClick={() => refetch()}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Refresh
          </button>
        }
      />
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Global Emotes</h1>
        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
          {emotes.length} emotes
        </span>
      </div>
      
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        {emotes.map((emote) => (
          <motion.div key={emote.id} variants={fadeIn}>
            <EmoteCard emote={emote} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 