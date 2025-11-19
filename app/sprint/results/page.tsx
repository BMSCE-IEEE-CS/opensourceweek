import SprintProjects from "@/components/SprintProjects";
import SprintWinners from "@/components/SprintWinners";
import Image from "next/image";

const SprintResults = () => {
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
        WINNERS
      </h1>
      <SprintWinners />

      <h1 className="text-2xl md:text-4xl text-green-400 font-bold mt-10">
        PROJECTS
      </h1>
      <SprintProjects />
    </div>
  );
};

export default SprintResults;
