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
        {
          title: "it's still not been taken",
          content: "there is no progress here",
          progress: "NOT_STARTED"
        },
        {
            title: "it's already done",
            content: 'heres the project was done',
            progress: "DONE"
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