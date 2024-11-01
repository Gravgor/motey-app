import { motion } from "framer-motion";

export function AuthLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark to-primary flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-4"
        >
        </motion.div>
        <h2 className="text-xl text-white font-medium">
          Connecting to Discord...
        </h2>
      </motion.div>
    </div>
  );
} 