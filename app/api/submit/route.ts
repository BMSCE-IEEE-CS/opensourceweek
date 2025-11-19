import { auth } from "@/app/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();

  if (!session?.user?.email) {
    return Response.json({ submissions: [] });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return Response.json({ submissions: [] });
  }

  const submissions = await prisma.solution.findMany({
    where: { userId: user.id },
    select: { probName: true },
  });

  return Response.json({
    submissions: submissions.map((s) => s.probName),
  });
}
