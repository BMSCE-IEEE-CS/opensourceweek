import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/50 border-b border-green-900/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Home - BMSCE IEEE Computer Society">
            <div className="flex items-center gap-3">
              <Image src="/club-logo.png" alt="" /* Decorative */ width={44} height={44} />
              <span className="text-sm text-green-300 font-medium hidden sm:block">BMSCE IEEE CS</span>
            </div>
          </Link>
        </div>

        {/* Use a nav landmark for accessibility */}
        <nav aria-label="Primary" className="hidden md:flex gap-6 items-center">
          <a href="#home" className="text-sm text-neutral-200 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-sm text-neutral-200 hover:text-white transition-colors">About</a>
          <a href="#resources" className="text-sm text-neutral-200 hover:text-white transition-colors">Resource persons</a>
          <a href="#schedule" className="text-sm text-neutral-200 hover:text-white transition-colors">Schedule</a>
          <a 
            href="#register" 
            className="text-sm text-white px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-400 shadow-lg hover:brightness-110 transition-all animate-neon-glow"
          >
            Register
          </a>
        </nav>

        {/* Mobile menu (simple) */}
        <div className="md:hidden">
          <a href="#register" className="text-sm text-white px-3 py-2 rounded-lg bg-green-600 animate-neon-glow">Register</a>
        </div>
      </div>
    </header>
  );
}