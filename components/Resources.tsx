"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// --- EDIT PEOPLE DATA HERE ---
const people = [
  { name: "Dr. Alice Rao", role: "Workshop Host (GitHub 101)", img: "/placeholder-person-1.png", bio: "Senior engineer and OSS maintainer." },
  { name: "Mr. Rohit Kumar", role: "Agentic AI Workshop", img: "/placeholder-person-2.png", bio: "AI engineer focusing on open-source agents." },
];

const judges = [
  { name: "Ms. Kavya N", role: "Hackathon Judge", img: "/placeholder-person-3.png", bio: "CTO at OSS startup." },
  { name: "Mr. Arun P", role: "Hackathon Judge", img: "/placeholder-person-4.png", bio: "Senior Engineer, Mentor." },
];

const ResourceCard = ({ person, delay }: { person: typeof people[0], delay: number }) => (
  <motion.div 
    className="flex gap-4 items-start p-4 rounded-lg border border-green-900/30 bg-neutral-900/30"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay, ease: "easeOut" }}
  >
    <Image 
      src={person.img} 
      alt={person.name} 
      width={72} 
      height={72} 
      className="rounded-full object-cover w-16 h-16 md:w-[72px] md:h-[72px] flex-shrink-0 border-2 border-green-800/50" 
    />
    <div>
      <h4 className="text-base font-semibold text-green-300">{person.name}</h4>
      <div className="text-xs text-neutral-400">{person.role}</div>
      <p className="text-sm text-neutral-300 mt-2">{person.bio}</p>
    </div>
  </motion.div>
);

export default function Resources() {
  return (
    <section id="resources" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
          Resource Persons & Judges
        </h2>

        <h3 className="text-xl text-green-200 font-bold mb-6">Workshop Hosts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {people.map((p, i) => (
            <ResourceCard key={p.name} person={p} delay={i * 0.1} />
          ))}
        </div>

        <h3 className="mt-12 text-xl text-green-200 font-bold mb-6">Hackathon Judges</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {judges.map((j, i) => (
            <ResourceCard key={j.name} person={j} delay={(i + people.length) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}