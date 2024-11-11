import { PrismaClient } from "@prisma/client";
import { categories } from "../src/data/categories";
import { items } from "../src/data/items";

const prisma = new PrismaClient();

async function main() {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { tag: category.tag },
      update: {},
      create: category,
    });
  }

  // Usando upsert para itens
  for (const item of items) {
    await prisma.item.upsert({
      where: { id: item.id },
      update: {},
      create: item,
    });
  }

  console.log("Categorias e itens foram semeados ou já existem.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
