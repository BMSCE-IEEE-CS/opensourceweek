"use client";

import React from "react";
import { motion } from "framer-motion";
import { EventRegisterModal } from "./EventRegisterModal"; // <-- 1. IMPORT MODAL

// 2. UPDATE THE HIGHLIGHTS ARRAY
// Add posterUrl, registerLink, and an optional longDesc for each event
const highlights = [
  {
    title: "Industry Visit — Red Hat (Day 1)",
    desc: "Guided tour and sessions on cloud, DevOps and careers.",
    longDesc:
      "An exclusive visit for 60-70 students to the Red Hat campus in Bengaluru. Get insights from industry professionals, learn about open-source contributions, and explore career paths in cloud-native technologies.",
    posterUrl: "/posters/redhat-visit.png", // <-- ADD POSTER PATH
    registerLink: "https://forms.google.com/YOUR_LINK_HERE", // <-- ADD GOOGLE FORM LINK
  },
  {
    title: "Workshops (Day 2)",
    desc: "GitHub 101 • Agentic AI Unpacked",
    longDesc:
      "Two parallel workshops. 'GitHub 101' covers the fundamentals of version control and collaboration. 'Agentic AI Unpacked' dives into the latest in autonomous AI agents and how to build them.",
    posterUrl: "/posters/workshops.png",
    registerLink: "https://forms.google.com/YOUR_LINK_HERE",
  },
  {
    title: "Contribution Sprint (Day 3)",
    desc: "Mentored sprint to submit issues, fixes and features.",
    longDesc:
      "Join our mentored contribution sprint! Find a project, claim an issue, and make your first (or next) open-source contribution with the help of experienced mentors. Virtual participation is available.",
    posterUrl: "/posters/sprint.png",
    registerLink: "https://forms.google.com/YOUR_LINK_HERE",
  },
  {
    title: "RepoGenesis — 24-Hour Hackathon (Days 4-5)",
    desc: "Teams build open-source solutions with mentorship.",
    longDesc:
      "The main event! A 24-hour hackathon where teams of 2-4 build an open-source solution from scratch. Includes mentorship, checkpoints, and prizes for the best projects. See the 'Schedule' section for the detailed timeline.",
    posterUrl: "/posters/repogenesis.png",
    registerLink: "https://forms.google.com/YOUR_LINK_HERE",
  },
];

export default function EventHighlights() {
  return (
    <section id="highlights" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
          Event Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 3. WRAP EACH CARD IN THE MODAL */}
          {highlights.map((h, i) => (
            <EventRegisterModal key={h.title} event={h}>
              <motion.article
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06, ease: "easeOut" }}
                className="cursor-target p-6 rounded-xl border border-green-900/30 bg-gradient-to-b from-neutral-900/40 to-black/20 h-full"
              >
                <h3 className="text-lg font-semibold text-green-300">
                  {h.title}
                </h3>
                <p className="text-sm text-neutral-300 mt-2">{h.desc}</p>
                {/* We remove the button from here, the whole card is the button */}
              </motion.article>
            </EventRegisterModal>
          ))}
        </div>
      </div>
    </section>
  );
}
