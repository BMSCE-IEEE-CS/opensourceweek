export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/app/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { probName, solLink, liveLink } = await req.json();

    if (!probName || !solLink) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const solution = await prisma.solution.create({
      data: {
        probName,
        solLink,
        liveLink,
        userId: user.id,
      },
    });

    return NextResponse.json({ success: true, solution });
  } catch (error) {
    console.error("SUBMIT ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
