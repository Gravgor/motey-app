"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Home,
  Server,
  Smile,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: "Overview", href: "/dashboard" },
    { icon: Server, label: "Servers", href: "/dashboard/servers" },
    { icon: Smile, label: "Global Emotes", href: "/dashboard/emotes" },
  ];

  return (
    <motion.aside
      initial={{ width: 240 }}
      animate={{ width: isCollapsed ? 80 : 240 }}
      className="bg-dark text-white h-screen flex flex-col"
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center px-4 border-b border-gray-700">
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            Motey
          </motion.span>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 py-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ml-3"
              >
                {item.label}
              </motion.span>
            )}
          </Link>
        ))}
      </nav>

      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-4 border-t border-gray-700 flex items-center justify-center hover:bg-gray-700 transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="w-5 h-5" />
        ) : (
          <ChevronLeft className="w-5 h-5" />
        )}
      </button>
    </motion.aside>
  );
} 