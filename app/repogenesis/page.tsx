"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Team {
  name: string;
  track: string;
  room: string;
}

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/rg-teams")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col items-center py-16 px-4">
      <Image src="/RGtitle.png" alt="Title" width={600} height={200} />

      {/* <h1 className="p-6 bg-yellow-500/60 rounded-2xl text-xl italic mt-4 text-center">
        Teams will be working on their own problem statments understand their
        chosen track.
      </h1> */}

      <h1 className="text-3xl md:text-4xl font-bold mt-10 text-center">
        Template Repositories
      </h1>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full md:w-4/5 mt-10">
        <Link
          target="_blank"
          className="bg-white/50 w-full p-6 rounded-2xl text-white text-center font-bold text-xl cursor-target hover:bg-white/40 transition-all duration-200"
          href="https://github.com/BMSCE-IEEE-CS/repogenesis-open-innovation"
        >
          Open Innovation
        </Link>
        <Link
          target="_blank"
          className="bg-green-500/60 w-full p-6 rounded-2xl text-white text-center font-bold text-xl cursor-target hover:bg-green-500/40 transition-all duration-200"
          href="https://github.com/BMSCE-IEEE-CS/repogenesis-healthcare"
        >
          HealthCare
        </Link>
        <Link
          target="_blank"
          className="bg-yellow-500/60 w-full p-6 rounded-2xl text-white text-center font-bold text-xl cursor-target hover:bg-yellow-500/40 transition-all duration-200"
          href="https://github.com/BMSCE-IEEE-CS/repogenesis-fintech"
        >
          FinTech
        </Link>
      </div>
      <Link
        className="bg-red-500/60 hover:bg-red-500/40 w-full md:w-4/5 p-6 rounded-2xl mt-5 text-center font-bold text-xl cursor-target"
        href="/repogenesis_guide.pdf"
      >
        Guide
      </Link>

      {loading ? (
        <p>Loading teams...</p>
      ) : (
        <div className="flex flex-col w-full md:w-4/5">
          <div className="flex flex-col w-full mt-10">
            <h1 className="text-2xl md:text-4xl text-center mb-4 font-bold">
              Open Innovation
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {teams
                .filter((team) => team.track === "OI")
                .map((team, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-between p-4 rounded-xl shadow-lg w-full text-black bg-white/80"
                  >
                    <h1 className="text-2xl md:text-3xl font-bold">
                      {team.name}
                    </h1>
                    <h1 className="text-center mt-2">{team.room}</h1>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col w-full mt-10">
            <h1 className="text-2xl md:text-4xl text-center mb-4 font-bold">
              HealthCare
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {teams
                .filter((team) => team.track === "H")
                .map((team, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-between p-4 rounded-xl shadow-lg w-full text-black bg-green-400/80"
                  >
                    <h1 className="text-2xl md:text-3xl font-bold">
                      {team.name}
                    </h1>
                    <h1 className="text-center mt-2">{team.room}</h1>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col w-full mt-10">
            <h1 className="text-2xl md:text-4xl text-center mb-4 font-bold">
              FinTech
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {teams
                .filter((team) => team.track === "F")
                .map((team, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-between p-4 rounded-xl shadow-lg w-full text-black bg-yellow-500/80"
                  >
                    <h1 className="text-2xl md:text-3xl font-bold">
                      {team.name}
                    </h1>
                    <h1 className="text-center mt-2">{team.room}</h1>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
