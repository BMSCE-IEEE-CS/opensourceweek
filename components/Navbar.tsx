import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  // --- EDIT YOUR WHATSAPP LINK HERE ---
  const whatsappLink = "https://chat.whatsapp.com/YOUR_GROUP_ID_HERE";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/50 border-b border-green-900/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <Link href="/" aria-label="Home">
            <div className="flex items-center gap-3">
              {/* 1. Increased size from 44x44 to 56x56 */}
              <Image 
                src="/club-logo.png" 
                alt="BMSCE IEEE CS Logo" 
                width={85} 
                height={85} 
              />
              {/* 2. Removed the span text */}
            </div>
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden md:flex gap-6 items-center">
          <a href="#home" className="text-sm text-neutral-200 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-sm text-neutral-200 hover:text-white transition-colors">About</a>
          <a href="#resources" className="text-sm text-neutral-200 hover:text-white transition-colors">Resource persons</a>
          <a href="#schedule" className="text-sm text-neutral-200 hover:text-white transition-colors">Schedule</a>
          {/* 3. & 4. Changed text and link */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-400 shadow-lg hover:brightness-110 transition-all animate-neon-glow"
          >
            Stay Updated!
          </a>
        </nav>

        {/* Mobile menu (simple) */}
        <div className="md:hidden">
          {/* 3. & 4. Changed text and link for mobile */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white px-3 py-2 rounded-lg bg-green-600 animate-neon-glow"
          >
            Stay Updated!
          </a>
        </div>
      </div>
    </header>
  );
}
