"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { getServerEmotes, deleteEmote, type Emote } from "@/lib/api/emotes";
import { EmoteUpload } from "@/components/dashboard/EmoteUpload";
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { toast } from "react-hot-toast";
import { Trash2 } from "lucide-react";

export default function ServerManage({ params }: { params: { id: string } }) {
  const queryClient = useQueryClient();
  const [isUploading, setIsUploading] = useState(false);

  const { data: emotes, isLoading } = useQuery<Emote[]>({
    queryKey: ["server-emotes", params.id],
    queryFn: () => getServerEmotes(params.id)
  });

  const deleteMutation = useMutation({
    mutationFn: deleteEmote,
    onSuccess: () => {
      //@ts-ignore
      queryClient.invalidateQueries(["server-emotes", params.id]);
      toast.success("Emote deleted successfully");
    },
    onError: (error) => {
      toast.error("Failed to delete emote");
      console.error("Delete error:", error);
    }
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Server Emotes</h1>
      
      {/* Upload Section */}
      <div className="mb-8">
        <EmoteUpload
          guildId={params.id}
          //@ts-ignore
          onUploadStart={() => setIsUploading(true)}
          //@ts-ignore
          onUploadEnd={() => setIsUploading(false)}
          //@ts-ignore
          onSuccess={() => {
            //@ts-ignore
            queryClient.invalidateQueries(["server-emotes", params.id]);
            toast.success("Emote uploaded successfully");
          }}
        />
      </div>

      {/* Emotes Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {emotes?.map((emote) => (
          <motion.div
            key={emote.id}
            layout
            className="relative group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/emotes/${emote.id}/image`}
              alt={emote.name}
              className="w-full h-auto"
            />
            <p className="text-center mt-2 text-sm">:{emote.name}:</p>
            
            <button
              onClick={() => deleteMutation.mutate(emote.id)}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              //@ts-ignore
              disabled={deleteMutation.isLoading}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 