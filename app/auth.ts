import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId:
        process.env.NODE_ENV === "production"
          ? process.env.AUTH_GITHUB_ID!
          : process.env.AUTH_GITHUB_LOCAL_ID!,
      clientSecret:
        process.env.NODE_ENV === "production"
          ? process.env.AUTH_GITHUB_SECRET!
          : process.env.AUTH_GITHUB_LOCAL_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;

        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { role: true },
        });

        session.user.role = dbUser?.role ?? [];
      }
      return session;
    },
  },
});
