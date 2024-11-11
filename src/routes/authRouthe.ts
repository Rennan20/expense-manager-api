import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
const router = Router();
const userModel = new User();
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await userModel.findUnique({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username já em uso" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await userModel.create({
      username,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar o usuário", error });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.findUnique({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Usuário ou senha inválidos" });
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      return res
        .status(500)
        .json({ message: "Erro de configuração do servidor." });
    }

    const token = jwt.sign({ id: user.id }, secret, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login", error });
  }
});

export default router;
