const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  //ruotsi yto (1osp)
  //Marko2703 <- syötä tämä etusivulla
  //play.seppo.io 767D42 <- tätä ei tarvi, kai?

