"use client";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getGuilds } from "@/lib/api/discord";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { ServerCard } from "@/components/dashboard/ServerCard";

export default function Dashboard() {
  const { data: guilds, isLoading, error } = useQuery({
    queryKey: ["guilds"],
    queryFn: getGuilds
  });

  // Filter for servers where user has MANAGE_EMOJIS_AND_STICKERS permission (1 << 30)
  const manageableServers = guilds?.filter(
    (guild: any) => (BigInt(guild.permissions) & BigInt(1 << 30)) !== BigInt(0)
  );

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error loading servers</div>;

  return (
    <ErrorBoundary>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Your Servers</h1>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {manageableServers?.map((guild: any) => (
            <motion.div key={guild.id} variants={fadeIn}>
              <ServerCard guild={guild} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ErrorBoundary>
  );
} 