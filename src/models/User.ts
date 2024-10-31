import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class User {
  async create(data: { username: string; password: string }) {
    return await prisma.user.create({ data });
  }

  async findUnique(where: { username: string }) {
    return await prisma.user.findUnique({ where });
  }

  async findAll() {
    return await prisma.user.findMany();
  }

  async update(
    id: number,
    data: Partial<{ username: string; password: string }>
  ) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    return await prisma.user.delete({ where: { id } });
  }
}
