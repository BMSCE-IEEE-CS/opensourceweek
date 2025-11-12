"use client";

import React from "react";
import { motion } from "framer-motion";
import { EventRegisterModal } from "./EventRegisterModal";

// Updated highlights array
const highlights = [
  {
    title: "Industry Visit",
    desc: "17th Nov | Guided tour and sessions on cloud, DevOps and careers.",
    longDesc:
      "An exclusive visit for 60-70 students to a top tech campus in Bengaluru. Get insights from industry professionals, learn about open-source contributions, and explore career paths in cloud-native technologies.",
    posterUrl: "/posters/industry-visit.png",
    registerLink: "https://tinyurl.com/OS-Week-MATLAB-Workshop",
  },
  {
    title: "GitHub 101",
    desc: "18th Nov, 10am - 2pm | The fundamentals of version control.",
    longDesc:
      "This workshop covers the fundamentals of Git and GitHub, from creating repositories and branches to making pull requests. Perfect for beginners!",
    posterUrl: "/posters/github101.png",
    registerLink: "https://tinyurl.com/OS-Week-MATLAB-Workshop",
  },
  {
    title: "Matlab Workshop",
    desc: "18th Nov, 10am - 1pm | A hands-on session on Matlab.",
    longDesc:
      "A hands-on session covering the basics and advanced features of Matlab, a powerful tool for engineers and scientists.",
    posterUrl: "/posters/matlab.png",
    registerLink: "https://tinyurl.com/OS-Week-MATLAB-Workshop",
  },
  {
    title: "Contribution Sprint",
    desc: "19th Nov, 10am - 4pm | Mentored sprint to submit issues & features.",
    longDesc:
      "Join our mentored contribution sprint! Find a project, claim an issue, and make your first (or next) open-source contribution with the help of experienced mentors.",
    posterUrl: "/posters/sprint.png",
    registerLink: "https://tinyurl.com/OS-Week-MATLAB-Workshop",
  },
  {
    title: "Agentic AI Unpacked",
    desc: "20th Nov | Dives into the latest in autonomous AI agents.",
    longDesc:
      "This workshop dives into the latest in autonomous AI agents, exploring how they work and how you can build your own.",
    posterUrl: "/posters/agentic-ai.png",
    registerLink: "https://tinyurl.com/OS-Week-Agentic-AI",
  },
  {
    title: "RepoGenesis — 24-Hour Hackathon",
    desc: "21st Nov 5pm - 22nd Nov 5pm | Build open-source solutions.",
    longDesc:
      "The main event! A 24-hour hackathon where teams of 2-4 build an open-source solution from scratch. Includes mentorship, checkpoints, and prizes!",
    posterUrl: "/posters/repogenesis.png",
    registerLink: "https://tinyurl.com/OS-Week-Repogenesis",
  },
];

export default function EventHighlights() {
  return (
    <section id="highlights" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
          Our Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <EventRegisterModal key={h.title} event={h}>
              <motion.article
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06, ease: "easeOut" }}
                // --- THIS IS THE FIX ---
                // Added 'hover:bg-radial-glow' to add the inner pattern on hover
                className="cursor-target p-6 rounded-xl border border-green-900/30 bg-gradient-to-b from-neutral-900/40 to-black/20 h-full transition-all duration-300 hover:scale-[1.03] hover:border-green-400/80 hover:shadow-neon-outer hover:shadow-neon-inner hover:hover:bg-green-900/50"
                // --- END OF FIX ---
              >
                <h3 className="text-lg font-semibold text-green-300">
                  {h.title}
                </h3>
                <p className="text-sm text-neutral-300 mt-2">{h.desc}</p>
              </motion.article>
            </EventRegisterModal>
          ))}
        </div>
      </div>
    </section>
  );
}
