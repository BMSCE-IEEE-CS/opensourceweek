"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// --- IMPORTANT ---
// This date MUST match the EVENT_START_ISO in app/layout.tsx
const EVENT_START = new Date("2025-11-20T09:00:00"); // <- edit this

function pad(n: number) { return String(n).padStart(2, "0"); }

export default function HeroCountdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, EVENT_START.getTime() - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const isStarted = diff <= 0;

  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="max-w-6xl w-full px-6 py-12 flex items-center justify-center">
        <div className="text-center">
          {/* 1. Increased max-width from lg to 2xl */}
          <div className="mx-auto max-w-2xl">
            
            {/* 2. Increased text from lg to xl */}
            <p className="text-xl font-semibold mb-8">
              <span className="text-white">BMSCE IEEE Computer Society</span>
              <span className="text-green-300 ml-2">presents</span>
            </p>

            <Image 
              src="/title.png" 
              alt="Open Source Week" 
              width={720} 
              height={180} 
              className="mx-auto w-full h-auto" // Use w-full to scale with parent
              priority // Load this image first
            />
            
            {/* 3. Increased text from lg to xl and margin-top */}
            <p className="mt-10 text-xl text-green-200">Starts in</p>

            {isStarted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-3xl md:text-5xl text-white font-semibold"
              >
                It’s happening now 🚀
              </motion.div>
            ) : (
              // 4. Increased margin-top, gap, and text sizes
              <div className="mt-6 flex gap-4 justify-center">
                {[
                  { label: "Days", value: days },
                  { label: "Hours", value: hours },
                  { label: "Minutes", value: minutes },
                  { label: "Seconds", value: seconds },
                ].map((seg, i) => (
                  <motion.div
                    key={seg.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-neutral-900/50 border border-green-900/30 backdrop-blur-sm px-4 py-3 rounded-lg text-center min-w-[80px] sm:min-w-[96px] flex flex-col items-center"
                    aria-label={`${seg.value} ${seg.label}`}
                    suppressHydrationWarning={true}
                  >
                    <div 
                      className="font-mono text-3xl md:text-4xl text-green-300" 
                      aria-hidden="true"
                      suppressHydrationWarning={true}
                    >
                      {pad(seg.value)}
                    </div>
                    <div className="text-sm text-neutral-400" aria-hidden="true">{seg.label}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* 5. Increased margin-top, gap, and button/text sizes */}
            <div className="mt-10 flex gap-4 justify-center">
              <a 
                href="#register" 
                className="px-6 py-3 text-lg rounded-md bg-gradient-to-r from-green-500 to-green-400 text-black font-semibold shadow-lg hover:scale-[1.02] transition-transform animate-neon-glow"
              >
                Register Now
              </a>
              <a 
                href="#highlights" 
                className="px-6 py-3 text-lg rounded-md border border-green-700 text-green-200 hover:bg-green-900/30 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
