import { prisma } from "../lib/prisma";

async function cleanup() {
  await prisma.account.deleteMany({
    where: {
      user: undefined,
    },
  });

  await prisma.session.deleteMany({
    where: {
      user: undefined,
    },
  });

  console.log("Orphaned accounts and sessions cleared");
}

cleanup()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
