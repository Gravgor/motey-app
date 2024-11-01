"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { addEmote } from "@/lib/api/emotes";
import { LoadingSpinner } from "../shared/LoadingSpinner";
import { toast } from "react-hot-toast";

interface EmoteUploadProps {
  guildId?: string;
  onUploadStart?: () => void;
  onUploadEnd?: () => void;
  onSuccess?: () => void;
}

export function EmoteUpload({ 
  guildId, 
  onUploadStart, 
  onUploadEnd, 
  onSuccess 
}: EmoteUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [emoteName, setEmoteName] = useState("");

  const handleUpload = async (file: File) => {
    try {
      setIsUploading(true);
      onUploadStart?.();

      await addEmote({
        name: emoteName || file.name.split(".")[0],
        file,
        guild_id: guildId
      });

      setPreview(null);
      setEmoteName("");
      onSuccess?.();
      toast.success("Emote uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to upload emote");
    } finally {
      setIsUploading(false);
      onUploadEnd?.();
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxSize: 256000, // 256KB
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
        await handleUpload(file);
      }
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4"
    >
      <div className="mb-4">
        <input
          type="text"
          value={emoteName}
          onChange={(e) => setEmoteName(e.target.value)}
          placeholder="Emote name (optional)"
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div
        {...getRootProps()}
        className="border-2 border-dashed border-primary rounded-lg p-8 text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        {isUploading ? (
          <LoadingSpinner />
        ) : preview ? (
          <img
            src={preview}
            alt="Preview"
            className="max-w-[128px] mx-auto"
          />
        ) : (
          <p>Drag & drop an emote here, or click to select</p>
        )}
      </div>
    </motion.div>
  );
} 