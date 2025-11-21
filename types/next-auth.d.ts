import NextAuth, { DefaultSession } from "next-auth";
import { Role } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      image?: string | null;
      email?: string | null;
      role?: Role[];
    };
  }

  interface User {
    id: string;
    role?: Role[];
  }
}
