import { PrismaClient, Prisma } from "@/generated/prisma"


const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'David',
    email: 'david@mail.io',
    role: "LEAD",
    posts: {
      create: [
        {
          title: 'Join the Prisma Discord',
          content: 'https://pris.ly/discord',
          progress: "ON_PROGRESS"
        },
        {
          title: 'Prisma on YouTube',
          content: 'https://pris.ly/youtube',
          progress: "REJECT"
        },
      ],
    },
  },
  {
    name: 'William',
    email: 'william@mail.io',
    role: "TEAM",
    posts: {
      create: [
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://www.twitter.com/prisma',
          progress: "NOT_STARTED"
        },
        {
            title: "it",
            content: 'https://www.twitter.com/prisma',
            progress: "DONE"
          },
      ],
    },
  }
]

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()