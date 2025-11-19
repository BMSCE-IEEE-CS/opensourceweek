"use client";

import { GET_USERS_PROJECTS } from "@/lib/operation";
import { useQuery } from "@apollo/client/react";
import Image from "next/image";
import React from "react";

interface Solution {
  id: string;
  probName: string;
  solLink: string;
  liveLink?: string | null;
  createdAt: string;
}

interface User {
  id: string;
  name?: string | null;
  image?: string | null;
  solutions: Solution[];
}

interface QueryData {
  users: User[];
}

const SprintProjects: React.FC = () => {
  const { data, loading, error } = useQuery<QueryData>(GET_USERS_PROJECTS);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-32 h-32 rounded-full bg-green-300 animate-ping"></div>
      </div>
    );

  if (error)
    return (
      <h1 className="text-red-500 text-center mt-20">Error Fetching Data</h1>
    );

  return (
    <div className="flex flex-col items-center justify-center w-full text-white px-4 py-20 space-y-12">
      <Image
        className="w-3/4 md:w-1/2"
        src="/sprintTitle.png"
        alt="Title"
        width={600}
        height={200}
      />
      <h1 className="text-2xl md:text-4xl text-green-400 font-bold mt-10">
        PROJECTS AND USERS
      </h1>

      <div className="flex flex-col space-y-8 w-full max-w-4xl">
        {data?.users.map((user) => (
          <div
            key={user.id}
            className="bg-gray-900 bg-opacity-50 rounded-xl p-6 flex flex-col space-y-4 shadow-lg"
          >
            <div className="flex items-center space-x-4">
              {user.image && (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              )}
              <h2 className="text-xl font-semibold">
                {user.name || "Anonymous"}
              </h2>
            </div>

            <div className="space-y-3">
              {user.solutions.length === 0 && (
                <p className="text-gray-400">No projects submitted yet.</p>
              )}
              {user.solutions.map((solution) => (
                <div
                  key={solution.id}
                  className="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
                >
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-green-300">
                      {solution.probName}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Submitted: {solution.createdAt}
                    </p>
                  </div>

                  <div className="flex space-x-2 ml-4">
                    <a
                      href={solution.solLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-green-500 rounded hover:bg-green-600 text-black transition font-bold"
                    >
                      Solution
                    </a>
                    {solution.liveLink && (
                      <a
                        href={solution.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-white rounded text-black transition font-bold"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SprintProjects;
