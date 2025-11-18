"use client";

import DotGrid from "@/components/DotGrid";
import TargetCursor from "@/components/TargetCursor";

export default function ClientEnvironment() {
  return (
    <>
      <div className="fixed inset-0 -z-10 w-full h-screen bg-black">
        <DotGrid
          dotSize={2}
          gap={20}
          baseColor="#064e3b"
          activeColor="#34d399"
          proximity={40}
          shockRadius={250}
          shockStrength={0.5}
          resistance={1000}
          returnDuration={0.5}
        />
      </div>

      <TargetCursor />
    </>
  );
}
