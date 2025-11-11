"use client";

import React, { useEffect, useRef, useState } from "react";
import { easeOut, motion, useReducedMotion, Variants } from "framer-motion";

type Item = {
  id: string;
  title: string;
  time: string;
  desc?: string;
  side: "left" | "right"; // Explicit side
  children?: Omit<Item, "side" | "children">[]; // Sub-items
};

// --- THIS ARRAY IS NOW UPDATED BASED ON YOUR IMAGE ---
const TIMELINE: Item[] = [
  {
    id: "industry",
    title: "Industry Visit",
    time: "17th Nov",
    desc: "Guided tour and interactive sessions.",
    side: "left",
  },
  {
    id: "github",
    title: "GitHub 101",
    time: "18th Nov, 10am - 2pm",
    desc: "Learn the fundamentals of version control and collaboration.",
    side: "right",
  },
  {
    id: "matlab",
    title: "Matlab Workshop",
    time: "18th Nov, 10am - 1pm",
    desc: "A hands-on session on Matlab for engineers and scientists.",
    side: "left",
  },
  {
    id: "sprint",
    title: "Contribution Sprint",
    time: "19th Nov, 10am - 4pm",
    desc: "Mentored sprint to submit issues, fixes, and features.",
    side: "right",
  },
  {
    id: "agentic",
    title: "Agentic AI Unpacked",
    time: "20th Nov / 22nd Nov",
    desc: "Dives into the latest in autonomous AI agents.",
    side: "left",
  },
  {
    id: "repogenesis",
    title: "RepoGenesis — 24-Hour Hackathon",
    time: "21st Nov 5pm - 22nd Nov 5pm",
    desc: "24-hour open-source hackathon with checkpoints.",
    side: "right",
    children: [
      {
        id: "rg1",
        title: "Hackathon Kickoff",
        time: "21st Nov, 5:00 PM",
      },
      { id: "rg2", title: "Checkpoint 1", time: "21st Nov, 10:00 PM" },
      { id: "rg3", title: "Checkpoint 2", time: "22nd Nov, 10:00 AM" },
      { id: "rg4", title: "Final Demos & Judging", time: "22nd Nov, 5:00 PM" },
    ],
  },
];
// --- END OF UPDATES ---

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const shouldReduceMotion = useReducedMotion();

  // This effect tracks which item is in the center of the viewport
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute("data-id");
            if (!id) return;
            const idx = TIMELINE.findIndex((t) => t.id === id);
            if (idx >= 0) setActiveIdx(idx);
          }
        });
      },
      // Triggers when item is in the vertical center 40% of the screen
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );

    const refs = Object.values(itemRefs.current);
    refs.forEach((el) => el && obs.observe(el));
    return () => refs.forEach((el) => el && obs.disconnect());
  }, []);

  // Calculate top position for the animated slider
  const sliderTop = activeIdx * (100 / Math.max(1, TIMELINE.length - 1));

  return (
    <section
      id="schedule"
      ref={containerRef}
      className="py-16 overflow-x-hidden" // Removed bg-black
    >
      <div className="max-w-4xl mx-auto px-6 relative">
        <h2 className="text-3xl font-extrabold text-white mb-12 text-center">
          Event Schedule
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-green-900/40 h-full top-0 hidden md:block"
            aria-hidden="true"
          ></div>

          {/* Mobile vertical line */}
          <div
            className="absolute left-[9px] w-[2px] bg-green-900/40 h-full top-0 md:hidden"
            aria-hidden="true"
          ></div>

          {/* Animated slider marker (desktop only) */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-green-400 shadow-lg border-2 border-green-800 hidden md:block"
            aria-hidden="true"
            initial={false}
            animate={{
              top: `${sliderTop}%`,
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 120, damping: 18 }
            }
          />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => {
              const side = item.side;

              const itemVariants: Variants = {
                hidden: {
                  opacity: 0,
                  x: shouldReduceMotion ? 0 : side === "left" ? -30 : 30,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.4,
                    ease: easeOut,
                  },
                },
              };

              const mobileItemVariants: Variants = {
                hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.4,
                    ease: easeOut,
                  },
                },
              };

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[item.id] = el;
                  }}
                  data-id={item.id}
                  className="relative md:grid md:grid-cols-2 md:items-start md:gap-8"
                >
                  <div
                    className="hidden md:block absolute left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-green-600"
                    aria-hidden="true"
                  />

                  {/* --- DESKTOP VIEW --- */}
                  {side === "left" ? (
                    <motion.div
                      className="hidden md:block"
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <TimelineCard item={item} />
                    </motion.div>
                  ) : (
                    <div className="hidden md:block"></div> // Spacer
                  )}

                  {side === "right" ? (
                    <motion.div
                      className="hidden md:block"
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <TimelineCard item={item} />
                    </motion.div>
                  ) : (
                    <div className="hidden md:block"></div> // Spacer
                  )}

                  {/* --- MOBILE VIEW --- */}
                  <motion.div
                    className="md:hidden flex gap-4 items-start"
                    variants={mobileItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <div
                      className="w-5 h-5 rounded-full bg-green-400 shadow-lg border-2 border-green-800 mt-1 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <TimelineCard item={item} />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper component for the card content
const TimelineCard = ({ item }: { item: Item }) => (
  <div className="cursor-target bg-neutral-900/40 border border-green-900/30 p-4 rounded-lg shadow-md">
    <div className="text-base font-semibold text-green-300">{item.title}</div>
    <div className="text-xs text-neutral-400 mt-1">{item.time}</div>
    {item.desc && <p className="text-sm text-neutral-300 mt-2">{item.desc}</p>}

    {/* nested sub-timeline (RepoGenesis) */}
    {item.children && (
      <div className="mt-4">
        <div className="ml-2 border-l-2 border-green-800/50 pl-4 space-y-3">
          {item.children.map((c) => (
            <div key={c.id} className="text-sm text-neutral-300 relative">
              <div
                className="absolute -left-[19px] top-1.5 w-2 h-2 rounded-full bg-green-600"
                aria-hidden="true"
              ></div>
              <div className="font-medium text-green-300">{c.title}</div>
              <div className="text-xs text-neutral-400">{c.time}</div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);
