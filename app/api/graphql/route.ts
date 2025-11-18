export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { createSchema, createYoga } from "graphql-yoga";
import { resolvers } from "@/graphql/resolvers";
import { typeDefs } from "@/graphql/schema";

console.log("NODE?", process.version);
console.log("RUNTIME?", process.release);

const yoga = createYoga<{ request: Request }>({
  schema: createSchema({ typeDefs, resolvers }),
  graphiql: process.env.NODE_ENV === "development",
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response, Request, Headers },
});

export async function GET(request: Request) {
  return yoga.fetch(request);
}

export async function POST(request: Request) {
  return yoga.fetch(request);
}
