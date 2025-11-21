"use client";

import { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { useSession, signIn, signOut } from "next-auth/react";

type ScannerProps = {
  scanType: "attendance" | "entry" | "breakfast" | "lunch" | "dinner";
  scannerId?: string;
};

export default function ReuseScan({ scanType, scannerId }: ScannerProps) {
  const { data: session, status: authStatus } = useSession();

  const [scanned, setScanned] = useState<string>("");
  const [status, setStatus] = useState<{ type: string; text?: string }>({
    type: "idle",
  });
  const [lastUid, setLastUid] = useState<string | null>(null);

  function extractUid(payload: string) {
    try {
      const url = new URL(payload);
      const id = url.searchParams.get("id");
      if (id) return id;
    } catch (e) {}
    return payload;
  }

  async function handleDecode(decodedObj: any) {
    if (!decodedObj) return;
    const raw = decodedObj.rawValue;
    if (!raw) return;

    const uid = extractUid(raw.trim());
    setScanned(uid);

    if (uid === lastUid) return;
    setLastUid(uid);

    setStatus({ type: "loading", text: "Verifying..." });

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          qr: raw,
          type: scanType,
          scanner: scannerId ?? "device-1",
        }),
      });

      const json = await res.json();

      if (json.success) {
        setStatus({ type: "success", text: json.message });
      } else if (json.already) {
        setStatus({ type: "already", text: json.message });
      } else {
        setStatus({ type: "error", text: json.message });
      }
    } catch (e) {
      setStatus({ type: "error", text: "Server or network error" });
    }

    setTimeout(() => setLastUid(null), 2000);
  }

  const userRoles = session?.user?.role || [];
  const canScan = userRoles.includes("SCAN");

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-700 rounded-lg my-10">
      <div className="flex items-center justify-between mb-4">
        {authStatus === "loading" ? (
          <p className="text-white">Loading...</p>
        ) : session ? (
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="flex gap-3 items-center">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border"
                />
              )}
              <p className="text-white font-semibold">
                {session.user?.name || "User"}
              </p>
            </div>
            <button
              onClick={() => signOut()}
              className="ml-3 px-3 py-1 bg-red-600 text-white rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn("github")}
            className="px-3 py-1 bg-blue-600 text-white rounded w-full"
          >
            Login
          </button>
        )}
      </div>

      {session ? (
        canScan ? (
          <>
            <h2 className="text-2xl font-semibold mb-3 capitalize text-white text-center">
              {scanType} RepoGenesis Scanner
            </h2>

            <div className="w-full rounded overflow-hidden border">
              <Scanner
                onScan={(result) => {
                  if (Array.isArray(result)) {
                    handleDecode(result[0]);
                  } else {
                    handleDecode(result);
                  }
                }}
                onError={(err) => {
                  console.error("QR error:", err);
                  setStatus({ type: "error", text: "Camera error" });
                }}
                constraints={{ facingMode: "environment" }}
              />
            </div>

            <div className="mt-4 bg-white p-3 rounded shadow-sm">
              <p className="text-sm text-gray-600">Scanned:</p>
              <p className="font-mono break-all">{scanned || "---"}</p>

              {status.type === "loading" && (
                <p className="mt-2 text-yellow-600">{status.text}</p>
              )}
              {status.type === "success" && (
                <p className="mt-2 text-green-600">{status.text}</p>
              )}
              {status.type === "already" && (
                <p className="mt-2 text-amber-600">{status.text}</p>
              )}
              {status.type === "error" && (
                <p className="mt-2 text-red-600">{status.text}</p>
              )}
            </div>
          </>
        ) : (
          <p className="text-center text-red-400 mt-6">
            You are signed in but don't have permission to scan.
          </p>
        )
      ) : (
        <p className="text-center text-white mt-6">
          Please log in to use the scanner.
        </p>
      )}
    </div>
  );
}
