"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-dark py-4 fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Motey" width={32} height={32} />
          <span className="text-white text-xl font-bold">Motey</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-white hover:text-accent">
            Features
          </Link>
          <Link href="#how-it-works" className="text-white hover:text-accent">
            How It Works
          </Link>
          <Link href="#contact" className="text-white hover:text-accent">
            Contact
          </Link>
          <button className="btn-accent">Add to Discord</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark">
          <div className="px-4 py-2 space-y-4">
            <Link href="#features" className="block text-white hover:text-accent">
              Features
            </Link>
            <Link href="#how-it-works" className="block text-white hover:text-accent">
              How It Works
            </Link>
            <Link href="#contact" className="block text-white hover:text-accent">
              Contact
            </Link>
            <button className="btn-accent w-full">Add to Discord</button>
          </div>
        </div>
      )}
    </nav>
  );
} 