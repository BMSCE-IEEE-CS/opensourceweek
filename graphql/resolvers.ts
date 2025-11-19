import { auth } from "@/app/auth";
import { prisma } from "@/lib/prisma";

export const resolvers = {
  Query: {
    users: async () => {
      const excludeIDs = [
        "691d06d00d78ea9eff310f85",
        "691d2ac9df0b17d50c195d9e",
        "691d49438d10b4b9375aaac9",
      ];
      const data = await prisma.user.findMany({
        where: {
          NOT: excludeIDs.length ? { id: { in: excludeIDs } } : undefined,
        },
        include: {
          solutions: true,
        },
      });

      return data.map((user) => ({
        ...user,
        solutions: user.solutions.map((solution) => ({
          ...solution,
          createdAt: new Date(solution.createdAt).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
        })),
      }));
    },
    user: async (_: unknown, { id }: { id: string }) => {
      return prisma.user.findUnique({
        where: { id },
        include: { solutions: true },
      });
    },
    sprintWinners: async () => {
      const winnerIds = [
        "691d06d00d78ea9eff310f85",
        "691d2ac9df0b17d50c195d9e",
      ];

      return prisma.user.findMany({
        where: { id: { in: winnerIds } },
      });
    },
  },
  Mutation: {
    submitSolution: async (
      _: unknown,
      {
        probName,
        solLink,
        liveLink,
      }: { probName: string; solLink: string; liveLink?: string }
    ) => {
      const session = await auth();
      if (!session?.user?.email) throw new Error("Not authenticated");

      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      if (!user) throw new Error("User not found");

      const existing = await prisma.solution.findFirst({
        where: {
          userId: user.id,
          probName,
        },
      });

      if (existing) {
        throw new Error("You have already submitted this problem");
      }

      return prisma.solution.create({
        data: {
          probName,
          solLink,
          liveLink,
          userId: user.id,
        },
      });
    },
  },
};
