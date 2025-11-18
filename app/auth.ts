import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

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
});
