import { User } from "../../prisma/schema.prisma";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
