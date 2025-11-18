"use client";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

interface Problem {
  name: string;
  github: string;
  enabled: boolean;
}

export default function ContributionSprint() {
  const { data: session, status } = useSession();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/sprint-programs")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched problems:", data);
        setProblems(data.problems || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch problems:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
      <Image src="/sprintTitle.png" alt="Title" width={600} height={200} />

      {status === "loading" ? (
        <p>Loading...</p>
      ) : !session?.user ? (
        <button
          onClick={() => signIn("github")}
          className="bg-white/40 rounded-lg px-6 py-3 mt-10 cursor-pointer"
        >
          Login
        </button>
      ) : (
        <div className="flex items-center gap-4 mt-10 bg-white/25 p-4 rounded-xl w-1/2 justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={session.user.image ?? "/default-avatar.png"}
              width={64}
              height={64}
              alt={session.user.name ?? "User"}
              className="rounded-full border-2 border-white"
            />
            <h1 className="text-xl">{session.user.name}</h1>
          </div>

          <button
            onClick={() => signOut()}
            className="bg-red-400 text-black font-semibold px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      )}

      <div className="mt-16 w-full max-w-3xl flex flex-col gap-6">
        {loading ? (
          <p className="text-center text-xl opacity-80">Fetching problems...</p>
        ) : problems.length === 0 ? (
          <p className="text-center text-xl opacity-80">
            No problems found or all disabled.
          </p>
        ) : (
          problems.map((p, idx) => (
            <div
              key={idx}
              className="bg-white/25 backdrop-blur-sm p-6 rounded-xl border border-white/20 flex items-center justify-between"
            >
              <h2 className="text-xl font-semibold">{p.name}</h2>

              <div className="flex gap-4">
                <button
                  onClick={() => window.open(p.github, "_blank")}
                  className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold"
                >
                  Open GitHub
                </button>

                <button
                  onClick={() => alert(`Info for: ${p.name}`)}
                  className="bg-orange-400 text-black px-4 py-2 rounded-lg font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
