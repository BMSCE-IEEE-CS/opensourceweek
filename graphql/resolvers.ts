import { auth } from "@/app/auth";
import { prisma } from "@/lib/prisma";

export const resolvers = {
  Query: {
    users: async () => {
      const excludeEmail = [
        "vageeshgn2005@gmail.com",
        "rishikans2005@gmail.com",
        "tanishaprakash259@gmail.com",
      ];
      const data = await prisma.user.findMany({
        where: {
          NOT: excludeEmail.length
            ? { email: { in: excludeEmail } }
            : undefined,
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
