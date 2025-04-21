import { PrismaClient, Prisma } from "@/generated/prisma"


const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'David',
    email: 'david@mail.io',
    password: "test123",
    role: "LEAD",
    posts: {
      create: [
        {
          title: 'on progress task',
          content: 'still on progress for this task',
          progress: "ON_PROGRESS"
        },
        {
          title: 'it still been rejected',
          content: 'task was been rejected',
          progress: "REJECT"
        },
      ],
    },
  },
  {
    name: 'William',
    email: 'william@mail.io',
    password: "test234",
    role: "TEAM",
  }
]

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()