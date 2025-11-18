"use client";

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client/react";
import { SUBMIT_SOLUTION } from "@/lib/operation";
import toast from "react-hot-toast";

export default function ContributionSprint() {
  const { data: session, status } = useSession();
  const [programs, setPrograms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");

  const [submitSolution] = useMutation(SUBMIT_SOLUTION);

  useEffect(() => {
    fetch("/api/sprint-programs")
      .then((res) => res.json())
      .then(({ problems }) => setPrograms(problems));
  }, []);

  const openModal = (probName: string) => {
    setSelectedProblem(probName);
    setGithubUrl("");
    setLiveUrl("");
    setShowModal(true);
  };

  const handleSubmit = async () => {
    if (!githubUrl.trim()) {
      alert("GitHub URL is required");
      return;
    }

    await submitSolution({
      variables: {
        probName: selectedProblem,
        solLink: githubUrl,
        liveLink: liveUrl || null,
      },
    });

    toast.success("Submitted Successfully");
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
      <Image src="/sprintTitle.png" alt="Title" width={600} height={200} />

      {status === "loading" ? (
        <p>Loading...</p>
      ) : !session?.user ? (
        <button
          onClick={() => signIn("github")}
          className="bg-white/40 rounded-lg px-6 py-3 mt-10"
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
        {programs.map((p, idx) => (
          <div
            key={idx}
            className="bg-white/20 p-6 rounded-xl border border-white/20 flex items-center justify-between"
          >
            <h2 className="text-xl font-semibold">{p.name}</h2>

            <div className="flex gap-4">
              <button
                onClick={() => window.open(p.github, "_blank")}
                className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold"
              >
                GitHub
              </button>

              <button
                onClick={() => openModal(p.name)}
                className="bg-blue-400 text-black px-4 py-2 rounded-lg font-semibold"
              >
                Submit
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white text-black p-8 rounded-xl w-96 shadow-xl flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-center">Submit Solution</h2>
            <p className="text-gray-600 text-center mb-4">
              Problem: <strong>{selectedProblem}</strong>
            </p>

            <input
              type="text"
              placeholder="GitHub URL (required)"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              className="border p-2 rounded-lg w-full"
            />

            <input
              type="text"
              placeholder="Live URL (optional)"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
              className="border p-2 rounded-lg w-full"
            />

            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-green-500 text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
