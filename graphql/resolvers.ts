import { auth } from "@/app/auth";
import { prisma } from "@/lib/prisma";

const toIST = (date: Date) => {
  const istOffset = 5.5 * 60 * 60 * 1000;
  return new Date(date.getTime() + istOffset);
};

export const resolvers = {
  Query: {
    users: async () => {
      const excludeIDs = [
        "692018e1e08636dbecefd98f",
        "69201ba7f38d81b7ab7e9fb9",
        "69202bcbe0428cc824c0a4a4",
        "69202bf80696d4e20b1e7427",
        "69202d000696d4e20b1e742a",
        "69202e36ce96c30f7a9e161e",
        "692046f70696d4e20b1e742e",
        "69204065ce96c30f7a9e1631",
        "6920405cce96c30f7a9e162e",
        "69204055ce96c30f7a9e162b",
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
        solutions: user.solutions.map((solution) => {
          const istDate = toIST(solution.createdAt);
          return {
            ...solution,
            createdAt: istDate.toLocaleString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
        }),
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
