"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

interface Team {
  name: string;
  track: string;
  room: string;
}

interface Project {
  timestamp: string;
  email: string;
  teamname: string;
  track: string;
  idea: string;
  github: string;
  demo: string;
}

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
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

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.problems || []);
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

      {/* <h1 className="text-3xl md:text-4xl font-bold mt-10 text-center">
        Template Repositories
      </h1>
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full md:w-4/5 mt-10">
        <Link
          target="_blank"
          className="bg-white/50 w-full p-6 rounded-2xl text-white text-center font-bold text-xl hover:bg-white/40 transition-all duration-200"
          href="https://github.com/BMSCE-IEEE-CS/repogenesis-open-innovation"
        >
          Open Innovation
        </Link>
        <Link
          target="_blank"
          className="bg-green-500/60 w-full p-6 rounded-2xl text-white text-center font-bold text-xl hover:bg-green-500/40 transition-all duration-200"
          href="https://github.com/BMSCE-IEEE-CS/repogenesis-healthcare"
        >
          HealthCare
        </Link>
        <Link
          target="_blank"
          className="bg-yellow-500/60 w-full p-6 rounded-2xl text-white text-center font-bold text-xl hover:bg-yellow-500/40 transition-all duration-200"
          href="https://github.com/BMSCE-IEEE-CS/repogenesis-fintech"
        >
          FinTech
        </Link>
      </div>
      <Link
        className="bg-red-500/60 hover:bg-red-500/40 w-full md:w-4/5 p-6 rounded-2xl mt-5 text-center font-bold text-xl"
        href="/repogenesis_guide.pdf"
      >
        Guide
      </Link> */}

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="flex flex-col w-full md:w-4/5">
          <h1 className="text-2xl md:text-3xl font-bold mt-10 mb-6 text-center">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-indigo-400"
                >
                  {project.teamname}
                </a>

                <span className="px-3 py-1 mb-4 text-xs font-semibold text-gray-200 bg-indigo-600/40 rounded-full mt-2">
                  {project.track}
                </span>

                <p className="text-gray-300 mb-6 line-clamp-3">
                  {project.idea}
                </p>

                <div className="flex w-full gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-center text-sm font-semibold bg-black text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-center text-sm font-semibold bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
