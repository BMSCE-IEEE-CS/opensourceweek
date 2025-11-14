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
          <Link href="/" aria-label="Home" className="cursor-target">
            <div className="flex items-center gap-3">
              <Image
                src="/club-logo.png"
                alt="BMSCE IEEE CS Logo"
                width={100}
                height={100}
              />
            </div>
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden md:flex gap-6 items-center">
          <a
            href="#home"
            className="cursor-target text-sm text-neutral-200 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="cursor-target text-sm text-neutral-200 hover:text-white transition-colors"
          >
            About
          </a>
          {/* <a href="#resources" className="cursor-target text-sm text-neutral-200 hover:text-white transition-colors">Resource persons</a> */}
          <a
            href="#schedule"
            className="cursor-target text-sm text-neutral-200 hover:text-white transition-colors"
          >
            Schedule
          </a>
          <a
            href="#highlights"
            className="cursor-target text-sm px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-400 shadow-lg hover:brightness-110 font-bold transition-all hover:animate-neon-glow"
          >
            Register Now
          </a>
        </nav>

        {/* Mobile menu (simple) */}
        <div className="md:hidden">
          <a
            href="#highlights"
            className="cursor-target text-base font-bold px-3 py-2 rounded-lg bg-green-600 hover:animate-neon-glow"
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  );
}
