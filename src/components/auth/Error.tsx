"use client";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case "Configuration":
        return "There is a problem with the server configuration.";
      case "AccessDenied":
        return "Access was denied to your Discord account.";
      case "Verification":
        return "You must verify your Discord account first.";
      default:
        return "An unexpected authentication error occurred.";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-primary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-xl shadow-xl p-6 text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Authentication Error
        </h1>
        
        <p className="text-gray-600 mb-6">
          {getErrorMessage(error)}
        </p>

        <div className="space-y-4">
          <Link
            href="/auth/signin"
            className="block w-full bg-primary hover:bg-hover text-white rounded-lg p-3 transition-colors"
          >
            Try Again
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 