import { PrismaClient, Category as PrismaCategory } from "@prisma/client";

const prisma = new PrismaClient();

export class Category {
  async createCategory(data: PrismaCategory) {
    return await prisma.category.create({ data });
  }

  async getCategories() {
    return await prisma.category.findMany();
  }

  async getCategoryByTag(tag: string) {
    return await prisma.category.findUnique({ where: { tag } });
  }

  async updateCategory(tag: string, data: Partial<PrismaCategory>) {
    return await prisma.category.update({
      where: { tag },
      data,
    });
  }

  async deleteCategory(tag: string) {
    return await prisma.category.delete({ where: { tag } });
  }
}
