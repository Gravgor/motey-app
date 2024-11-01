"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Server, Users, Settings } from "lucide-react";

interface ServerCardProps {
  guild: {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
    member_count?: number;
    permissions: string;
  };
}

export function ServerCard({ guild }: ServerCardProps) {
  const hasManagePermissions = (BigInt(guild.permissions) & BigInt(0x20)) !== BigInt(0);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-32 bg-gradient-to-r from-primary to-hover">
        {guild.icon ? (
          <Image
            src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
            alt={guild.name}
            fill
            className="object-cover opacity-50"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Server className="w-12 h-12 text-white opacity-50" />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 truncate">{guild.name}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Users className="w-4 h-4 mr-1" />
          <span>{guild.member_count || "N/A"} members</span>
        </div>

        <div className="flex space-x-2">
          {hasManagePermissions ? (
            <Link
              href={`/dashboard/servers/${guild.id}`}
              className="flex-1 bg-primary text-white py-2 px-4 rounded-md text-center hover:bg-hover transition-colors"
            >
              Manage
            </Link>
          ) : (
            <button
              disabled
              className="flex-1 bg-gray-200 text-gray-500 py-2 px-4 rounded-md text-center cursor-not-allowed"
            >
              No Access
            </button>
          )}
          
          {guild.owner && (
            <Link
              href={`/dashboard/servers/${guild.id}/settings`}
              className="p-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors"
            >
              <Settings className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
} 