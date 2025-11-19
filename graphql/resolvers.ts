import { auth } from "@/app/auth";
import { prisma } from "@/lib/prisma";

export const resolvers = {
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
