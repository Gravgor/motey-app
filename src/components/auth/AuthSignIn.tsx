"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import Image from "next/image";
import {ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const error = searchParams.get("error");

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signIn("discord", { callbackUrl });
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-primary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/logo.svg"
              alt="Motey Logo"
              width={64}
              height={64}
              className="rounded-xl"
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to Motey
          </h1>
          <p className="text-gray-300">
            Enhance your Discord experience with custom emotes
          </p>
        </div>

        {/* Sign In Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-xl p-6"
        >
          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 text-red-600 p-4 rounded-lg mb-6"
            >
              {error === "OAuthSignin" && "An error occurred during sign in."}
              {error === "OAuthCallback" && "Could not verify Discord account."}
              {error === "OAuthCreateAccount" && "Could not create account."}
              {error === "EmailCreateAccount" && "Could not create account."}
              {error === "Callback" && "Invalid callback URL."}
              {error === "Default" && "An unexpected error occurred."}
            </motion.div>
          )}

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            disabled={isLoading}
            className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg p-4 flex items-center justify-center space-x-3 transition-colors relative overflow-hidden group"
          >
            <span className="font-medium">
              {isLoading ? "Connecting..." : "Continue with Discord"}
            </span>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 absolute right-4 transition-all transform translate-x-2 group-hover:translate-x-0" />
          </button>

          {/* Features List */}
          <div className="mt-8 space-y-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              What you'll get:
            </h3>
            {[
              "Access to custom emote library",
              "Server management tools",
              "Analytics and insights",
              "Priority support",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center space-x-3 text-gray-600"
              >
                <svg
                  className="w-5 h-5 text-green-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-300 text-sm">
          <p>
            By continuing, you agree to our{" "}
            <a href="/terms" className="underline hover:text-white">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
} 