import { PrismaClient } from "@prisma/client";
import { categories } from "../src/data/categories"; // Ajuste o caminho se necessário
import { items } from "../src/data/items"; // Ajuste o caminho se necessário

const prisma = new PrismaClient();

async function main() {
  for (const category of categories) {
    await prisma.category.create({ data: category });
  }

  for (const item of items) {
    await prisma.item.create({ data: item });
  }

  console.log("Categorias e itens foram semeados.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
