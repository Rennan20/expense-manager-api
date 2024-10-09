import { PrismaClient, Item as PrismaItem } from "@prisma/client";

const prisma = new PrismaClient();

export class Item {
  async createItem(data: PrismaItem) {
    return await prisma.item.create({ data });
  }

  async getItems() {
    return await prisma.item.findMany();
  }

  async getItemById(id: number) {
    return await prisma.item.findUnique({ where: { id } });
  }

  async updateItem(id: number, data: Partial<PrismaItem>) {
    return await prisma.item.update({
      where: { id },
      data,
    });
  }

  async deleteItem(id: number) {
    return await prisma.item.delete({ where: { id } });
  }
}
