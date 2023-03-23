import { Prisma, PrismaClient } from '@prisma/client';
import { User } from './user';
const prisma = new PrismaClient();

async function runSeeders() {
  // Users
  await Promise.all(
    User.map(
      async (user) =>
        await prisma.user.upsert({
          where: { email: user.email },
          update: {},
          create: user,
        }),
    ),
  );
}

runSeeders()
  .catch((e) => {
    console.error(`There was an error while seeding: ${e}`);
    process.exit(1);
  })
  .finally(async () => {
    console.log('Successfully seeded database. Closing connection.');
    await prisma.$disconnect();
  });
