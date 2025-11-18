import Image from "next/image";
import React from "react";

const ContributionSprint = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <Image src="/sprintTitle.png" alt="Title" width={600} height={200} />
      <h1>Projects</h1>
    </div>
  );
};

export default ContributionSprint;
